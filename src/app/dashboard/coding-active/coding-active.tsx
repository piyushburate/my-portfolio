import { fetcher } from "@/services/fetcher";
import React from "react";
import useSWR from "swr";
import { SiWakatime as WakatimeIcon } from 'react-icons/si';
import { Overview } from "./overview";
import CodingActiveList from "./coding-active-list";

export default function CodingActive() {
  const { data } = useSWR("/api/read-stats", fetcher);

  return (
    <section>
      <div className="flex items-center gap-2 text-xl font-medium lg:text-2xl">
        <WakatimeIcon className="size-5" />
        <span>Weekly Statistics</span>
      </div>
      <p className="text-neutral-400 mb-2">
        My{" "}
        <a
          href={`https://wakatime.com/@${process.env.NEXT_PUBLIC_WAKATIME_USERNAME}`}
          className="hover:underline"
          target="_blank"
        >
          WakaTime
        </a>{" "}
        last 7 days stats.
      </p>
      <Overview data={data} />
      {data?.languages && data?.categories && <CodingActiveList data={data} />}
    </section>
  );
}
