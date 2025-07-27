"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  HiOutlineAcademicCap as EducationIcon,
  HiOutlineBookmark as AboutIcon,
  HiOutlineBriefcase as CareerIcon,
  HiOutlineDocumentText as ResumeIcon,
} from "react-icons/hi";
import TabIntro from "./tab-contents/tab-intro";
import TabResume from "./tab-contents/tab-resume";
import TabCareer from "./tab-contents/tab-career";
import TabEducation from "./tab-contents/tab-education";
import { useRouter, useSearchParams } from "next/navigation";
import PageHeading from "@/components/page-heading";

type TabProps = {
  value: string;
  label: string;
  icon: React.ElementType;
  children: React.ElementType;
};

const tabs: TabProps[] = [
  {
    value: "intro",
    label: "Intro",
    icon: AboutIcon,
    children: TabIntro,
  },
  {
    value: "resume",
    label: "Resume",
    icon: ResumeIcon,
    children: TabResume,
  },
  {
    value: "career",
    label: "Career",
    icon: CareerIcon,
    children: TabCareer,
  },
  {
    value: "education",
    label: "Education",
    icon: EducationIcon,
    children: TabEducation,
  },
];

export default function AboutPage() {
  const router = useRouter();
  const tabParam = useSearchParams().get("tab") ?? "intro";
  return (
    <div className="py-10 px-8">
      <PageHeading
        title="About"
        description="An insightful glimpse into who I am - because every detail adds depth
          to the canvas of life."
      />
      <section>
        <Tabs
          defaultValue="intro"
          value={tabParam}
          className="w-full gap-0 rounded-sm overflow-hidden border border-t-0"
        >
          <TabsList className="flex w-full h-auto p-0 gap-1 bg-transparent">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="py-2 text-base rounded-none bg-muted text-foreground data-[state=active]:!bg-muted-foreground data-[state=active]:!text-background"
                onClick={() => router.push("?tab=" + tab.value)}
                data-state={tabParam === tab.value ? "active" : "inactive"}
              >
                <tab.icon className="inline-block size-4" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="px-8 py-6 rounded-b-sm"
              data-state={tabParam === tab.value ? "active" : "inactive"}
            >
              <tab.children />
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </div>
  );
}
