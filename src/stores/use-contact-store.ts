
import { graphQLClient } from "@/lib/graphql-client";
import { GET_CONTACT_PAGE_DATA } from "@/lib/queries";
import { create } from "zustand";

export type ContactDataType = {
  email: string;
  linkedIn: string;
  twitter: string;
  instagram: string;
  github: string;
}

type ContactStore = {
  data: ContactDataType | null;
  loading: boolean;
  fetchData: () => Promise<void>;
};

export const useContactStore = create<ContactStore>((set) => ({
  data: null,
  loading: true,

  fetchData: async () => {
    set({ loading: true });
    try {
      const data = await graphQLClient.request<{ globalContent: ContactDataType }>(GET_CONTACT_PAGE_DATA);
      set({ data: data.globalContent, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));
