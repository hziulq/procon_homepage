import { fetchInternalEndpoint } from "@/app/lib/fetch-internal-endpoint";
import { NewsSchema } from "@/types/news";
import DevLog from "@/app/lib/dev-log";

export default async function NewsViewPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    DevLog(`id:`, id);

    const response = await fetchInternalEndpoint(`GET`, `/api/news/${id}`);
    DevLog(`response:`, response);

    if (!response.ok) {
        return <div>サーバ側でエラーが起きました。</div>;
    }

    const newsData = NewsSchema.safeParse(await response.json());
    DevLog(`newsData:`, newsData);

    if (!newsData.success) {
        return <div>サーバ側でエラーが起きました。</div>;
    }

    const news = newsData.data;

    return (
        <main className="flex justify-center">
            <div className="w-full md:max-w-7xl bg-black/40 p-10 mt-5 rounded-2xl">
                <h1 className="pb-10 pt-3 text-2xl font-bold">{news.title || "News View Page"}</h1>
                <p>{news.created_at || "News View Page"}</p>
                <div>{news.content || "News View Page"}</div>
            </div>
        </main>
    );
}