"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavigationBarItem(props: { title: string, url: string }) {
    const pathname = usePathname();
    const isActive = pathname === props.url;

    return (
        <li className="flex-none">
            <Link href={props.url} className="block w-full outline-none group">
                <div className={`py-2 px-4 md:px-6 rounded-xl transition-all duration-300 ease-in-out border text-sm md:text-base whitespace-nowrap ${isActive
                    ? "bg-blue-500/20 text-blue-300 font-bold shadow-[0_0_15px_rgba(59,130,246,0.4)] border-blue-400/50"
                    : "bg-transparent text-slate-300 font-medium border-transparent hover:bg-white/10 hover:text-white hover:border-white/20"
                    }`}>
                    {props.title}
                </div>
            </Link>
        </li>
    );
}