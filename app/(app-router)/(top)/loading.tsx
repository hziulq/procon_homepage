export default function Loading() {
    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-8 py-8 gap-8 w-full z-10 relative">
            <main className="flex-1 rounded-3xl backdrop-blur-md bg-slate-900/40 border border-white/10 p-6 md:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Skeleton for Activity Articles */}
                    <div className="flex flex-col h-full bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-inner">
                        <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-3">
                            <div className="w-1.5 h-6 bg-slate-700/50 rounded-full animate-pulse"></div>
                            <div className="h-6 w-32 bg-slate-700/50 rounded animate-pulse"></div>
                        </div>
                        <ul className="flex-1 space-y-4">
                            <li className="h-5 w-full bg-slate-700/50 rounded animate-pulse"></li>
                            <li className="h-5 w-11/12 bg-slate-700/50 rounded animate-pulse"></li>
                            <li className="h-5 w-full bg-slate-700/50 rounded animate-pulse"></li>
                            <li className="h-5 w-4/5 bg-slate-700/50 rounded animate-pulse"></li>
                            <li className="h-5 w-full bg-slate-700/50 rounded animate-pulse"></li>
                        </ul>
                    </div>
                    {/* Skeleton for Update Articles */}
                    <div className="flex flex-col h-full bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-inner">
                        <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-3">
                            <div className="w-1.5 h-6 bg-slate-700/50 rounded-full animate-pulse"></div>
                            <div className="h-6 w-32 bg-slate-700/50 rounded animate-pulse"></div>
                        </div>
                        <ul className="flex-1 space-y-4">
                            <li className="h-5 w-11/12 bg-slate-700/50 rounded animate-pulse"></li>
                            <li className="h-5 w-full bg-slate-700/50 rounded animate-pulse"></li>
                            <li className="h-5 w-4/5 bg-slate-700/50 rounded animate-pulse"></li>
                            <li className="h-5 w-full bg-slate-700/50 rounded animate-pulse"></li>
                            <li className="h-5 w-11/12 bg-slate-700/50 rounded animate-pulse"></li>
                        </ul>
                    </div>
                </div>
            </main>
            <aside className="w-full md:w-80 rounded-xl bg-black/5 p-6 dark:bg-white/5 shadow-sm">
                <div className="flex flex-col gap-4">
                    <div className="h-[120px] w-full bg-slate-700/50 rounded-xl animate-pulse"></div>
                    <div className="h-[120px] w-full bg-slate-700/50 rounded-xl animate-pulse"></div>
                </div>
            </aside>
        </div>
    );
}
