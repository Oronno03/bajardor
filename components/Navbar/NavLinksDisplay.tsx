"use client";
import { ICategory } from "@/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinksDisplay = ({ categories }: { categories: ICategory[] }) => {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const isCategoryPage = parts[1] === "category";
  const catId = isCategoryPage ? parts[2] : null;

  return (
    <div className="px-4 py-2 gap-5 flex flex-wrap">
      {categories.map((cat) => (
        <Link
          href={`/category/${cat.id}`}
          key={cat.id}
          className={`${catId === cat.id ? "bg-primary/10" : ""} w-max px-3 py-1 rounded-[14px]`}
        >
          {cat.icon} {cat.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default NavLinksDisplay;
