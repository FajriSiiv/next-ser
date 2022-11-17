"use client";
import React, { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(true);

  const navClick = () => {
    if (!navbar) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <div className="flex justify-between items-center px-20 pt-5 absolute top-0 left-0 w-[100vw] h-20 bg-transparent text-white md:px-10">
      <span className="font-medium text-3xl tracking-wide ">Siiv</span>
      <div
        className={`flex list-none gap-x-10 sm:fixed sm:h-[100vh] sm:w-[100vw] sm:flex-col sm:justify-center sm:left-0 sm:top-0 sm:bg-[#181818] sm:gap-10 sm:items-center sm:z-20  transition-all ${
          navbar ? "sm:translate-y-[-100%]" : "sm:translate-y-[0%]"
        }`}
      >
        <li>Portofolio</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
        <div
          className="hidden sm:block sm:absolute top-0 right-0 translate-x-[-30px] translate-y-8"
          onClick={navClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="hidden sm:block" onClick={navClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
}
