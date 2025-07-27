"use client";

import { notFound, useParams } from "next/navigation";
import LearnSection from "../components/learn-section";
import ContentSection from "../components/content-section";

export default function LearnPage() {
  const { slug } = useParams<{ slug: string[] }>();

  if (slug.length == 1) {
    return LearnSection({ slug: slug[0] });
  } else if (slug.length == 2) {
    return ContentSection({ slug: slug });
  } else {
    return notFound();
  }
}
