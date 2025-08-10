
import { graphQLClient } from "@/lib/graphql-client";
import { GET_BLOGS, GET_FEATURED_BLOGS } from "@/lib/queries";
import { Blog } from "@/types/blog";
import { create } from "zustand";

type BlogsStore = {
  blogs: Blog[];
  totalBlogs: number;
  page: number;
  perPage: number;
  featuredBlogs: Blog[],
  loading: boolean;
  fetchBlogs: (page: number) => Promise<void>;
};

type BlogsRequest = {
  blogs: Blog[];
  blogsConnection: {
    aggregate: {
      count: number;
    }
  }
};

export const useBlogsStore = create<BlogsStore>((set, get) => ({
  blogs: [],
  totalBlogs: 0,
  page: 1,
  perPage: 10,
  featuredBlogs: [],
  loading: true,

  fetchBlogs: async (page = 1) => {
    set({ loading: true });
    const { perPage } = get();
    try {
      const data = await graphQLClient.request<BlogsRequest>(GET_BLOGS, {
        first: perPage,
        skip: (page - 1) * perPage,
      });
      const data2 = await graphQLClient.request<{ featuredSetting: { featuredBlogs: Blog[] } }>(GET_FEATURED_BLOGS);
      set({
        blogs: data.blogs,
        totalBlogs: data.blogsConnection.aggregate.count,
        page,
        featuredBlogs: data2.featuredSetting.featuredBlogs,
        loading: false
      });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));
