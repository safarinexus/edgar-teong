import { getSortedPostListing } from "@/lib/posts";

import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';

import { FaArrowRight } from "react-icons/fa6";

export const metadata: Metadata = {
    title: 'Edgar Teong | Thoughts',
};
  

export default function Thoughts() {

    const allPostListing = getSortedPostListing();

    return (
        <main id="thoughts-container" className="w-full h-svh min-h-fit px-2 pt-2">
            <header className="w-full max-w-[1192px] h-fit p-10 pt-32 mx-auto flex flex-col justify-end rounded-[32px] bg-white border 
            border-neutral-300 dark:border-neutral-800 shadow-custom dark:shadow-custom-dark dark:bg-black space-y-2"
            >
                <h1 className="font-medium text-4xl sm:text-6xl lg:text-8xl group">
                    My Thoughts{" "}
                    <Image
                        src="/emojis/thoughts.webp" 
                        width={160}
                        height={160}
                        alt="thought bubble emoji" 
                        className="inline-block relative pointer-events-none size-7 sm:size-10 lg:size-20 sm:bottom-1 group-hover:animate-wave"
                    />
                </h1>
                <small className="sm:text-base lg:text-xl">Take a peek into what goes on in my head.</small>
            </header>
            <section id="thoughts-list" className="w-full max-w-[1192px] h-fit mx-auto mt-2 space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
                {allPostListing.map(({ slug, data }) => (
                    <Link 
                        href={"./thoughts/" + slug} 
                        key={slug} 
                        className="w-full h-full block group space-y-1 p-5 hover:opacity-100 sm:hover:-translate-y-1 sm:hover:translate-x-1 sm:duration-500 
                        transition-transform rounded-3xl border border-neutral-300 dark:border-neutral-800 shadow-custom dark:shadow-custom-dark
                        "
                    >
                        <h2 className="leading-none font-medium text-lg mb-3 sm:transition-opacity sm:duration-500 sm:group-hover:opacity-40">{data.title}<FaArrowRight className="ml-2 inline group-hover:animate-hoverRight"/></h2>
                        <p className="w-fit uppercase font-light text-xs text-amber-600 border-amber-600 dark:text-amber-400 dark:border-amber-400 border py-1 px-2 rounded-sm">{data.date}</p>
                        <p className="font-light italic text-sm opacity-60 line-clamp-2">{data.description}</p>
                    </Link>
                ))}
            </section>
        </main>
    )
}
