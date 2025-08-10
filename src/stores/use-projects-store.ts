
import { graphQLClient } from "@/lib/graphql-client";
import { GET_FEATURED_PROJECTS, GET_PROJECTS } from "@/lib/queries";
import { Project } from "@/types/project";
import { create } from "zustand";

type ProjectsStore = {
  projects: Project[];
  featuredProjects: Project[],
  totalProjects: number;
  page: number;
  perPage: number;
  loading: boolean;
  fetchProjects: (page: number) => Promise<void>;
};


type ProjectsRequest = {
  projects: Project[];
  projectsConnection: {
    aggregate: {
      count: number;
    }
  }
};

export const useProjectsStore = create<ProjectsStore>((set, get) => ({
  projects: [],
  featuredProjects: [],
  totalProjects: 0,
  page: 1,
  perPage: 1,
  loading: true,

  fetchProjects: async (page = 1) => {
    set({ loading: true });
    const { perPage } = get();
    try {
      const data = await graphQLClient.request<{ featuredSetting: { featuredProjects: Project[] } }>(GET_FEATURED_PROJECTS);
      const featuredIds = data.featuredSetting.featuredProjects.map(project => project.slug);
      const data2 = await graphQLClient.request<ProjectsRequest>(GET_PROJECTS, {
        featuredIds,
        first: perPage,
        skip: (page - 1) * perPage,
      });
      set({
        projects: data2.projects,
        featuredProjects: data.featuredSetting.featuredProjects,
        totalProjects: data2.projectsConnection.aggregate.count,
        page,
        loading: false
      });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));
