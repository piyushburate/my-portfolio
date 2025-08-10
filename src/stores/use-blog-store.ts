
import { graphQLClient } from "@/lib/graphql-client";
import { GET_SINGLE_BLOG } from "@/lib/queries";
import { Blog } from "@/types/blog";
import { create } from "zustand";

type BlogStore = {
  blog: Blog | null;
  loading: boolean;
  fetchBlog: (slug: string) => Promise<void>;
};

export const useBlogStore = create<BlogStore>((set) => ({
  blog: null,
  loading: true,

  fetchBlog: async (slug: string) => {
    set({ loading: true });
    try {
      const data = await graphQLClient.request<{ blog: Blog }>(GET_SINGLE_BLOG, { slug });
      set({ blog: data.blog, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));
