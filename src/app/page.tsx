"use client";

import BlogCard from "@/components/blog-card";
import PageContainer from "@/components/page-container";
import SectionHeading from "@/components/section-heading";
import { BlogCardSkeleton } from "@/components/skeletons/blog-card-skeleton";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { STACKS } from "@/constants/stacks";
import { useHomeStore } from "@/stores/use-home-store";
import { useLatestBlogsStore } from "@/stores/use-latest-blogs-store";
import Link from "next/link";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function HomePage() {
  const { data, fetchData, loading: homeLoading } = useHomeStore();
  const { blogs, fetchBlogs, loading } = useLatestBlogsStore();

  useEffect(() => {
    if (data == null) {
      fetchData();
    }
    if (blogs.length == 0) {
      fetchBlogs();
    }
  }, []);

  return (
    <PageContainer>
      {/* Introduction */}
      {homeLoading && data == null && (
        <div className="space-y-6">
          <Skeleton className="w-64 h-8" />
          <div className="flex gap-4 mb-8">
            <Skeleton className="w-52 h-4" />
            <Skeleton className="w-36 h-4" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>
        </div>
      )}
      {data && (
        <section className="bg-cover bg-no-repeat ">
          <div className="space-y-3">
            <div className="flex gap-2 text-2xl font-medium lg:text-3xl">
              <h1>Hi, I&apos;m {data.firstName}</h1>{" "}
              <div className="ml-1">👋</div>
            </div>
            <div className="space-y-4">
              <ul className="ml-5 flex list-disc flex-col gap-1 text-muted-foreground lg:flex-row lg:gap-10">
                <li>Based in {data.location}</li>
                <li>Working {data.workingMode}</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 leading-[1.8] text-accent-background md:leading-loose">
            {data.description}
          </p>
        </section>
      )}
      <Separator className="my-8" />
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-center gap-2">
          <SectionHeading title="Latest Articles" />
          <Link
            href={"/blog"}
            className="flex gap-2 items-center text-sm text-muted-foreground"
          >
            <span>View All Articles</span>
            <BsArrowRight className="size-4" />
          </Link>
        </div>
        <div className="flex-1 flex gap-4 overflow-x-auto no-scrollbar">
          {loading &&
            blogs.length == 0 &&
            Array.from({ length: 5 }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          {blogs.length > 0 &&
            blogs.map((blog, index) => (
              <BlogCard
                key={index}
                link={`/blog/${blog.slug}`}
                title={blog.title}
                description={blog.description}
                coverImage={blog.coverImage.url}
                publishedAt={blog.publishedAt}
                views={700 + index * 50}
                className="min-w-[300px]"
              />
            ))}
        </div>
      </section>
      <Separator className="my-8" />
      <section className="flex flex-col gap-6">
        <SectionHeading title="Tools that i have used" />
        <div className="flex justify-stretch flex-wrap gap-3">
          {Object.keys(STACKS).map((key) => (
            <div
              key={key}
              className="flex items-center gap-2 rounded-4xl shadow-lg dark:bg-accent border px-4 py-3"
            >
              {STACKS[key]?.icon}
              <span className="text-sm">{STACKS[key]?.label}</span>
            </div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
