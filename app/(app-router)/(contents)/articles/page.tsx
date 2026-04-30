import ArticlesItem from "@/app/components/ui/articles/ArticlesItem";
import DevLog from "@/app/lib/dev-log";
import { fetchInternalEndpoint } from "@/app/lib/fetch-internal-endpoint";
import { ArticlesListSchema } from "@/types/articles";

export default async function ArticlesPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

    const searchParams = await props.searchParams;
    const page = searchParams?.page ? Number(searchParams.page) : 1;

    const response = await fetchInternalEndpoint("GET", `/api/articles?page=${page}`);
    DevLog(`response:`, response);
    const data = await response.json()
    DevLog(`data:`, data);

    const articlesData = ArticlesListSchema.safeParse(data);
    DevLog(`articlesData:`, articlesData);

    if (!articlesData.success) {
        return <div>サーバ側でエラーが起きました。</div>;
    }

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 border-b border-white/10 pb-4">ニュース</h2>
            <ul className="flex flex-col gap-5 mt-2">
                {articlesData.data.map((articles) => (
                    <li key={articles.id}>
                        <ArticlesItem
                            title={articles.title}
                            created_at={articles.created_at.split('T')[0]}
                            url={`/articles/${articles.id}/view`}
                            genre={articles.genre}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}