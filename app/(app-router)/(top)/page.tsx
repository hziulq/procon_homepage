import ArticlesList from "../../components/ui/top/ArticlesList";
import ImageMap from "../../components/ui/top/ImageMap";
import { fetchInternalEndpoint } from "@/app/lib/fetch-internal-endpoint";
import { ArticlesListSchema } from "@/types/articles";
import DevLog from "@/app/lib/dev-log";

export default async function Home() {

    const activityArticles = await fetchInternalEndpoint("GET", "/api/articles?genre=activity&limit=5");
    const updateArticles = await fetchInternalEndpoint("GET", "/api/articles?genre=update&limit=5");
    DevLog(`activityArticles:`, activityArticles);
    DevLog(`updateArticles:`, updateArticles);

    const activityArticlesData = ArticlesListSchema.safeParse(await activityArticles.json());
    const updateArticlesData = ArticlesListSchema.safeParse(await updateArticles.json());
    DevLog(`activityArticlesData:`, activityArticlesData);
    DevLog(`updateArticlesData:`, updateArticlesData);

    const invite_url = process.env.NEXT_PUBLIC_INVITE_URL || "/";
    const email = process.env.NEXT_PUBLIC_MY_EMAIL || "";


    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-8 py-8 gap-8 w-full z-10 relative">
            <main className="flex-1 rounded-3xl backdrop-blur-md bg-slate-900/40 border border-white/10 p-6 md:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        activityArticlesData.success && (
                            <ArticlesList title="最新の活動" articlesList={activityArticlesData.data.map((article) => {
                                return {
                                    title: article.title,
                                    url: `/articles/${article.id}/view`
                                }
                            })} />
                        )}
                    {
                        updateArticlesData.success && (
                            <ArticlesList title="最新の更新" articlesList={updateArticlesData.data.map((article) => {
                                return {
                                    title: article.title,
                                    url: `/articles/${article.id}/view`
                                }
                            })} />
                        )}
                </div>
            </main>
            <aside className="w-full md:w-80 rounded-xl bg-black/5 p-6 dark:bg-white/5 shadow-sm">
                <div className="flex flex-col gap-4">
                    <ImageMap title="コンタクト" image="https://pjanndqpkhbskfeqdnhm.supabase.co/storage/v1/object/public/procon_public/images/contact.png" link={`mailto:${email}`} />
                    {/* <ImageMap title="プロダクト" image="/images/product.png" link="/product" /> */}
                    <ImageMap title="リクルート" image="https://pjanndqpkhbskfeqdnhm.supabase.co/storage/v1/object/public/procon_public/images/recruit.png" link={invite_url} />
                </div>
            </aside>
        </div>
    );
}