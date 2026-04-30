import { fetchInternalEndpoint } from "@/app/lib/fetch-internal-endpoint";
import { NewsContentSchema } from "@/types/news";
import DevLog from "@/app/lib/dev-log";
import convertToHtml from "@/app/lib/convert-to-html";
import "./content-container.css";

export default async function NewsViewPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    DevLog(`id:`, id);

    const response = await fetchInternalEndpoint(`GET`, `/api/news/${id}`);
    DevLog(`response:`, response);

    if (!response.ok) {
        return <div>サーバ側でエラーが起きました。</div>;
    }

    const newsData = NewsContentSchema.safeParse(await response.json());
    DevLog(`newsData:`, newsData.data);

    if (!newsData.success) {
        return <div>サーバ側でエラーが起きました。</div>;
    }

    const news = newsData.data;
    const safehtmlContent = await convertToHtml(news.content);

    return (
        <>
            <h1 className="pb-10 pt-3 text-2xl font-bold">{news.title}</h1>
            <p className="font-medium">投稿日: {news.created_at.split("T")[0]}</p>
            <div
                id="content-container"
                dangerouslySetInnerHTML={{ __html: safehtmlContent }}
            />
        </>
    );
}