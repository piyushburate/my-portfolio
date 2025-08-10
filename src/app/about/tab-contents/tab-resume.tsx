import React from "react";
import AssetEmbed from "@/components/asset-embed";

type TabResumeProps = {
  loading: boolean;
  data: {
    url: string;
    width: string;
    height: string;
  };
};

export default function TabResume({ loading, data }: TabResumeProps) {
  if (loading && data == null) return;
  return <AssetEmbed url={data.url} width={data.width} height={data.height} />;
}
