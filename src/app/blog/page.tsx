"use client";

import React from "react";
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

export default function BlogsPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="py-10 px-8">
      <section className="flex justify-center">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <BlogCard
                  link={`/blog/${index + 1}`}
                  title={`Blog Post ${index + 1}`}
                  description={`This is a brief description of blog post ${
                    index + 1
                  }.`}
                  coverImage={`https://picsum.photos/seed/${index}/800/400`}
                  date={new Date(`2023-10-${index + 1}`)}
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
          {Array.from({ length: 6 }).map((_, index) => (
            <BlogCard
              key={index}
              link={`/blog/${index + 1}`}
              title={`Blog Post ${index + 1}`}
              description={`This is a brief description of blog post ${
                index + 1
              }.`}
              coverImage={`https://picsum.photos/seed/${index}/400/200`}
              date={new Date(`2023-10-${index + 1}`)}
              views={700 + index * 50}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
