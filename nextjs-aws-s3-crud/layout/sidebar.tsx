"use client";

import Add from "@/icons/add";
import Logo from "@/icons/logo";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed h-screen overflow-y-scroll w-[250px]">
      <div className="flex flex-col h-[inherit] w-full">
        <div className="w-full flex flex-col items-start gap-3 px-6 py-[18px]">
          <div className="flex items-center justify-between">
            <Logo />
          </div>
        </div>
        <hr className="my-4" />
        <div className={cn("my-auto flex-grow flex flex-col items-start")}>
          <Link
            className={cn(
              "flex items-center gap-3 h8 px-5 py-3",
              pathname === "/" ? "text-blue-700 font-semibold" : ""
            )}
            href={"/"}
          >
            <p>Home</p>
          </Link>
          <Link
            className={cn(
              "flex items-center gap-3 h8 px-5 py-3",
              pathname === "/profile" ? "text-blue-700 font-semibold" : ""
            )}
            href={"/profile"}
          >
            <p>Profile</p>
          </Link>
          <Link
            className={cn(
              "flex items-center gap-3 h8 px-5 py-3",
              pathname === "/about" ? "text-blue-700 font-semibold" : ""
            )}
            href={"/about"}
          >
            <p>About</p>
          </Link>
          <Link
            className={cn(
              "flex items-center gap-3 h8 px-5 py-3",
              pathname === "/teams" ? "text-blue-700 font-semibold" : ""
            )}
            href={"/teams"}
          >
            <p>Teams</p>
          </Link>
          <div className="flex items-center gap-3 h8 px-5 py-3"></div>
        </div>
        <hr className="my-4" />
        <div className="mt-auto w-full">
          <Link
            className={cn(
              "flex items-center gap-3 h8 px-5 py-3",
              pathname === "/create" ? "text-blue-700 font-semibold" : ""
            )}
            href={"/create"}
          >
            <p>Create New</p>
            <Add />
          </Link>
          <div className="flex items-center gap-3 h8 px-5 py-3"></div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
