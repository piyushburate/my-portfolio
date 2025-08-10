import React from "react";
import CareerCard from "../../../components/career-card";
import { Skeleton } from "@/components/ui/skeleton";

type TabCareerProps = {
  loading: boolean;
  data: {
    jobTitle: string;
    companyName: string;
    companyDetail: string;
    location: string;
    startDate: string;
    endDate: string;
    jobType: string;
    workMode: string;
    responsibilities: string[];
    logo: {
      url: string;
    } | null;
  }[];
};

export default function TabCareer({ loading, data }: TabCareerProps) {
  return (
    <div className="flex flex-col gap-4">
      {loading && data == null
        ? Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-36" />
          ))
        : data
            .toReversed()
            .map((career, index) => (
              <CareerCard
                key={index}
                jobTitle={career.jobTitle}
                companyName={career.companyName}
                companyDetail={career.companyDetail}
                location={career.location}
                startDate={career.startDate}
                endDate={career.endDate}
                jobType={career.jobType}
                workMode={career.workMode}
                responsibilities={career.responsibilities}
                logo={career.logo?.url ?? null}
              />
            ))}
    </div>
  );
}
