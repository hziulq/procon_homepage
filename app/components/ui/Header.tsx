import Image from "next/image";
import LoginBtn from "../LoginBtn";

export default function Header(props: { title: string, heroImage?: string | null }) {
    return (
        <header>
            <div className="bg-black relative flex items-center justify-center py-4 w-full px-4">
                <h1 className="text-white font-bold text-4xl text-center">{props.title}</h1>
                <div className="absolute right-4 md:right-8 flex items-center">
                    <LoginBtn />
                </div>
            </div>
            <div className="w-full bg-black">
                {props.heroImage && <Image src={props.heroImage} alt="Hero Image" width={1920} height={1080} className="w-full h-auto md:max-w-7xl md:mx-auto object-cover md:rounded-2xl" />}
            </div>
        </header>
    );
}