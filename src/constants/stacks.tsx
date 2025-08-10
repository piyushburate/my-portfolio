import { JSX } from "react";
import { BsFillBootstrapFill, BsRobot } from "react-icons/bs";
import {
  SiCss3,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGraphql,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export type stacksProps = {
  [key: string]: {
    label: string;
    icon: JSX.Element;
  };
};

const iconSize = 20;

export const STACKS: stacksProps = {
  php: {
    label: "PHP",
    icon: <SiPhp size={iconSize} className="text-blue-500" />,
  },
  javascript: {
    label: "JavaScript",
    icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
  },
  typescript: {
    label: "TypeScript",
    icon: <SiTypescript size={iconSize} className="text-blue-400" />,
  },
  nextjs: { label: "Next.js", icon: <SiNextdotjs size={iconSize} /> },
  reactjs: {
    label: "React.js",
    icon: <SiReact size={iconSize} className="text-sky-500" />,
  },
  tailwindcss: {
    label: "TailwindCSS",
    icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  },
  bootstrap: {
    label: "Bootstrap",
    icon: <BsFillBootstrapFill size={iconSize} className="text-purple-500" />,
  },
  graphql: {
    label: "GraphQL",
    icon: <SiGraphql size={iconSize} className="text-pink-600" />,
  },
  laravel: {
    label: "Laravel",
    icon: <SiLaravel size={iconSize} className="text-red-500" />,
  },
  vite: {
    label: "Vite",
    icon: <SiVite size={iconSize} className="text-purple-500" />,
  },
  prisma: {
    label: "Prisma",
    icon: <SiPrisma size={iconSize} className="text-emerald-500" />,
  },
  firebase: {
    label: "Firebase",
    icon: <SiFirebase size={iconSize} className="text-yellow-500" />,
  },
  artificialIntelligence: {
    label: "Artificial Intelligence",
    icon: <BsRobot size={iconSize} className="text-rose-500" />,
  },
  nodejs: {
    label: "Node.js",
    icon: <SiNodedotjs size={iconSize} className="text-green-600" />,
  },
  css: {
    label: "CSS",
    icon: <SiCss3 size={iconSize} className="text-blue-300" />,
  },
  expressjs: { label: "Express.js", icon: <SiExpress size={iconSize} /> },
  jquery: { label: "jQuery", icon: <SiJquery size={iconSize} /> },
  flutter: {
    label: "Flutter",
    icon: <SiFlutter size={iconSize} className="text-blue-400" />,
  },
  supabase: {
    label: "Supabase",
    icon: <SiSupabase size={iconSize} className="text-green-500" />,
  },
  dart: {
    label: "Dart",
    icon: <SiDart size={iconSize} className="text-blue-400" />,
  },
};
