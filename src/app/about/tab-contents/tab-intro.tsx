import RichTextRenderer from "@/components/rich-text-renderer";
import { type RichTextContent } from "@graphcms/rich-text-types";
import React from "react";

type TabIntroProps = {
  loading: boolean;
  data: {
    raw: RichTextContent;
  };
};

export default function TabIntro({ loading, data }: TabIntroProps) {
  if (loading && data == null) {
    return;
  }
  return <RichTextRenderer content={data.raw} />;
}
