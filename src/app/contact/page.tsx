"use client";

import React from "react";
import { SOCIAL_MEDIA } from "@/constants/social-media";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageHeading from "@/components/page-heading";

export default function ContactPage() {
  const handleAction = (link: string) => window.open(link, "_blank");
  return (
    <div className="py-10 px-8">
      <PageHeading
        title="Contact"
        description="Feel free to get in touch and let's have a discussion about how we can
          work together."
      />
      <section>
        <div className="text-xl font-medium lg:text-2xl mb-5">
          Find me on social media
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          {SOCIAL_MEDIA?.map((item, index: number) => (
            <Button
              key={index}
              className={cn(
                "flex-1 flex items-center justify-center text-white",
                item?.className
              )}
              onClick={() => handleAction(item?.href)}
            >
              {item?.icon}
              {item?.title}
            </Button>
          ))}
        </div>
      </section>
      <div className="border-b my-8"></div>
      <section>
        <div className="text-xl font-medium lg:text-2xl mb-5">
          Or send me a message
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <div className="flex gap-4">
            <Input
              type="text"
              name="name"
              placeholder="Name*"
              className="flex-1/2 px-4 py-6 !ring-0"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email*"
              className="flex-1/2 px-4 py-6 !ring-0"
              required
            />
          </div>
          <Textarea
            name="message"
            placeholder="Message*"
            className="flex-1 p-4 min-h-32 !ring-0"
            required
          />
          <Button type="submit" className="flex-1 px-4 py-3">
            Send Message
          </Button>
        </form>
      </section>
    </div>
  );
}
