import React, { ReactNode } from "react";
import Sidebar from "./sidebar";
import Create from "@/components/create";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex relative">
      <Sidebar />
      <main className={"ml-[250px] w-full"}>{children}</main>
      <Create />
    </div>
  );
};

export default Layout;
