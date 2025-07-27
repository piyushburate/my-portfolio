import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  BiSolidChevronDown as ChevronDownIcon,
  BiSolidChevronUp as ChevronUpIcon,
} from "react-icons/bi";
import LearnSubContentItem from "./learn-subitem-card";

interface ChapterCardProps {
  chapterTitle: string;
  contents: {
    title: string;
    slug: string;
    language?: string;
    difficulty?: string;
  }[];
}

const ChapterCard = ({ chapterTitle, contents }: ChapterCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-full flex-col gap-2"
    >
      <CollapsibleTrigger asChild>
        <div
          className={cn(
            "mb-3 flex cursor-pointer select-none items-center justify-between rounded-t-xl px-5 py-3 text-white",
            "bg-gradient-to-tl from-teal-500 to-teal-600 dark:from-teal-900 dark:to-teal-950",
            "transition-all duration-300",
            !isOpen && "rounded-b-xl"
          )}
        >
          <div className=" text-[15px]">{chapterTitle}</div>
          <div className="flex items-center gap-3">
            <div className="hidden text-[13px]  md:flex">
              {contents?.length} Lesson{contents.length > 1 && "s"}
            </div>
            <div>
              {isOpen ? (
                <ChevronUpIcon size={18} />
              ) : (
                <ChevronDownIcon size={18} />
              )}
            </div>
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col gap-3 pb-3">
        {contents &&
          contents.map((content) => (
            <LearnSubContentItem
              key={content.slug}
              slug={content.slug}
              title={content.title}
              language={content.language}
              difficulty={content.difficulty}
            />
          ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ChapterCard;
