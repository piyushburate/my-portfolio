"use client";

import BackButton from "@/components/back-button";
import PageHeading from "@/components/page-heading";
import RichTextRenderer from "@/components/rich-text-renderer";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/utils";
import { useBlogStore } from "@/stores/use-blog-store";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { FaRegEye as ViewIcon } from "react-icons/fa";
import { HiOutlineClock as ClockIcon } from "react-icons/hi";
import readingTime from "reading-time";

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const { blog, fetchBlog, loading } = useBlogStore();

  useEffect(() => {
    if (slug && blog == null) {
      fetchBlog(slug);
    }
  }, []);

  if (blog == null || loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  const getReadingTime = () => readingTime(blog.content.text).text;

  return (
    <div className="py-10 px-8">
      <BackButton />
      <PageHeading
        title={blog.title}
        description={
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm">
              Published on {formatDate(blog.publishedAt)}
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1 text-sm">
                <ViewIcon className="size-4" />
                <span>1614</span>
                <span>views</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <ClockIcon className="size-4" />
                <span>{getReadingTime()}</span>
              </div>
            </div>
          </div>
        }
      />

      {/* Cover Image */}
      <div className="w-full mb-6">
        <Image
          src={blog.coverImage.url}
          alt="Project Cover Image"
          width={100}
          height={100}
          className="!w-full rounded-sm"
          priority
        />
      </div>

      {/* Content */}
      <RichTextRenderer content={blog.content.raw} />

      {/* Tags */}
      <div className="flex flex-col gap-2 mt-6">
        <div className="font-semibold text-lg">Tags:</div>
        <div className="flex flex-wrap gap-2">
          {blog.tags &&
            blog.tags.map((tag) => (
              <div
                key={tag}
                className="px-3 py-1 text-base rounded-3xl bg-accent capitalize"
              >
                # {tag}
              </div>
            ))}
        </div>
      </div>
      <Separator className="my-8" />

      {/* Comments Section */}
      {/* <div className="">
        <div className="mb-4">0 comments</div>
        <form action="#" className="bg-accent rounded px-4 py-3">
          <textarea
            className="w-full outline-0 resize-none"
            placeholder="What are your thoughts?"
          />
          <div className="flex gap-2 justify-end mt-2">
            <Button className="ml-auto">Comment</Button>
          </div>
        </form>
      </div> */}
    </div>
  );
}
