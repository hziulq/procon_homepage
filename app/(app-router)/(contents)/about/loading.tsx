export default function Loading() {
    return (
        <div className="flex flex-col gap-6 animate-pulse">
            <div className="h-10 w-48 bg-slate-700/50 rounded"></div>
            <div className="space-y-4 mt-4">
                <div className="h-4 w-full bg-slate-700/50 rounded"></div>
                <div className="h-4 w-full bg-slate-700/50 rounded"></div>
                <div className="h-4 w-5/6 bg-slate-700/50 rounded"></div>
                <div className="h-4 w-full bg-slate-700/50 rounded"></div>
                <div className="h-4 w-4/6 bg-slate-700/50 rounded"></div>
            </div>
            <div className="space-y-4 mt-8">
                <div className="h-8 w-64 bg-slate-700/50 rounded"></div>
                <div className="h-4 w-full bg-slate-700/50 rounded"></div>
                <div className="h-4 w-5/6 bg-slate-700/50 rounded"></div>
            </div>
            <div className="space-y-4 mt-8">
                <div className="h-8 w-56 bg-slate-700/50 rounded"></div>
                <div className="h-4 w-full bg-slate-700/50 rounded"></div>
                <div className="h-4 w-11/12 bg-slate-700/50 rounded"></div>
                <div className="h-4 w-full bg-slate-700/50 rounded"></div>
            </div>
        </div>
    );
}
