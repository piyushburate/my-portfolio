import Link from "next/link";
import { BiFile as SubContentIcon } from "react-icons/bi";

import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { STACKS } from "@/constants/stacks";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface SubContentProps {
  slug: string;
  title: string;
  language?: string;
  difficulty?: string;
}

const LearnSubContentItem = ({
  slug,
  title,
  language,
  difficulty = "",
}: SubContentProps) => {
  const slugMain = usePathname();
  return (
    <Link href={`${slugMain}/${slug}`}>
      <Card
        className={cn(
          "flex w-full cursor-pointer flex-row items-center justify-between bg-accent border px-5 py-4 lg:hover:scale-[102%] transition"
        )}
      >
        <div className="flex items-center gap-3">
          <SubContentIcon size={18} className="hidden md:flex" />
          <h5 className=" font-[15px]">{title}</h5>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          {difficulty && (
            <Tooltip>
              <TooltipTrigger>
                <div className="rounded-full bg-neutral-200 px-2 py-1 text-xs font-medium capitalize text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400">
                  {difficulty}
                </div>
              </TooltipTrigger>
              <TooltipContent className="capitalize">{`Difficulty: ${difficulty}`}</TooltipContent>
            </Tooltip>
          )}
          {language && (
            <Tooltip>
              <TooltipTrigger>{STACKS[language]}</TooltipTrigger>
              <TooltipContent>{language}</TooltipContent>
            </Tooltip>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default LearnSubContentItem;
