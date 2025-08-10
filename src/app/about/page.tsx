"use client";

import React, { useEffect } from "react";
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
import { type AboutDataType, useAboutStore } from "@/stores/use-about-store";
import PageContainer from "@/components/page-container";

type TabProps = {
  value: string;
  label: string;
  icon: React.ElementType;
  children: React.ElementType;
  getData?: (data: AboutDataType) => object;
};

const tabs: TabProps[] = [
  {
    value: "intro",
    label: "Intro",
    icon: AboutIcon,
    children: TabIntro,
    getData: (data) => data.introduction,
  },
  {
    value: "resume",
    label: "Resume",
    icon: ResumeIcon,
    children: TabResume,
    getData: (data) => data.resume,
  },
  {
    value: "career",
    label: "Career",
    icon: CareerIcon,
    children: TabCareer,
    getData: (data) => data.careerDetails,
  },
  {
    value: "education",
    label: "Education",
    icon: EducationIcon,
    children: TabEducation,
    getData: (data) => data.educationDetails,
  },
];

export default function AboutPage() {
  const router = useRouter();
  const tabParam = useSearchParams().get("tab") ?? "intro";

  const { data, fetchData, loading } = useAboutStore();

  useEffect(() => {
    if (data == null) {
      fetchData();
    }
  }, []);

  return (
    <PageContainer>
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
          <TabsList className="flex flex-col md:flex-row w-full h-auto p-0 gap-1 bg-transparent">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="w-full py-2 text-base rounded-none bg-muted text-foreground data-[state=active]:!bg-muted-foreground data-[state=active]:!text-background"
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
              className="px-4 md:px-8 py-6 rounded-b-sm"
              data-state={tabParam === tab.value ? "active" : "inactive"}
            >
              {(loading || data) && (
                <tab.children
                  loading={loading}
                  data={data && tab.getData?.(data)}
                />
              )}
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </PageContainer>
  );
}
