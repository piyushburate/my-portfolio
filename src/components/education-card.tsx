import Image from "next/image";
import React from "react";

type EducationCardProps = {
  organisation_title: string;
  education_level: string;
  education_title: string;
  start_year: string;
  end_year: string | null;
  location: string;
  logo?: string;
};

export default function EducationCard({
  organisation_title,
  education_level,
  education_title,
  start_year,
  end_year,
  location,
  logo,
}: EducationCardProps) {
  return (
    <div
      key={organisation_title}
      className="flex items-start gap-4 justify-start px-6 py-4 bg-background dark:bg-secondary border rounded-md"
    >
      <div className="rounded size-14 overflow-clip bg-muted-foreground">
        <Image
          src={logo ?? "#"}
          className="object-center"
          width={56}
          height={56}
          alt="Organisation Logo"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-foreground text-lg capitalize">
          {organisation_title}
        </div>
        <ul className="text-muted-foreground sm:list-disc md:list-none lg:list-disc text-sm flex flex-col sm:flex-row md:flex-col lg:flex-row gap-1 sm:gap-6 md:gap-1 lg:gap-6">
          <li className="list-none">{education_level}</li>
          <li>{education_title}</li>
        </ul>
        <ul className="text-muted-foreground sm:list-disc md:list-none lg:list-disc text-sm flex flex-col sm:flex-row md:flex-col lg:flex-row gap-1 sm:gap-6 md:gap-1 lg:gap-6">
          <li className="list-none text-muted-foreground/70">
            {start_year} - {end_year ?? "Present"}
          </li>
          <li>{location}</li>
        </ul>
      </div>
    </div>
  );
}
