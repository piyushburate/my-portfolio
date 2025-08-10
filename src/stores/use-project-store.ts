
import { graphQLClient } from "@/lib/graphql-client";
import { GET_SINGLE_PROJECT } from "@/lib/queries";
import { Project } from "@/types/project";
import { create } from "zustand";

type ProjectStore = {
  project: Project | null;
  loading: boolean;
  fetchProject: (slug: string) => Promise<void>;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  project: null,
  loading: false,

  fetchProject: async (slug: string) => {
    set({ loading: true });
    try {
      const data = await graphQLClient.request<{ project: Project }>(GET_SINGLE_PROJECT, { slug });
      set({ project: data.project, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));
