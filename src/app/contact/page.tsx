"use client";

import React, { useEffect } from "react";
import { getSocialMediaData } from "@/constants/social-media";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PageHeading from "@/components/page-heading";
import PageContainer from "@/components/page-container";
import { ContactDataType, useContactStore } from "@/stores/use-contact-store";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  const { data, fetchData, loading } = useContactStore();

  useEffect(() => {
    if (data == null) {
      fetchData();
    }
  }, []);

  const socialMedia = (data: ContactDataType) => getSocialMediaData(data);
  return (
    <PageContainer>
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
          {loading &&
            !data &&
            Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="flex-1 h-9 rounded-lg" />
            ))}
          {data &&
            socialMedia(data)?.map((item, index: number) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                className={"flex-1 flex items-center justify-center"}
              >
                <Button
                  className={cn(
                    "w-full text-white cursor-pointer",
                    item.className
                  )}
                >
                  {item?.icon}
                  {item?.title}
                </Button>
              </Link>
            ))}
        </div>
      </section>
      <div className="border-b my-8"></div>
      <section>
        <div className="text-xl font-medium lg:text-2xl mb-5">
          Or send me a message
        </div>
        <ContactForm />
      </section>
    </PageContainer>
  );
}
