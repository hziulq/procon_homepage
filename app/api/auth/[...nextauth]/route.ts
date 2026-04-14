import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { hashUserId } from "@/app/lib/crypt";
import { fetchInternalEndpoint } from "@/app/lib/fetch-internal-endpoint";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        // ドメイン制限: 指定されたドメインのメールアドレスのみログインを許可する
        async signIn({ user }) {
            const allowedDomain = process.env.GOOGLE_ALLOWED_DOMAIN!;
            return !!(user.email && user.email.endsWith(allowedDomain));
        },

        // 1. JWTが作成・更新された時に実行（トークンを保管する）
        async jwt({ token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token;
            }

            if (profile && profile.sub) {
                const hashedId = hashUserId(profile.sub);

                try {
                    // ID取得処理
                    const getRes = await fetchInternalEndpoint("POST", "/api/hashed_id/getid", {
                        hashed_id: hashedId,
                    });

                    if (getRes.ok) {
                        const data = await getRes.json();
                        token.id = data.user_id;
                    } else if (getRes.status === 404) {
                        // 未登録の場合は登録処理を行う
                        const regRes = await fetchInternalEndpoint("POST", "/api/hashed_id/register", {
                            hashed_id: hashedId,
                            name: profile.name,
                            email: profile.email,
                        });

                        if (regRes.ok) {
                            const data = await regRes.json();
                            token.id = data.user_id;
                        } else {
                            console.error("Failed to register user:", await regRes.text());
                        }
                    } else {
                        console.error("Failed to fetch user ID:", await getRes.text());
                    }
                } catch (error) {
                    console.error("Error communicating with internal API:", error);
                }
            }

            if (process.env.NODE_ENV === "development") {
                console.log("[NextAuth JWT Callback] Token updated", { id: token.id });
            }

            return token;
        },

        // 2. セッションが参照された時に実行
        async session({ session, token }) {
            // 必要に応じて、セッションにアクセストークンやIDを追加
            // session.accessToken = token.accessToken as string;
            if (token.id) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
    session: {
        strategy: "jwt",
        maxAge: 60 * 60, // 1時間で無効にする
    },
    // 必要に応じて secret を追加
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };