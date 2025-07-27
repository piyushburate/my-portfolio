"use client";

import BlogCard from "@/components/blog-card";
import SectionHeading from "@/components/section-heading";
import { Separator } from "@/components/ui/separator";
import { STACKS } from "@/constants/stacks";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function HomePage() {
  return (
    <div className="py-10 px-8">
      {/* Introduction */}
      <section className="bg-cover bg-no-repeat ">
        <div className="space-y-3">
          <div className="flex gap-2 text-2xl font-medium lg:text-3xl">
            <h1>Hi, I&apos;m Piyush</h1> <div className="ml-1">👋</div>
          </div>
          <div className="space-y-4">
            <ul className="ml-5 flex list-disc flex-col gap-1 text-muted-foreground lg:flex-row lg:gap-10">
              <li>
                Based in Maharashtra, India{" "}
                <span className="ml-1 text-xs">IN</span>
              </li>
              <li>Working remotely</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 leading-[1.8] text-accent-background md:leading-loose">
          Seasoned Software Engineer especially in Frontend side, with a passion
          for creating pixel-perfect web experiences. I work with JavaScript and
          specialize in all-things web. I thrive on collaborating with teams to
          deliver efficient, scalable, and visually appealing web applications.
        </p>
      </section>
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
          {Array.from({ length: 5 }).map((_, index) => (
            <BlogCard
              key={index}
              link={`/blog/${index + 1}`}
              title={`Blog Post ${index + 1}`}
              description={`This is a brief description of blog post ${
                index + 1
              }.`}
              coverImage={`https://picsum.photos/seed/${index}/800/400`}
              date={new Date(`2023-10-${index + 1}`)}
              views={700 + index * 50}
              featured={false}
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
              {STACKS[key]}
              <span className="text-sm">{key}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
