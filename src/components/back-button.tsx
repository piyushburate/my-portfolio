import React from "react";
import { Button } from "./ui/button";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function BackButton() {
  return (
    <Button
      variant="ghost"
      className="hover:!bg-transparent group text-base !px-0 mb-4 cursor-pointer"
    >
      <BsArrowLeftCircle className="size-4.5" />
      <span className="group-hover:translate-x-2 transition">Back</span>
    </Button>
  );
}
