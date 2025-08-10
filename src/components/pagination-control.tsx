"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

type PaginationControlProps = {
  total: number;
  page: number;
  perPage: number;
  onChange?: (page: number) => void; // optional if we use only URL
  maxVisiblePages?: number;
};

export function PaginationControl({
  total,
  page,
  perPage,
  onChange,
  maxVisiblePages = 5,
}: PaginationControlProps) {
  const totalPages = Math.ceil(total / perPage);
  const router = useRouter();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const pages: (number | string)[] = [];

  // Always show first page
  pages.push(1);

  // Left ellipsis
  if (page > Math.floor(maxVisiblePages / 2) + 2) {
    pages.push("left-ellipsis");
  }

  // Middle pages
  const start = Math.max(2, page - Math.floor(maxVisiblePages / 2));
  const end = Math.min(totalPages - 1, page + Math.floor(maxVisiblePages / 2));
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Right ellipsis
  if (page < totalPages - Math.floor(maxVisiblePages / 2) - 1) {
    pages.push("right-ellipsis");
  }

  // Always show last page
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  const goToPage = (p: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(p));
    router.push(`?${params.toString()}`);
    if (onChange) onChange(p);
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Prev */}
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                goToPage(page - 1);
              }}
            />
          </PaginationItem>
        )}

        {/* Numbers */}
        {pages.map((p, i) => (
          <PaginationItem key={i}>
            {typeof p === "number" ? (
              <PaginationLink
                className="cursor-pointer"
                isActive={page === p}
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(p);
                }}
              >
                {p}
              </PaginationLink>
            ) : (
              <PaginationEllipsis />
            )}
          </PaginationItem>
        ))}

        {/* Next */}
        <PaginationItem>
          {page < totalPages && (
            <PaginationNext
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                goToPage(page + 1);
              }}
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
