// types/next-auth.d.ts
import { DefaultSession } from "next-auth" // 1. DefaultSessionを明示的にインポート

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