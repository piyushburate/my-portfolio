import React from "react";
import EducationCard from "../../../components/education-card";
import { Skeleton } from "@/components/ui/skeleton";

type TabEducationProps = {
  loading: boolean;
  data: {
    schoolName: string;
    degree: string;
    specialization: string;
    duration: string;
    location: string;
    logo: {
      url: string;
    } | null;
  }[];
};

export default function TabEducation({ loading, data }: TabEducationProps) {
  return (
    <div className="flex flex-col gap-4">
      {loading && data == null
        ? Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-28" />
          ))
        : data.toReversed().map((education, index) => (
            <EducationCard
              key={index}
              schoolName={education.schoolName}
              degree={education.degree}
              specialization={education.specialization}
              duration={education.duration}
              location={education.location}
              logo={education.logo?.url ?? null}
            />
          ))}
    </div>
  );
}
