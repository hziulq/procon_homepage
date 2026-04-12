// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth" // 1. DefaultSessionを明示的にインポート
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        accessToken?: string;
        user: {
            id?: string;
        } & DefaultSession["user"] // これで DefaultSession が使えるようになります
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string;
    }
}