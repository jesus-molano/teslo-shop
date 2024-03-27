"use client";
import { generatePaginationNumbers } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface PaginationProps {
  totalPages: number;
}

export const Pagination = ({ totalPages }: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageString = searchParams.get("page") ?? 1;

  const currentPage = isNaN(Number(pageString)) ? 1 : Number(pageString);
  if (currentPage < 1 || isNaN(Number(pageString)))
    redirect(`${pathname}?page=1`);

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: string | number) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") return `${pathname}?${params.toString()}`;
    if (Number(pageNumber) <= 0) return `${pathname}`;
    if (Number(pageNumber) > totalPages)
      return `${pathname}?${params.toString()}`;

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handlePagination = (direction: number) => () => {
    if (direction === -1 && currentPage === 1) return;
    if (direction === 1 && currentPage === totalPages) return;

    const newPage = currentPage + direction;
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex text-center justify-center mb-4">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item disabled">
            <button
              className={clsx(
                "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                {
                  "cursor-not-allowed opacity-50 hover:bg-transparent":
                    currentPage === 1,
                }
              )}
              onClick={handlePagination(-1)}
            >
              <IoChevronBackOutline size={26} />
            </button>
          </li>
          {allPages.map((page, index) => (
            <li key={page + "-" + index} className="page-item">
              <Link
                className={clsx(
                  "page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                  {
                    "bg-rose-600 shadow-sm text-white hover:bg-rose-700 hover:text-white":
                      page === currentPage,
                  }
                )}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}

          <li className="page-item">
            <button
              onClick={handlePagination(1)}
              className={clsx(
                "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                {
                  "cursor-not-allowed opacity-50 hover:bg-transparent":
                    currentPage === totalPages,
                }
              )}
            >
              <IoChevronForwardOutline size={26} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
