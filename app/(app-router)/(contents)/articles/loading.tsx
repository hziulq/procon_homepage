import { ArticlesItemSkeleton } from "@/app/components/ui/articles/ArticlesItem";

export default function Loading() {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">ニュース</h2>
            <ul>
                {/*skeleton list*/}
                {[...Array(5)].map((_, i) => (
                    <ArticlesItemSkeleton key={i} />
                ))}
            </ul>
        </>
    );
}