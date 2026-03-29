import Image from "next/image";

export default function Header(props: { title: string, heroImage?: string | null }) {
    return (
        <header>
            <h1 className="bg-black text-center text-white font-bold text-4xl py-4">{props.title}</h1>
            {props.heroImage && <Image src={props.heroImage} alt="Hero Image" width={1920} height={1080} className="w-full h-auto md:max-w-7xl md:mx-auto object-cover md:rounded-2xl" />}
        </header>
    );
}