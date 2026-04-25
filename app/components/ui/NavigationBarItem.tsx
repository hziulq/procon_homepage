"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavigationBarItem(props: { title: string, url: string }) {
    const pathname = usePathname();
    const isActive = pathname === props.url;

    return (
        <li className="flex-1 text-center">
            <Link href={props.url} className="block w-full outline-none">
                <div className={`py-3 px-4 rounded-xl transition-all duration-300 ease-in-out backdrop-blur-md border border-transparent ${
                    isActive
                        ? "bg-white/40 text-gray-900 font-extrabold shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] border-white/50 scale-105"
                        : "text-gray-800 font-medium hover:bg-white/30 hover:text-black hover:-translate-y-1 hover:shadow-lg hover:border-white/40"
                }`}>
                    {props.title}
                </div>
            </Link>
        </li>
    );
}