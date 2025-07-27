import GoogleDriveEmbed from "@/components/google-drive-embed";
import { Button } from "@/components/ui/button";
import React from "react";
import { BsDownload } from "react-icons/bs";

export default function TabResume() {
  return (
    <div className="space-y-4">
      <Button variant="outline" className="py-4">
        <a
          href="/resume.pdf"
          download={true}
          className="flex items-center gap-2"
        >
          <BsDownload className="size-3.5" />
          <span>Download Resume & Template</span>
        </a>
      </Button>
      <GoogleDriveEmbed
        id={process.env.NEXT_PUBLIC_RESUME_GOOGLE_DOC_ID ?? "null"}
      />
    </div>
  );
}
