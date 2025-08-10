
import { graphQLClient } from "@/lib/graphql-client";
import { GET_HOME_PAGE_DATA } from "@/lib/queries";
import { create } from "zustand";

type HomeDataType = {
  firstName: string;
  location: string;
  workingMode: string;
  description: string;
}

type HomeStore = {
  data: HomeDataType | null;
  loading: boolean;
  fetchData: () => Promise<void>;
};

export const useHomeStore = create<HomeStore>((set) => ({
  data: null,
  loading: true,

  fetchData: async () => {
    set({ loading: true });
    try {
      const data = await graphQLClient.request<{ globalContent: HomeDataType }>(GET_HOME_PAGE_DATA);
      set({ data: data.globalContent, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));
