import Link from "next/link";
import Image from "next/image";

export default function ImageMap(props: { title: string, image: string, link: string }) {
    return (
        <Link href={props.link} className="block group w-full outline-none">
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:border-blue-500/50">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <Image src={props.image} alt={props.title} width={1920} height={1080} className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-bold text-sm tracking-widest text-center">{props.title}</p>
                </div>
            </div>
        </Link>
    );
}