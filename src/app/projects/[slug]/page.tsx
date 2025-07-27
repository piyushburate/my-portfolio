"use client";

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
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { BsArrowLeftCircle, BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = {
    slug: slug,
    title: slug.toString().split("-"),
    techStack: ["React.js", "Next.js", "TailwindCSS"],
  };
  return (
    <div className="py-10 px-8">
      <Button
        variant="ghost"
        className="hover:!bg-transparent group text-base !px-0 mb-4 cursor-pointer"
      >
        <BsArrowLeftCircle className="size-4.5" />
        <span className="group-hover:translate-x-2 transition">Back</span>
      </Button>
      <PageHeading
        title="My Portfolio"
        description="Personal website was built originally from scratch using several powerful stacks."
      />
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        {/* Tech Stack */}
        <div className="flex items-center gap-2">
          <div>Tech Stack :</div>
          <div className="flex items-center gap-3">
            {project.techStack &&
              project.techStack.map((key) => (
                <Tooltip key={key}>
                  <TooltipTrigger>{STACKS[key]}</TooltipTrigger>
                  <TooltipContent>{key}</TooltipContent>
                </Tooltip>
              ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2 text-sm ">
            <BsGithub className="size-5" />
            <span>Source Code</span>
          </Link>
          <Separator orientation="vertical" />
          <Link href="#" className="flex items-center gap-2 text-sm">
            <FiExternalLink className="size-5" />
            <span>Live Demo</span>
          </Link>
        </div>
      </div>

      {/* Cover Image */}
      <div className="w-full mb-6">
        <Image
          src={`https://picsum.photos/seed/${slug}/800/400`}
          alt="Project Cover Image"
          width={100}
          height={100}
          className="!w-full rounded-sm"
          priority
        />
      </div>

      {/* Content */}
      <div className="">This is the content.</div>
    </div>
  );
}
