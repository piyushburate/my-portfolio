
import { graphQLClient } from "@/lib/graphql-client";
import { GET_ABOUT_PAGE_DATA } from "@/lib/queries";
import { create } from "zustand";

export type AboutDataType = {
  introduction: {
    raw: string,
  },
  resume: {
    url: string,
    width: string,
    height: string,
  },
  careerDetails: {
    jobTitle: string,
    companyName: string,
    companyDetail: string,
    location: string,
    startDate: string,
    endDate?: string,
    jobType: string,
    workMode: string,
    responsibilities: string[],
    logo: {
      url: string,
    } | null,
  }[],
  educationDetails: {
    schoolName: string,
    degree: string,
    specialization: string,
    duration: string,
    location: string,
    logo: {
      url: string,
    } | null,
  }[],
}

type AboutStore = {
  data: AboutDataType | null;
  loading: boolean;
  fetchData: () => Promise<void>;
};

export const useAboutStore = create<AboutStore>((set) => ({
  data: null,
  loading: true,

  fetchData: async () => {
    set({ loading: true });
    try {
      const data = await graphQLClient.request<{ globalContent: AboutDataType }>(GET_ABOUT_PAGE_DATA);
      set({ data: data.globalContent, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));
