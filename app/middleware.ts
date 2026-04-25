// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * ミドルウェア
 * @param request リクエスト
 * @returns レスポンス
 */
export function middleware(request: NextRequest) {
    // ここで request を解析して処理を書く
    if (process.env.NODE_ENV === "development") {
        console.log("request", request.url);
    }
    return NextResponse.next(); // 何もせず次に進む
}
