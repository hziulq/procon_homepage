"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavigationBarItem(props: { title: string, url: string }) {
    const pathname = usePathname();
    const isActive = pathname === props.url;

    return (
        <li className="flex-1 text-center border-b border-gray-200 dark:border-gray-700">
            <Link href={props.url}>
                <div className={`py-2 transition-colors ${isActive
                    ? "bg-gray-200 dark:bg-gray-700 font-bold text-blue-600 dark:text-blue-400"
                    : "text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}>
                    {props.title}
                </div>
            </Link>
        </li>
    );
}