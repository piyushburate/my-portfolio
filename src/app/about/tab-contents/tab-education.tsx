import React from "react";
import EducationCard from "../../../components/education-card";

export default function TabEducation() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <EducationCard
          key={index}
          organisation_title={`Organisation ${index + 1}`}
          education_level={`Level ${index + 1}`}
          education_title={`Title ${index + 1}`}
          start_year={`202${index}-01`}
          end_year={index % 2 === 0 ? null : `202${index + 1}-01`}
          location={`City ${index + 1}`}
          logo={`https://picsum.photos/seed/${index}/56/56`}
        />
      ))}
    </div>
  );
}
