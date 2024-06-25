import Add from "@/icons/add";
import React from "react";
import Input from "./ui/input";
import Select from "./ui/select";

const Create = () => {
  return (
    <div className="fixed z-0 w-full h-screen bg-opacity-60 bg-black">
      <div className="absolute w-[720px] min-h-[600px] z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 shadow-md rounded-2xl p-8">
        <div className="flex items-center justify-between gap-8">
          <h3 className="font-semibold text-2xl">Create Team</h3>
          <div className="rotate-45 cursor-pointer pointer-events-none">
            <Add />
          </div>
        </div>
        <hr className="my-2 border-gray-400" />
        <form className="my-10 flex flex-col gap-5">
          <Input
            className="bg-transparent border-none outline-none bg-gray-400 focus:ring-0"
            placeholder="Enter team name"
          />
          <Select
            className="bg-transparent border-none outline-none bg-gray-400 focus:ring-0"
            options={[
              { label: "Team 1", value: "team1" },
              { label: "Team 2", value: "team2" },
              { label: "Team 3", value: "team3" },
              { label: "Team 4", value: "team4" },
            ]}
          />
          <Select
            className="bg-transparent border-none outline-none bg-gray-400 focus:ring-0"
            options={[
              { label: "Select team members", value: "team1" },
              { label: "Team 2", value: "team2" },
              { label: "Team 3", value: "team3" },
              { label: "Team 4", value: "team4" },
            ]}
          />
        </form>
      </div>
    </div>
  );
};

export default Create;
