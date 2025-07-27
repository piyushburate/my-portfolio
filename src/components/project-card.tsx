import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "./ui/card";
import { STACKS } from "@/constants/stacks";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { BsPinAngleFill } from "react-icons/bs";
import Image from "next/image";

type ProjectCardProps = {
  link: string;
  title: string;
  description: string;
  coverImage?: string;
  techStack: string[];
  featured?: boolean;
};

export default function ProjectCard({
  link,
  title,
  description,
  coverImage,
  techStack,
  featured = false,
}: ProjectCardProps) {
  return (
    <Link href={link} className="block group">
      <Card className="break-all relative overflow-clip pt-0 gap-2">
        <CardHeader className="p-0 relative">
          <div className="w-full h-48 border-b">
            <Image
              src={coverImage ?? "#"}
              className="object-cover"
              fill
              alt="Project Cover Image"
            />
          </div>
          {featured && (
            <div className="flex items-center gap-2 absolute top-0 right-0 rounded-bl-lg text-sm px-3 py-1 bg-lime-500 text-background">
              <BsPinAngleFill />
              Featured
            </div>
          )}
        </CardHeader>
        <CardContent className="px-4 flex flex-col gap-2">
          <CardTitle className="text-lg text-ellipsis line-clamp-2 md:line-clamp-1">
            {title}
          </CardTitle>
          <CardDescription className="text-ellipsis line-clamp-3 md:line-clamp-2">
            {description}
          </CardDescription>
          <CardDescription>
            <div className="flex flex-wrap gap-3 mt-2">
              {techStack &&
                techStack.map((key) => (
                  <Tooltip key={key}>
                    <TooltipTrigger>{STACKS[key]}</TooltipTrigger>
                    <TooltipContent>{key}</TooltipContent>
                  </Tooltip>
                ))}
            </div>
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
