import { ContactDataType } from "@/stores/use-contact-store";
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

export const getSocialMediaData = ({
  email,
  linkedIn,
  twitter,
  instagram,
  github,
}: ContactDataType): MenuItemProps[] => [
  {
    title: "Email",
    href: `mailto:${email}`,
    icon: <EmailIcon size={iconSize} />,
    className: "!bg-green-600 border border dark:border-neutral-700",
  },

  {
    title: "Linkedin",
    href: linkedIn,
    icon: <LinkedinIcon size={iconSize} />,
    className: "!bg-blue-500 border border dark:border-neutral-700",
  },
  {
    title: "Twitter",
    href: twitter,
    icon: <TwitterIcon size={iconSize} />,
    className: "!bg-sky-500 border border dark:border-neutral-700",
  },
  {
    title: "Instagram",
    href: instagram,
    icon: <InstagramIcon size={iconSize} />,
    className: "!bg-orange-700 border border dark:border-neutral-700",
  },
  {
    title: "Github",
    href: github,
    icon: <GithubIcon size={iconSize} />,
    className: "!bg-black border border dark:border-neutral-700",
  },
];
