"use client";

import BackButton from "@/components/back-button";
import PageHeading from "@/components/page-heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { STACKS } from "@/constants/stacks";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

type ContentSectionProps = {
  slug: string[];
};

export default function ContentSection({ slug }: ContentSectionProps) {
  const learnContent = {
    slug: slug[0],
    title: "Introduction to Javascript",
    language: "JavaScript",
    difficulty: "easy",
  };
  return (
    <div className="py-10 px-8">
      <BackButton />
      <PageHeading
        title={learnContent.title}
        description={
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm">
              # JavaScript Fundamental
            </div>
            <div className="hidden items-center gap-5 md:flex">
              {learnContent.difficulty && (
                <Tooltip>
                  <TooltipTrigger>
                    <div className="rounded-full bg-neutral-200 px-2 py-1 text-xs font-medium capitalize text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400">
                      {learnContent.difficulty}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="capitalize">{`Difficulty: ${learnContent.difficulty.toUpperCase()}`}</TooltipContent>
                </Tooltip>
              )}
              {learnContent.language && (
                <Tooltip>
                  <TooltipTrigger>
                    {STACKS[learnContent.language]}
                  </TooltipTrigger>
                  <TooltipContent>{learnContent.language}</TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>
        }
      />

      {/* Cover Image */}
      <div className="w-full mb-6">
        <Image
          src={`https://picsum.photos/seed/${slug[0]}/800/400`}
          alt="Project Cover Image"
          width={100}
          height={100}
          className="!w-full rounded-sm"
          priority
        />
      </div>

      {/* Content */}
      <div className="">This is the content.</div>

      <Separator className="my-8" />

      <div className="flex justify-end gap-2">
        <Button variant="secondary">
          <span>Next: Hello World!</span>
          <BsArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
