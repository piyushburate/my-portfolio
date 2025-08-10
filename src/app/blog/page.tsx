"use client";

import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import BlogCard from "@/components/blog-card";
import SearchBar from "@/components/search-bar";
import { BsStarFill } from "react-icons/bs";
import { useBlogsStore } from "@/stores/use-blogs-store";
import { BlogCardSkeleton } from "@/components/skeletons/blog-card-skeleton";
import { useSearchParams } from "next/navigation";
import { PaginationControl } from "@/components/pagination-control";
import PageContainer from "@/components/page-container";

export default function BlogsPage() {
  const searchParams = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);

  const { blogs, totalBlogs, perPage, featuredBlogs, fetchBlogs, loading } =
    useBlogsStore();

  useEffect(() => {
    if (blogs.length == 0) {
      fetchBlogs(pageFromUrl);
    }
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <PageContainer>
      <section className="flex justify-center">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {loading && featuredBlogs.length == 0 && (
              <CarouselItem>
                <BlogCardSkeleton featured={true} />
              </CarouselItem>
            )}
            {featuredBlogs.length > 0 &&
              featuredBlogs.map((blog, index) => (
                <CarouselItem key={index}>
                  <BlogCard
                    link={`/blog/${blog.slug}`}
                    title={blog.title}
                    description={blog.description}
                    coverImage={blog.coverImage.url}
                    publishedAt={blog.publishedAt}
                    views={700 + index * 50}
                    featured={true}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
          {/* Card Controls */}
          <CarouselPrevious className="top-10 left-auto right-20" />
          <CarouselNext className="top-10 right-10" />
          {/* Featured Tag */}
          <Badge className="absolute rounded-full top-7 left-7">
            <BsStarFill />
            <span>Featured</span>
          </Badge>
        </Carousel>
      </section>
      <section className="mt-10">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Latest Articles</h2>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              setSearchTerm(event.target.value);
            }}
            onClearSearch={function (): void {
              setSearchTerm("");
            }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {loading &&
            blogs.length == 0 &&
            Array.from({ length: 6 }).map((_, index) => (
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
              />
            ))}
        </div>
      </section>
      <section className="mt-10 flex justify-center">
        <PaginationControl
          total={totalBlogs}
          page={pageFromUrl}
          perPage={perPage}
          onChange={(p) => fetchBlogs(p)}
        />
      </section>
    </PageContainer>
  );
}
