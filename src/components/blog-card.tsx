import { FaRegEye as ViewIcon } from "react-icons/fa";
import { TbCalendarBolt as DateIcon } from "react-icons/tb";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

type BlogCardProps = {
  link: string;
  title: string;
  description?: string;
  coverImage?: string;
  date: Date;
  views: number;
  featured?: boolean;
  className?: string;
};

export default function BlogCard({
  link,
  title,
  description,
  coverImage,
  date,
  views,
  featured = false,
  className,
}: BlogCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

  return (
    <Link href={link} className={cn("block group", className)}>
      <Card className="break-all relative overflow-clip">
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full h-full bg-gradient-to-t from-black/80 to-transparent" />
        <CardContent
          className={cn(
            "flex h-36 items-center justify-center p-6",
            featured && "h-52"
          )}
        >
          {coverImage && (
            <>
              <div
                className={cn(
                  "absolute inset-0",
                  !featured &&
                    "transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:blur-xs"
                )}
              >
                <Image
                  src={coverImage ?? "#"}
                  className="w-full h-full object-cover"
                  fill
                  alt="Blog Cover Image"
                />
              </div>
              <div className="absolute inset-0 w-full h-full"></div>
            </>
          )}
        </CardContent>
        <CardFooter
          className={cn(
            "flex-col items-start gap-2 px-3 md:px-4 z-10",
            featured && "md:px-8"
          )}
        >
          <CardTitle className="text-xl text-white text-ellipsis line-clamp-2 md:line-clamp-1 group-hover:underline underline-offset-[6px]">
            {title}
          </CardTitle>
          <CardDescription className="!hidden sm:!block text-md text-white text-ellipsis line-clamp-2 md:line-clamp-1">
            {description}
          </CardDescription>
          <CardDescription className="space-x-3">
            <Badge
              variant="secondary"
              className="bg-transparent px-0 text-neutral-300"
            >
              <DateIcon />
              <span className="whitespace-pre-wrap">{formattedDate}</span>
            </Badge>
            <Badge
              variant="secondary"
              className="bg-transparent px-0 text-neutral-300 whitespace-pre-wrap"
            >
              <ViewIcon />
              <span className="whitespace-pre-wrap">{views} views</span>
            </Badge>
          </CardDescription>
        </CardFooter>
      </Card>
    </Link>
  );
}
