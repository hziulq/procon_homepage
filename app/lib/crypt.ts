import { createHmac } from "crypto";

/**
 * Google IDからハッシュ化されたユーザーIDを生成する。セキュリティの観点から、googleIDをそのまま運用しないための仕組み。
 * @param googleId: string Google ID
 * @returns: string ハッシュ化されたユーザーID
 * @throws: Error ID_SALTが定義されていない場合にスローされる
 */
export function hashUserId(googleId: string): string {
    const salt = process.env.ID_SALT;
    if (!salt) throw new Error("ID_SALT is not defined");

    // HMAC (Hash-based Message Authentication Code) を使用
    // アルゴリズムは現在主流の sha256
    return createHmac("sha256", salt)
        .update(googleId)
        .digest("hex"); // 16進数の文字列として出力
}