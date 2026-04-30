import Link from "next/link";

export default function ArticlesList(props: { title: string, articlesList: { title: string, url: string }[] }) {
    return (
        <div className="flex flex-col h-full bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-inner transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-3">
                <div className="w-1.5 h-6 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                <h2 className="text-xl font-bold tracking-wider text-slate-100">
                    {props.title}
                </h2>
            </div>
            <ul className="flex-1 space-y-3">
                {props.articlesList.map((articles, index) => (
                    <li key={index} className="group">
                        <Link href={articles.url} className="flex items-center text-slate-300 transition-all duration-300 hover:text-blue-400">
                            <span className="mr-2 text-blue-500 opacity-0 transform -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">▸</span>
                            <span className="transform transition-transform duration-300 group-hover:translate-x-1">{articles.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}