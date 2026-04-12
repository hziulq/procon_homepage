import { news } from "@/app/lib/placeholder-data";
import NewsItem from "@/app/components/ui/news/NewsItem";

export default function NewsPage() {
    return (
        <>
            <main className="w-full md:max-w-7xl md:mx-auto rounded-xl bg-black/5 p-6 dark:bg-white/5 shadow-sm">
                <h2>ニュース</h2>
                <ul>
                    {news.map((news) => (
                        <NewsItem key={news.id} title={news.title} date={news.date} url={news.url} />
                    ))}
                </ul>
            </main>
        </>
    );
}