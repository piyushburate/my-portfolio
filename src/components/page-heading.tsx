import { ReactNode } from "react";

interface PageHeadingProps {
  title: string;
  description?: string | ReactNode;
}

const PageHeading = ({ title, description }: PageHeadingProps) => {
  return (
    <>
      <div className="text-2xl font-medium">{title}</div>
      <div className="mb-6 border-b border-dashed border-neutral-600 pb-6 pt-2 text-neutral-600 dark:text-neutral-400">
        {description}
      </div>
    </>
  );
};

export default PageHeading;
