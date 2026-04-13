// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth"; // 型をインポート
import GoogleProvider from "next-auth/providers/google";
import { hashUserId } from "@/app/lib/crypt";


export const authOptions: NextAuthOptions = { // ここに型を指定
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
            if (user.email && user.email.endsWith(allowedDomain)) {
                return true;
            }
            return false; // それ以外のドメインはログインを拒否
        },
        // 1. JWTが作成・更新された時に実行（トークンを保管する）
        async jwt({ token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token;
            }

            console.log("profile", profile, profile?.sub)
            console.log("account", account)
            if (profile && profile.sub) {
                const hashedId = hashUserId(profile.sub);

                try {
                    const res = await fetch(`${process.env.INTERNAL_API_URL}/api/hashed_id/getid`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${process.env.INTERNAL_API_SECRET}`,
                        },
                        body: JSON.stringify({
                            hashed_id: hashedId,
                        }),
                    });
                    if (res.ok) {
                        const data = await res.json();
                        console.log("data", data)
                        token.id = data.user_id;
                    }

                    if (res.status === 404) {
                        const res = await fetch(`${process.env.INTERNAL_API_URL}/api/hashed_id/register`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${process.env.INTERNAL_API_SECRET}`,
                            },
                            body: JSON.stringify({
                                hashed_id: hashedId,
                                name: profile.name,
                                email: profile.email,
                            }),
                        });

                        if (res.ok) {
                            const data = await res.json();
                            token.id = data.user_id;
                        }
                    }
                } catch (error) {
                    console.error("Error fetching user ID:", error);
                }

            }
            console.log("token", token)
            return token;
        },
        // 2. セッションが参照された時に実行
        async session({ session, token }) {
            // 必要に応じて、セッションにアクセストークンを追加
            // session.accessToken = token.accessToken as string;

            // 必要に応じて、セッションにIDを追加
            console.log("token.id", token.id)
            session.user.id = token.id as string;
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