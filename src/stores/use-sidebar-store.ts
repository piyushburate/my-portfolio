
import { graphQLClient } from "@/lib/graphql-client";
import { GET_SIDEBAR_DATA } from "@/lib/queries";
import { create } from "zustand";

type SidebarDataType = {
  firstName: string;
  lastName: string;
  username: string;
  profilePhoto: {
    url: string;
  };
}

type SidebarStore = {
  data: SidebarDataType | null;
  loading: boolean;
  fetchData: () => Promise<void>;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  data: null,
  loading: true,

  fetchData: async () => {
    set({ loading: true });
    try {
      const data = await graphQLClient.request<{ globalContent: SidebarDataType }>(GET_SIDEBAR_DATA);
      set({ data: data.globalContent, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));
