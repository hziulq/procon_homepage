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

    if (!process.env.INTERNAL_API_URL) {
        throw new Error("INTERNAL_API_URL is not defined");
    }

    const bearerToken = method === "POST" ? process.env.INTERNAL_API_SECRET : process.env.INTERNAL_API_GET;

    if (!bearerToken) {
        throw new Error("BEARER_TOKEN is not defined");
    }



    return fetch(`${process.env.INTERNAL_API_URL}${endpoint}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(body),
    });
}

