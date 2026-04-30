import { fetchInternalEndpoint } from "@/app/lib/fetch-internal-endpoint";
import { ArticlesContentSchema } from "@/types/articles";
import DevLog from "@/app/lib/dev-log";
import convertToHtml from "@/app/lib/convert-to-html";
import "@/app/components/ui/articles/content-container.css";

export default async function articlesViewPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    DevLog(`id:`, id);

    const response = await fetchInternalEndpoint(`GET`, `/api/articles/${id}`);
    DevLog(`response:`, response);

    if (!response.ok) {
        return <div>サーバ側でエラーが起きました。</div>;
    }

    const articlesData = ArticlesContentSchema.safeParse(await response.json());
    DevLog(`articlesData:`, articlesData.data);

    if (!articlesData.success) {
        return <div>サーバ側でエラーが起きました。</div>;
    }

    const articles = articlesData.data;
    const safehtmlContent = await convertToHtml(articles.content);

    return (
        <article className="flex flex-col">
            <div
                id="content-container"
                className="text-slate-200 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: safehtmlContent }}
            />
            <footer className="mt-10 border-white/10 border-t pt-8 mt-4">
                {/* <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-400 mb-6">{articles.title}</h1> */}
                <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <span className="bg-slate-800/50 border border-slate-700/50 px-3 py-1.5 rounded-full text-sm flex items-center shadow-inner tracking-wider">
                        <span className="mr-2 text-blue-400">📅</span>
                        {articles.created_at.split("T")[0]} 作成
                    </span>
                </div>
            </footer>
        </article>
    );
}