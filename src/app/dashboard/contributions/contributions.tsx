import { BsGithub as GithubIcon } from "react-icons/bs";

import { Overview } from "./overview";
import Calendar from "./calendar";
import { ContributionGraphSkeleton } from "@/components/skeletons/contribution-graph-skeleton";
import { useGithubStore } from "@/stores/use-github-store";
import { useEffect } from "react";

type ContributionsProps = {
  username: string;
};

const Contributions = ({ username }: ContributionsProps) => {
  const { data, fetchData, loading } = useGithubStore();

  useEffect(() => {
    if (data == null) {
      fetchData();
    }
  }, []);

  return (
    <section>
      <div className="flex items-center gap-2 text-xl font-medium lg:text-2xl">
        <GithubIcon className="size-5" />
        <span>Contributions</span>
      </div>
      <div className="flex justify-between gap-4">
        <p className="text-neutral-400 mb-2">
          My contributions from last year on github.
        </p>
        <a
          href={`http://github.com/${username}`}
          target="_blank"
          className="text-muted-foreground hover:text-foreground"
        >
          @{username}
        </a>
      </div>

      {loading && !data && <ContributionGraphSkeleton />}

      {data && (
        <div className="space-y-3">
          <Overview data={data.contributionsCollection.contributionCalendar} />
          <Calendar data={data.contributionsCollection.contributionCalendar} />
        </div>
      )}
    </section>
  );
};

export default Contributions;
