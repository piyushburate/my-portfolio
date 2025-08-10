"use client";

import BackButton from "@/components/back-button";
import PageHeading from "@/components/page-heading";
import RichTextRenderer from "@/components/rich-text-renderer";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { STACKS } from "@/constants/stacks";
import { useProjectStore } from "@/stores/use-project-store";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const { project, fetchProject, loading } = useProjectStore();

  useEffect(() => {
    if (slug && project == null) {
      fetchProject(slug);
    }
  }, []);

  if (project == null || loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }
  return (
    <div className="py-10 px-8">
      <BackButton />
      <PageHeading title={project.title} description={project.description} />
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        {/* Tech Stack */}
        <div className="flex items-center gap-2">
          <div>Tech Stack :</div>
          <div className="flex items-center gap-3">
            {project.techStack &&
              project.techStack.map((key) => (
                <Tooltip key={key}>
                  <TooltipTrigger>{STACKS[key]?.icon}</TooltipTrigger>
                  <TooltipContent>{STACKS[key]?.label}</TooltipContent>
                </Tooltip>
              ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex items-center gap-4">
          {project.sourceCodeUrl && (
            <Link
              href={project.sourceCodeUrl}
              target="_blank"
              className="flex items-center gap-2 text-sm "
            >
              <BsGithub className="size-5" />
              <span>Source Code</span>
            </Link>
          )}
          {project.sourceCodeUrl && project.liveDemoUrl && (
            <Separator orientation="vertical" />
          )}
          {project.liveDemoUrl && (
            <Link
              href={project.liveDemoUrl}
              target="_blank"
              className="flex items-center gap-2 text-sm"
            >
              <FiExternalLink className="size-5" />
              <span>Live Demo</span>
            </Link>
          )}
        </div>
      </div>

      {/* Cover Image */}
      <div className="w-full mb-6">
        <Image
          src={project.coverImage.url}
          alt="Project Cover Image"
          width={100}
          height={100}
          className="!w-full rounded-sm"
          priority
        />
      </div>

      {/* Content */}
      <RichTextRenderer content={project.content.raw} />
    </div>
  );
}
