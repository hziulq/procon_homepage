import NavigationBarItem from "./NavigationBarItem";

export default function NavigationBar() {
    return (
        <div className="w-full mt-6 mb-8 px-4 flex justify-center relative z-40">
            <nav className="backdrop-blur-md bg-slate-900/40 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-2xl w-full max-w-5xl">
                <ul className="flex flex-row overflow-x-auto md:justify-center gap-2 p-2 hide-scrollbar">
                    <NavigationBarItem title="TOP" url="/" />
                    <NavigationBarItem title="概要" url="/about" />
                    <NavigationBarItem title="ニュース" url="/articles" />
                    <NavigationBarItem title="部員" url="/members" />
                    <NavigationBarItem title="スペシャル" url="/specials" />
                    <NavigationBarItem title="アクセス" url="/access" />
                    <NavigationBarItem title="コンタクト" url="/contact" />
                </ul>
            </nav>
        </div>
    );
}