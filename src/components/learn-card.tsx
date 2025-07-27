import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "./ui/card";
import { AiFillFire as NewIcon } from "react-icons/ai";
import { BiLabel as LevelIcon } from "react-icons/bi";
import { MdLibraryBooks as LessonIcon } from "react-icons/md";
import Image from "next/image";

type LearnCardProps = {
  link: string;
  title: string;
  description: string;
  coverImage?: string;
  lessons_count?: number;
  level: string;
  is_new?: boolean;
};

export default function LearnCard({
  link,
  title,
  description,
  coverImage,
  lessons_count,
  level,
  is_new = false,
}: LearnCardProps) {
  return (
    <Link href={link} className="block group">
      <Card className="break-all relative overflow-clip pt-0 gap-2">
        <CardHeader className="p-0 relative">
          <div className="w-full h-48 border-b">
            <Image
              src={coverImage ?? "#"}
              className="object-cover"
              fill
              alt="Learn Cover Image"
            />
          </div>
          {is_new && (
            <div className="flex items-center gap-2 absolute top-0 right-0 rounded-bl-lg text-sm px-3 py-1 bg-lime-500 text-background">
              <NewIcon />
              New
            </div>
          )}
        </CardHeader>
        <CardContent className="px-4 flex flex-col gap-2">
          <CardTitle className="text-lg text-ellipsis line-clamp-2 md:line-clamp-1">
            {title}
          </CardTitle>
          <CardDescription className="text-ellipsis text-base line-clamp-3 md:line-clamp-2">
            {description}
          </CardDescription>
          <CardDescription>
            <div className="flex flex-wrap gap-6 mt-2">
              {lessons_count && (
                <span className="flex items-center gap-2 text-sm text-neutral-400">
                  <LessonIcon />
                  {lessons_count} lessons
                </span>
              )}
              {level && (
                <span className="flex items-center gap-2 text-sm text-neutral-400">
                  <LevelIcon />
                  {level}
                </span>
              )}
            </div>
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
