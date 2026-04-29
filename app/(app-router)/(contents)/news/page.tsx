import NewsItem from "@/app/components/ui/news/NewsItem";
import DevLog from "@/app/lib/dev-log";
import { fetchInternalEndpoint } from "@/app/lib/fetch-internal-endpoint";
import { NewsListSchema } from "@/types/news";

export default async function NewsPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

    const searchParams = await props.searchParams;
    const page = searchParams?.page ? Number(searchParams.page) : 1;

    const res = await fetchInternalEndpoint("GET", `/api/news?page=${page}`);

    DevLog(`res:`, res);

    const newsData = NewsListSchema.safeParse(await res.json());

    DevLog(`newsData:`, newsData);

    if (!newsData.success) {
        return <div>サーバ側でエラーが起きました。</div>;
    }



    return (
        <>
            <main className="w-full md:max-w-7xl md:mx-auto rounded-xl bg-black/5 p-6 dark:bg-white/5 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">ニュース</h2>
                <ul>
                    {newsData.data.map((news) => (
                        <NewsItem key={news.id} title={news.title} created_at={news.created_at} url={`/news/${news.id}/view`} />
                    ))}
                </ul>
            </main>
        </>
    );
}