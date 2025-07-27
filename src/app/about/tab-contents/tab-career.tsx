import React from "react";
import CareerCard from "../../../components/career-card";

export default function TabCareer() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <CareerCard
          key={index}
          title={`Career Title ${index + 1}`}
          company_short_name={`Company ${index + 1}`}
          company_full_name={`Full Company Name ${index + 1}`}
          company_location={`Location ${index + 1}`}
          start_date={new Date(2020, index, 1)}
          end_date={index % 2 === 0 ? null : new Date(2022, index, 1)}
          career_timing="Full-time"
          career_type="Remote"
          logo={`https://picsum.photos/seed/${index}/56/56`}
        />
      ))}
    </div>
  );
}
