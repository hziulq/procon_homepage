import DevLog from "./dev-log";

/**
 * 内部APIへリクエストを送信するヘルパー関数
 * @param method: string リクエストメソッド
 * @param endpoint: string APIエンドポイント
 * @param body: object リクエストボディ、POST以外は不要
 * @returns: Promise<Response> レスポンス
 * @throws: Error INTERNAL_API_URLまたはBEARER_TOKENが定義されていない場合にスローされる
 */
export async function fetchInternalEndpoint(method: string, endpoint: string, body?: Record<string, unknown>) {

    DevLog(`method: ${method}`);
    DevLog(`endpoint: ${endpoint}`);
    DevLog(`body: ${body}`);

    const apiUrl = process.env.NODE_ENV === "development" ? process.env.DEV_INTERNAL_API_URL : process.env.INTERNAL_API_URL;
    DevLog(`apiUrl: ${apiUrl}`);

    if (!process.env.INTERNAL_API_SECRET) {
        throw new Error("INTERNAL_API_SECRET is not defined");
    }

    const bearerToken = process.env.INTERNAL_API_SECRET;
    const bypassSecret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

    const response = await fetch(`${apiUrl}${endpoint}`, {
        method: method,
        headers: {
            "x-vercel-protection-bypass": bypassSecret || "",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${bearerToken}`,
        },
        body: body ? JSON.stringify(body) : undefined,
    });
    DevLog(`response: ${response}`);
    return response;
}

