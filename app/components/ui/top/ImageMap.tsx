import Link from "next/link";
import Image from "next/image";

export default function ImageMap(props: { title: string, image: string, link: string }) {
    return (
        <Link href={props.link}>
            <Image src={props.image} alt={props.title} width={1920} height={1080} className="w-full h-auto rounded-lg shadow-sm hover:opacity-90 transition-opacity" />
        </Link>
    );
}