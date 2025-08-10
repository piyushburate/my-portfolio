import Image from "next/image";
import React from "react";
import { FaSchool } from "react-icons/fa";

type EducationCardProps = {
  schoolName: string;
  degree: string;
  specialization: string;
  duration: string;
  location: string;
  logo: string | null;
};

export default function EducationCard({
  schoolName,
  degree,
  specialization,
  duration,
  location,
  logo,
}: EducationCardProps) {
  return (
    <div className="flex items-start gap-4 justify-start px-6 py-4 bg-background dark:bg-secondary border rounded-md">
      <div className="flex justify-center items-center rounded size-14 p-2 overflow-clip bg-white text-muted border">
        {logo ? (
          <Image
            src={logo}
            className="object-center"
            width={56}
            height={56}
            alt="Oraganization Logo"
          />
        ) : (
          <FaSchool className="size-14" />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-foreground text-lg capitalize">{schoolName}</div>
        <ul className="text-muted-foreground sm:list-disc md:list-none lg:list-disc text-sm flex flex-col sm:flex-row md:flex-col lg:flex-row gap-1 sm:gap-6 md:gap-1 lg:gap-6">
          <li className="list-none">{degree}</li>
          {specialization && <li>{specialization}</li>}
        </ul>
        <ul className="text-muted-foreground sm:list-disc md:list-none lg:list-disc text-sm flex flex-col sm:flex-row md:flex-col lg:flex-row gap-1 sm:gap-6 md:gap-1 lg:gap-6">
          <li className="list-none text-muted-foreground/70">{duration}</li>
          <li>{location}</li>
        </ul>
      </div>
    </div>
  );
}
