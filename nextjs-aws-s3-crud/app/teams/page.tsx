import DataTable from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

const data = [
  { col1: "Hello", col2: "World" },
  { col1: "React Table", col2: "Rocks" },
  { col1: "Whatever", col2: "You Want" },
  { col1: "Whatever", col2: "You Want" },
  { col1: "React Table", col2: "Rocks" },
  { col1: "Whatever", col2: "You Want" },
  { col1: "React Table", col2: "Rocks" },
  { col1: "Whatever", col2: "You Want" },
  { col1: "React Table", col2: "Rocks" },
  { col1: "Whatever", col2: "You Want" },
  { col1: "React Table", col2: "Rocks" },
  { col1: "React Table", col2: "Rocks" },
];

const columns: ColumnDef<any, any>[] = [
  {
    header: "Column 1",
    accessorKey: "col1",
  },
  {
    header: "Column 2",
    accessorKey: "col2",
  },
];

const Teams = () => {
  return (
    <div className="w-full">
      <div className="p-8 flex flex-col w-full lg:min-h-screen">
        <div className="max-w-7xl">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">List of data</h1>
          <p className="text-xl sm:text-2xl mb-8">
            Effortlessly Manage Your Data with Seamless S3 Bucket Integration
          </p>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Teams;
