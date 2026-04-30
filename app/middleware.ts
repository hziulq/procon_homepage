// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import DevLog from './lib/dev-log';

/**
 * ミドルウェア
 * @param request リクエスト
 * @returns レスポンス
 */
export function middleware(request: NextRequest) {
    // ここで request を解析して処理を書く
    DevLog(`middleware: ${request.url}`);
    return NextResponse.next(); // 何もせず次に進む
}
