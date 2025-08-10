"use client";

import React, { useEffect } from "react";
import ProjectCard from "@/components/project-card";
import PageHeading from "@/components/page-heading";
import { useProjectsStore } from "@/stores/use-projects-store";
import { ProjectCardSkeleton } from "@/components/skeletons/project-card-skeleton";
import { useSearchParams } from "next/navigation";
import { PaginationControl } from "@/components/pagination-control";
import PageContainer from "@/components/page-container";

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const {
    projects,
    totalProjects,
    perPage,
    featuredProjects,
    fetchProjects,
    loading,
  } = useProjectsStore();

  useEffect(() => {
    if (projects.length == 0) {
      fetchProjects(pageFromUrl);
    }
  }, []);

  return (
    <PageContainer>
      <PageHeading
        title="Projects"
        description="Several projects that I have worked on, both private and open source."
      />
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {loading &&
            projects.length == 0 &&
            Array.from({ length: 6 }).map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              link={`/projects/${project.slug}`}
              title={project.title}
              description={project.description}
              coverImage={project.coverImage.url}
              techStack={project.techStack}
              featured={true}
            />
          ))}
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              link={`/projects/${project.slug}`}
              title={project.title}
              description={project.description}
              coverImage={project.coverImage.url}
              techStack={project.techStack}
              featured={false}
            />
          ))}
        </div>
      </section>
      <section className="mt-10 flex justify-center">
        <PaginationControl
          total={totalProjects}
          page={pageFromUrl}
          perPage={perPage}
          onChange={(p) => fetchProjects(p)}
        />
      </section>
    </PageContainer>
  );
}
