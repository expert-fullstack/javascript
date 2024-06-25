"use client";

import Login from "@/components/login";
import Register from "@/components/register";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState<"login" | "register">("login");

  return (
    <div className="grid lg:grid-cols-2">
      <div className="lg:col-span-1">
        <div className="p-8 flex flex-col items-center justify-center w-full lg:min-h-screen">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              Welcome to Next App Dashboard
            </h1>
            <p className="text-xl sm:text-2xl mb-8">
              Effortlessly Manage Your Data with Seamless S3 Bucket Integration
            </p>
            <Link href="/todo-list">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col lg:items-center justify-center sm:px-8 w-full lg:min-h-screen">
          {showForm === "login" ? (
            <Login setShowForm={setShowForm} />
          ) : (
            <Register setShowForm={setShowForm} />
          )}
        </div>
      </div>
    </div>
  );
}
