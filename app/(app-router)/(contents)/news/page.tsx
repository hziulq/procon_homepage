import NewsItem from "@/app/components/ui/news/NewsItem";
import DevLog from "@/app/lib/dev-log";
import { fetchInternalEndpoint } from "@/app/lib/fetch-internal-endpoint";
import { NewsListSchema } from "@/types/news";

export default async function NewsPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

    const searchParams = await props.searchParams;
    const page = searchParams?.page ? Number(searchParams.page) : 1;

    const response = await fetchInternalEndpoint("GET", `/api/news?page=${page}`);
    const data = await response.json()
    DevLog(`data:`, data);

    const newsData = NewsListSchema.safeParse(data);
    DevLog(`newsData:`, newsData);

    if (!newsData.success) {
        return <div>サーバ側でエラーが起きました。</div>;
    }

    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-white">ニュース</h2>
            <ul>
                {newsData.data.map((news) => (
                    <NewsItem key={news.id} title={news.title} created_at={news.created_at.split('T')[0]} url={`/news/${news.id}/view`} />
                ))}
            </ul>
        </>
    );
}