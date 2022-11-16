import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-20 pt-5 absolute top-0 left-0 w-[100vw] h-20 bg-transparent text-white ">
      <span className="font-bold text-xl">Siiv</span>
      <div className="flex list-none gap-x-10">
        <li>Portofolio</li>
        <li>Portofolio</li>
        <li>Portofolio</li>
        <li>Portofolio</li>
      </div>
    </div>
  );
}
