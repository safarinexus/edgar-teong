import { getPostData, getAllPostIds } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { tParams } from "@/lib/types"

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function Thought(props: { params: tParams }) {
  const { slug } = await props.params;
  const post = await getPostData(slug);

  return (
    <main className="p-20 h-svh min-h-fit w-full px-2 pt-2">
      <header
        id="post-header"
        className="w-full max-w-[1192px] h-fit p-10 pt-20 mx-auto flex flex-col rounded-[32px] bg-white border
        border-neutral-300 dark:border-neutral-800 shadow-custom dark:shadow-custom-dark dark:bg-black space-y-2"
      >
        <Link href="/thoughts" className="relative inline w-fit group hover:opacity-100">
          <div className="absolute -left-[6px] -top-1 bg-neutral-300 rounded-full w-10 h-10 opacity-0 sm:group-hover:opacity-55 sm:transition-opacity sm:duration-400"></div>
          <IoIosArrowBack className="size-8 relative -left-1"/>
        </Link>
        <div id="thoughts-headertext-wrapper">
          <h1 className="font-semibold text-5xl">{post.data.title}</h1>
          <h3 className="font-light text-base mt-2 opacity-60">{post.data.description} • {post.data.date}</h3>
        </div>
      </header>
      <article 
        id="post-content" 
        className="w-full max-w-[820px] h-fit mx-auto mt-5 px-2 sm:px-10 text-lg sm:text-xl
          prose dark:prose-invert prose-headings:m-0 prose-headings:font-medium prose-headings:tracking-tighter
          prose-p:m-0 prose-p:mt-2 prose-p:mb-10 prose-p:leading-normal
        "
        >
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}