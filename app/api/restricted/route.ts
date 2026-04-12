// app/api/restricted/route.ts
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    console.log(session);

    if (session) {
        return NextResponse.json({
            content: "これは保護されたコンテンツです。ログインしているため表示されています。",
        });
    }

    return NextResponse.json(
        { error: "このコンテンツを閲覧するにはログインが必要です。" },
        { status: 401 } // 未認証ステータスを返すのが一般的
    );
}