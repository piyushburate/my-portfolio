import { cn, formatDate, getYearMonthDifference } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { BsChevronRight, BsFillBuildingsFill } from "react-icons/bs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

type CareerCardProps = {
  jobTitle: string;
  companyName: string;
  companyDetail: string;
  location: string;
  startDate: string;
  endDate?: string;
  jobType: string;
  workMode: string;
  responsibilities: string[];
  logo: string | null;
};

export default function CareerCard({
  jobTitle,
  companyName,
  companyDetail,
  location,
  startDate,
  endDate,
  jobType,
  workMode,
  responsibilities,
  logo,
}: CareerCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const formattedStartDate = formatDate(startDate, "short");

  const formattedEndDate = endDate ? formatDate(endDate, "short") : "Present";

  const careerDuration = getYearMonthDifference(
    new Date(startDate),
    new Date(endDate ?? "")
  );
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 justify-start px-6 py-4 bg-background dark:bg-secondary border rounded-md">
      <div className="rounded flex justify-center items-center min-w-14 p-2 size-14 overflow-clip bg-white text-muted border">
        {logo ? (
          <Image
            src={logo}
            className="object-center"
            width={56}
            height={56}
            alt="Career Logo"
          />
        ) : (
          <BsFillBuildingsFill className="size-14" />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-foreground text-lg capitalize">{jobTitle}</div>
        <ul className="text-muted-foreground sm:list-disc md:list-none lg:list-disc text-sm flex flex-col sm:flex-row md:flex-col lg:flex-row gap-1 sm:gap-6 md:gap-1 lg:gap-6">
          <li className="list-none">{companyName}</li>
          {companyDetail && (
            <li className="text-muted-foreground/70">[ {companyDetail} ]</li>
          )}
          <li>{location}</li>
        </ul>
        <ul className="text-muted-foreground sm:list-disc md:list-none lg:list-disc text-sm flex flex-col sm:flex-row md:flex-col lg:flex-row gap-1 sm:gap-6 md:gap-1 lg:gap-6">
          <li className="list-none">
            {formattedStartDate} - {formattedEndDate}
          </li>
          <li className="text-muted-foreground/70">{careerDuration}</li>
          <li className="capitalize">{jobType}</li>
          <li className="capitalize">{workMode}</li>
        </ul>
        {responsibilities.length > 0 && (
          <div className="mt-2">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger>
                <div className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer w-fit">
                  <BsChevronRight
                    className={cn(
                      "size-3 transition-transform",
                      isOpen && "rotate-90"
                    )}
                  />
                  <span>Show Responsibilities</span>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6">
                <ul className="list-disc text-muted-foreground text-base">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>
        )}
      </div>
    </div>
  );
}
