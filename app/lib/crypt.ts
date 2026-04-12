import { createHmac } from "crypto";

export function hashUserId(googleId: string): string {
    const salt = process.env.ID_SALT;
    if (!salt) throw new Error("ID_SALT is not defined");

    // HMAC (Hash-based Message Authentication Code) を使用
    // アルゴリズムは現在主流の sha256
    return createHmac("sha256", salt)
        .update(googleId)
        .digest("hex"); // 16進数の文字列として出力
}