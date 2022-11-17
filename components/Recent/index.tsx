import React from "react";
import CardWork from "./CardWork";

export default function RecentWork() {
  return (
    <div className="py-10 px-20 md:px-10">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-5xl font-extrabold">Our recent work</h2>
        <p className="w-1/2 py-8 md:w-3/4">
          We love residential and build projects - big and small! From full
          builds, major renovations or a new lease of life to individuals space
        </p>
        <button className="px-7 py-3 font-bold bg-[#55E6A5] rounded-full border-2 border-[#181818] shadow-[4px_4px_0px_0px_rgba(24,24,24,1)]">
          View all projecs
        </button>
      </div>
      <div className="pt-20">
        <CardWork />
      </div>
    </div>
  );
}
