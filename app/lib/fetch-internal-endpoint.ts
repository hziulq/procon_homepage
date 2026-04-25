/**
 * 内部APIへリクエストを送信するヘルパー関数
 * @param method: string リクエストメソッド
 * @param endpoint: string APIエンドポイント
 * @param body: object リクエストボディ、POST以外は不要
 * @returns: Promise<Response> レスポンス
 * @throws: Error INTERNAL_API_URLまたはBEARER_TOKENが定義されていない場合にスローされる
 */
export async function fetchInternalEndpoint(method: string, endpoint: string, body?: Record<string, unknown>) {

    if (process.env.NODE_ENV === "development") {
        console.log("method", method);
    }

    const bearerToken = method === "POST" ? process.env.INTERNAL_API_SECRET : "";

    return fetch(`${process.env.INTERNAL_API_URL}${endpoint}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(body),
    });
}

