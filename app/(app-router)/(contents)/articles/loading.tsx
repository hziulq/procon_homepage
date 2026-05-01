import { ArticlesItemSkeleton } from "@/app/components/ui/articles/ArticlesItem";

export default function Loading() {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 border-b border-white/10 pb-4">ニュース</h2>
            <ul className="flex flex-col gap-5 mt-2">
                {/*skeleton list*/}
                {[...Array(5)].map((_, i) => (
                    <ArticlesItemSkeleton key={i} />
                ))}
            </ul>
        </div>
    );
}
