import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata, Post, ListingPost } from "@/lib/types"

const postsDirectory = path.join(process.cwd(), "thoughtposts");

function parseCustomDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split(' ');
  const cleanDay = day.replace(/(st|nd|rd|th)/, '');
  
  const formattedDate = `${month} ${cleanDay} ${year}`;
  
  return new Date(formattedDate);
}

export function getSortedPostListing():ListingPost[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostListingData: ListingPost[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents) as unknown as { data: Metadata };

    return {
      slug,
      data,
    };
  });

  return allPostListingData.sort((a: ListingPost, b: ListingPost) => {
    const dateA = parseCustomDate(a.data.date);
    const dateB = parseCustomDate(b.data.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({ id: fileName.replace(/\.md$/, "") }));
};

export function getPostData(slug: string):Post {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents) as unknown as {
        data: Metadata;
        content: string;
        };
  
    return {
        slug,
        data,
        content
    }
}

