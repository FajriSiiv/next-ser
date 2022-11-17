import React from "react";

export default function Jumbotron() {
  return (
    <div className="h-[100vh] max-h-[900px] bg-[#181818] text-white">
      <div className="w-3/4 mx-auto h-4/5 text-center  flex flex-col justify-center items-center">
        <h1 className="text-[5.2rem] font-bold leading-[5.2rem] md:text-5xl sm:text-2xl">
          Make brand identities from scratch and help big brand stay mighty
        </h1>
        <p className="mt-10 w-2/3 text-lg text-[#979797] md:text-base md:w-full sm:text-xs">
          I&apos;m Muhammad Fajri a Frontend Developer Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Velit vero quam deleniti facilis
        </p>
      </div>
    </div>
  );
}
