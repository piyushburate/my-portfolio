import { type RichTextContent } from "@graphcms/rich-text-types"

export interface Project {
  title: string,
  slug: string,
  techStack: string[],
  content: {
    raw: RichTextContent,
  },
  description: string,
  sourceCodeUrl: string,
  liveDemoUrl: string,
  coverImage: {
    url: string,
  },
  publishedAt: string,
}