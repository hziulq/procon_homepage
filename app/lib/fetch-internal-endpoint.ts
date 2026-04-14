// 内部APIへリクエストを送信するヘルパー関数
export async function fetchInternalEndpoint(method: string, endpoint: string, body: Record<string, unknown>) {

    if (process.env.NODE_ENV === "development") {
        console.log("method", method);
    }

    if (!process.env.INTERNAL_API_SECRET || !process.env.INTERNAL_API_GET || !process.env.INTERNAL_API_URL) {
        throw new Error("INTERNAL_API_SECRET or INTERNAL_API_GET or INTERNAL_API_URL is not defined");
    }

    let bearerToken: string = "";
    if (method === "POST") {
        bearerToken = process.env.INTERNAL_API_SECRET;
    }
    else {
        bearerToken = process.env.INTERNAL_API_GET;
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

