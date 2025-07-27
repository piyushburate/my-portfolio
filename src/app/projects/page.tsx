"use client";

import React from "react";
import ProjectCard from "@/components/project-card";
import PageHeading from "@/components/page-heading";

export default function ProjectsPage() {
  return (
    <div className="py-10 px-8">
      <PageHeading
        title="Projects"
        description="Several projects that I have worked on, both private and open source."
      />
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProjectCard
              key={index}
              link={`/projects/${index + 1}`}
              title={`Project Title ${index + 1}`}
              description={`Personal website was built originally from scratch using several powerful stacks. ${
                index + 1
              }.`}
              coverImage={`https://picsum.photos/seed/${index}/400/200`}
              techStack={["React.js", "Next.js", "TailwindCSS"]}
              featured={index < 2}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
