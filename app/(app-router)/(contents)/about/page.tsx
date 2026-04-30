import { fetchInternalEndpoint } from "@/app/lib/fetch-internal-endpoint";
import DevLog from "@/app/lib/dev-log";
import { AboutContentSchema } from "@/types/articles";
import convertToHtml from "@/app/lib/convert-to-html";
import "@/app/components/ui/articles/content-container.css";

export default async function AboutPage() {

    const aboutData = await fetchInternalEndpoint("GET", "/api/about");
    DevLog("aboutData: ", aboutData);

    if (!aboutData.ok) {
        return (
            <div>
                <h2 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 border-b border-white/10 pb-4">概要</h2>
                <p className="text-slate-300 leading-relaxed">エラーが発生しました</p>
            </div>
        );
    }

    const aboutDataJson = await aboutData.json();
    DevLog("aboutDataJson: ", aboutDataJson);

    const aboutDataTyped = AboutContentSchema.safeParse(aboutDataJson);
    DevLog("aboutDataTyped: ", aboutDataTyped);


    if (!aboutDataTyped.success) {
        return (
            <div>
                <h2 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 border-b border-white/10 pb-4">概要</h2>
                <p className="text-slate-300 leading-relaxed">エラーが発生しました</p>
            </div>
        );
    }

    const safehtmlContent = await convertToHtml(aboutDataTyped.data.content);
    DevLog("safehtmlContent: ", safehtmlContent);

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 border-b border-white/10 pb-4">概要</h2>
            <div
                id="content-container"
                className="text-slate-200 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: safehtmlContent }}
            />
        </div>
    );
}