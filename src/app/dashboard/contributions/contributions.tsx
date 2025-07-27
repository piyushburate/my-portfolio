import { BsGithub as GithubIcon } from "react-icons/bs";
import useSWR from "swr";

import { fetcher } from "@/services/fetcher";
import { Overview } from "./overview";
import Calendar from "./calendar";

type ContributionsProps = {
  username: string;
};

const Contributions = ({ username }: ContributionsProps) => {
  const { data } = useSWR("/api/github", fetcher);

  const contributionCalendar =
    data?.contributionsCollection?.contributionCalendar;

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

      {!data && <div className="text-muted-foreground">No Data</div>}

      {data && (
        <div className="space-y-3">
          <Overview data={contributionCalendar} />
          <Calendar data={contributionCalendar} />
        </div>
      )}
    </section>
  );
};

export default Contributions;
