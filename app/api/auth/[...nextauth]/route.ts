// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth"; // 型をインポート
import GoogleProvider from "next-auth/providers/google";



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
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        // 2. セッションが参照された時に実行
        async session({ session, /*token*/ }) {
            // 必要に応じて、セッションにアクセストークンを追加
            // session.accessToken = token.accessToken as string;
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