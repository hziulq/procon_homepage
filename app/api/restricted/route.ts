// app/api/restricted/route.ts
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(authOptions);
    if (process.env.NODE_ENV === "development") {
        console.log("session", session);
    }

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