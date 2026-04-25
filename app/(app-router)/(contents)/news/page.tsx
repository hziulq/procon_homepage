import NewsItem from "@/app/components/ui/news/NewsItem";
import { fetchInternalEndpoint } from "@/app/lib/fetch-internal-endpoint";
import { NewsListSchema } from "@/types/news";

export default async function NewsPage() {

    const res = await fetchInternalEndpoint("GET", "/news");
    const newsData = NewsListSchema.parse(await res.json());

    if (process.env.NODE_ENV === "development") {
        console.log("newsData", newsData);
    }

    return (
        <>
            <main className="w-full md:max-w-7xl md:mx-auto rounded-xl bg-black/5 p-6 dark:bg-white/5 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">ニュース</h2>
                <ul>
                    {newsData.map((news) => (
                        <NewsItem key={news.id} title={news.title} created_at={news.created_at} url={`/news/${news.id}/view`} />
                    ))}
                </ul>
            </main>
        </>
    );
}