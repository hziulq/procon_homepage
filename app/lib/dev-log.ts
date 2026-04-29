/**
 * デバッグ用ログ
 * @param args unknown[]
 * @returns void
 */
export default function DevLog(...args: unknown[]) {
    if (process.env.NODE_ENV === "development") {
        // スプレッド演算子でそのまま渡す
        console.log(...args);
    }
}

// 使い方（カンマ区切りで渡すのがコツ！）
// DevLog("User Data:", userData);