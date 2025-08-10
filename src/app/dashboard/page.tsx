"use client";

import React from "react";
import CodingActive from "./coding-active/coding-active";
import Contributions from "./contributions/contributions";
import PageHeading from "@/components/page-heading";
import PageContainer from "@/components/page-container";

export default function DashboardPage() {
  return (
    <PageContainer>
      <PageHeading
        title="Dashboard"
        description="This is my personal dashboard, built with Next.js API routes deployed
          as serverless functions."
      />
      <CodingActive />
      <div className="border-b my-8"></div>
      <Contributions username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!} />
    </PageContainer>
  );
}
