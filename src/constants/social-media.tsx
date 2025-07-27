import { JSX } from "react";
import {
  BsEnvelopeAtFill as EmailIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTwitter as TwitterIcon,
} from "react-icons/bs";

const iconSize = 20;

export type MenuItemProps = {
  title: string;
  href: string;
  icon: JSX.Element;
  className?: string;
};

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: "Email",
    href: "mailto:buratepiyush@gmail.com",
    icon: <EmailIcon size={iconSize} />,
    className: "!bg-green-600 border border dark:border-neutral-700",
  },

  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/piyushburate/",
    icon: <LinkedinIcon size={iconSize} />,
    className: "!bg-blue-500 border border dark:border-neutral-700",
  },
  {
    title: "Twitter",
    href: "https://x.com/piyushburate",
    icon: <TwitterIcon size={iconSize} />,
    className: "!bg-sky-500 border border dark:border-neutral-700",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/piyushburate",
    icon: <InstagramIcon size={iconSize} />,
    className: "!bg-orange-700 border border dark:border-neutral-700",
  },
  {
    title: "Github",
    href: "https://github.com/piyushburate",
    icon: <GithubIcon size={iconSize} />,
    className: "!bg-black border border dark:border-neutral-700",
  },
];
