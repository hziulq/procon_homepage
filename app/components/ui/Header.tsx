import Image from "next/image";
import LoginBtn from "../LoginBtn";

export default function Header(props: { title: string, heroImage?: string | null }) {
    return (
        <header className="flex flex-col w-full">
            <div className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/60 border-b border-white/10 shadow-lg">
                <div className="relative flex items-center justify-center py-4 px-4 w-full max-w-7xl mx-auto">
                    <h1 className="font-extrabold text-2xl md:text-4xl text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 drop-shadow-sm">
                        {props.title}
                    </h1>
                    <div className="absolute right-4 md:right-8 flex items-center">
                        <LoginBtn />
                    </div>
                </div>
            </div>
            {props.heroImage && (
                <div className="w-full mt-6 px-4 md:px-8">
                    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
                        <Image src={props.heroImage} alt="Hero Image" width={1920} height={1080} className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105" priority />
                    </div>
                </div>
            )}
        </header>
    );
}