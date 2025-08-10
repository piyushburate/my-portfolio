
import { getGithubUser } from "@/services/github";
import { GithubUserType } from "@/types/github-user";
import { create } from "zustand";

type GithubStore = {
  data: GithubUserType | null;
  loading: boolean;
  fetchData: () => Promise<void>;
};

export const useGithubStore = create<GithubStore>((set) => ({
  data: null,
  loading: true,

  fetchData: async () => {
    set({ loading: true });
    try {
      const data = await getGithubUser();
      set({ data: data, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));
