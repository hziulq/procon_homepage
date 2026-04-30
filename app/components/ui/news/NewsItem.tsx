import Link from "next/link";

export default function NewsItem(props: { title: string, created_at: string, url: string, genre: string | null }) {
    return (
        <Link href={props.url}>
            <div className="flex flex-col bg-black/60 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
                    {props.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{props.created_at} {props.genre ? `[${props.genre}]` : ""}</p>
            </div>
        </Link>
    );
}

export function NewsItemSkeleton() {
    return (
        <li>
            <div className="flex flex-col bg-white dark:bg-black/20 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 animate-pulse">
                <div className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                    <div className="h-7 bg-black/10 dark:bg-white/10 rounded-md w-3/4"></div>
                </div>
                <div className="h-5 bg-black/10 dark:bg-white/10 rounded-md w-1/4"></div>
            </div>
        </li>
    );
}
