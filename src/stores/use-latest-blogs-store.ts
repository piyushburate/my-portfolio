
import { graphQLClient } from "@/lib/graphql-client";
import { GET_LATEST_BLOGS } from "@/lib/queries";
import { Blog } from "@/types/blog";
import { create } from "zustand";

type LatestBlogsStore = {
  blogs: Blog[];
  loading: boolean;
  fetchBlogs: () => Promise<void>;
};

export const useLatestBlogsStore = create<LatestBlogsStore>((set) => ({
  blogs: [],
  loading: true,

  fetchBlogs: async () => {
    set({ loading: true });
    try {
      const data = await graphQLClient.request<{ blogs: Blog[] }>(GET_LATEST_BLOGS);
      console.log(data);
      
      set({
        blogs: data.blogs, loading: false
      });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));
