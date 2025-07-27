import { getYearMonthDifference } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

type CareerCardProps = {
  title: string;
  company_short_name: string;
  company_full_name: string;
  company_location: string;
  start_date: Date;
  end_date: Date | null;
  career_timing: string;
  career_type: string;
  logo?: string;
};

export default function CareerCard({
  title,
  company_short_name,
  company_full_name,
  company_location,
  start_date,
  end_date,
  career_timing,
  career_type,
  logo,
}: CareerCardProps) {
  const formattedStartDate = start_date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  const formattedEndDate = end_date
    ? end_date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "Present";

  const careerDuration = getYearMonthDifference(
    start_date,
    end_date ?? new Date()
  );
  return (
    <div className="flex items-start gap-4 justify-start px-6 py-4 bg-background dark:bg-secondary border rounded-md">
      <div className="rounded size-14 overflow-clip bg-muted-foreground">
        <Image
          src={logo ?? "#"}
          className="object-center"
          width={56}
          height={56}
          alt="Career Logo"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-foreground text-lg capitalize">{title}</div>
        <ul className="text-muted-foreground sm:list-disc md:list-none lg:list-disc text-sm flex flex-col sm:flex-row md:flex-col lg:flex-row gap-1 sm:gap-6 md:gap-1 lg:gap-6">
          <li className="list-none">{company_short_name}</li>
          <li className="text-muted-foreground/70">[ {company_full_name} ]</li>
          <li>{company_location}</li>
        </ul>
        <ul className="text-muted-foreground sm:list-disc md:list-none lg:list-disc text-sm flex flex-col sm:flex-row md:flex-col lg:flex-row gap-1 sm:gap-6 md:gap-1 lg:gap-6">
          <li className="list-none">
            {formattedStartDate} - {formattedEndDate}
          </li>
          <li className="text-muted-foreground/70">{careerDuration}</li>
          <li>{career_timing}</li>
          <li>{career_type}</li>
        </ul>
        <div className="mt-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer w-fit">
            <BsChevronRight className="size-3" />
            <span>Show Responsibilities</span>
          </div>
        </div>
      </div>
    </div>
  );
}
