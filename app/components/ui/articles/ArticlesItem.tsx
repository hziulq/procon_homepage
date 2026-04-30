import Link from "next/link";

export default function ArticlesItem(props: { title: string, created_at: string, url: string, genre: string | null }) {
    return (
        <Link href={props.url} className="block group outline-none">
            <div className="flex flex-col bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-inner transition-all duration-300 group-hover:bg-slate-800/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:-translate-y-1 group-hover:border-blue-500/30">
                <h2 className="text-xl font-bold mb-4 text-slate-100 border-b border-white/10 pb-3 transition-colors duration-300 group-hover:text-blue-400 flex items-center gap-2">
                    <span className="text-blue-500 opacity-0 transform -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">▸</span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">{props.title}</span>
                </h2>
                <div className="flex items-center gap-3 mt-1">
                    <span className="text-slate-400 text-sm font-medium tracking-wide">{props.created_at}</span>
                    {props.genre && (
                        <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full px-3 py-0.5 text-xs font-bold tracking-wider">
                            {props.genre}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}

export function ArticlesItemSkeleton() {
    return (
        <li>
            <div className="flex flex-col bg-slate-800/20 backdrop-blur-sm p-6 rounded-2xl border border-white/5 animate-pulse">
                <div className="mb-4 border-b border-white/10 pb-3">
                    <div className="h-7 bg-white/10 rounded-md w-3/4"></div>
                </div>
                <div className="h-5 bg-white/10 rounded-md w-1/4 mt-1"></div>
            </div>
        </li>
    );
}
