import React from "react";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="py-5 sm:py-10 px-4 sm:px-8">{children}</div>;
}
