import NavigationBarItem from "./NavigationBarItem";

export default function NavigationBar() {
    return (
        <nav className="bg-gradient-to-b from-green-500 to-yellow-300 w-full">
            <ul className="flex flex-col md:flex-row justify-center gap-4 p-2 w-full md:max-w-7xl md:mx-auto">
                <NavigationBarItem title="TOP" url="/" />
                <NavigationBarItem title="概要" url="/about" />
                <NavigationBarItem title="ニュース" url="/news" />
                <NavigationBarItem title="部員" url="/members" />
                <NavigationBarItem title="スペシャル" url="/spesials" />
                <NavigationBarItem title="アクセス" url="/access" />
                <NavigationBarItem title="お問い合わせ" url="/contact" />
            </ul>
        </nav>
    );
}