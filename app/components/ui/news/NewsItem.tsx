import Link from "next/link";

export default function NewsItem(props: { title: string, date: string, url: string }) {
    return (
        <li>
            <Link href={props.url}>
                <div className="flex flex-col bg-white dark:bg-black/20 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                    <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
                        {props.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">{props.date}</p>
                </div>
            </Link>
        </li>
    );
}