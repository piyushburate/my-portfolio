"use client";

import React from "react";
import LearnCard from "@/components/learn-card";
import PageHeading from "@/components/page-heading";

export default function LearnPage() {
  return (
    <div className="py-10 px-8">
      <PageHeading
        title="Learn"
        description="It's not a course, it's my personal learning notes. But if you are
          interested, let's learn together."
      />
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <LearnCard
              key={index}
              link={`/learn/${index + 1}`}
              title={`Learn Title ${index + 1}`}
              description={`Master the fundamentals of programming in JavaScript. ${
                index + 1
              }.`}
              coverImage={`https://picsum.photos/seed/${index}/400/200`}
              lessons_count={5 + index * 2}
              level={index < 1 ? "Beginner" : "Intermediate"}
              is_new={index < 1}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
