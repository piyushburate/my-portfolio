import { type RichTextContent } from "@graphcms/rich-text-types"

export interface Blog {
  title: string,
  slug: string,
  content: {
    raw: RichTextContent,
    text: string,
  },
  tags: string[],
  description: string,
  coverImage: {
    url: string,
  },
  publishedAt: string,
}