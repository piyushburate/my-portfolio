"use client";

import PageHeading from "@/components/page-heading";
import React from "react";
import ChapterCard from "../components/chapter-card";
import BackButton from "@/components/back-button";

type LearnSectionProps = {
  slug: string;
};

export default function LearnSection({ slug }: LearnSectionProps) {
  const learn = {
    slug: slug,
    title: slug.toString().split("-"),
    chapters: ["Introduction", "Basics", "Numbers", "Comments", "Functions"],
  };
  return (
    <div className="py-10 px-8">
      <BackButton />
      <PageHeading
        title="Javascript Fundamentals"
        description="Master the fundamentals of programming in JavaScript."
      />

      {/* Content */}
      <div className="flex flex-col gap-3">
        {learn.chapters &&
          learn.chapters.map((chapter) => (
            <ChapterCard
              key={chapter}
              chapterTitle={chapter}
              contents={[
                {
                  title: "Introduction to JavaScript",
                  slug: "introduction-to-javascript",
                  language: "JavaScript",
                  difficulty: "easy",
                },
                {
                  title: "basics to JavaScript",
                  slug: "basics-to-javascript",
                  language: "JavaScript",
                  difficulty: "easy",
                },
              ]}
            />
          ))}
      </div>
    </div>
  );
}
