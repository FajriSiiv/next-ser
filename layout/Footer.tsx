import React from "react";
import Image from "next/image";
import github from "public/images/github.svg";
import Github from "../components/icons/github";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-[-200px] pb-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#181818"
          fillOpacity="1"
          d="M0,192L48,165.3C96,139,192,85,288,85.3C384,85,480,139,576,149.3C672,160,768,128,864,128C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="px-20 bg-[#181818] text-white flex md:px-10">
        <div className="w-full h-[70vh] max-h-[500px] flex flex-col items-center justify-center">
          <h3 className="font-bold text-5xl w-1/2 text-center leading-tight md:text-4xl md:w-full sm:text-2xl">
            Lets discuss on <br /> something <i className="font-medium">cool</i>{" "}
            together
          </h3>
          <div className="pt-7 flex gap-x-5">
            <input
              type="text"
              className="bg-transparent  focus:outline-none border-b-[1px] border-b-[#F3F5F7] pb-2 text-xl text-center w-80 sm:w-full sm:text-base"
              placeholder="email@gmail.com"
            />
            <div className="cursor-pointer w-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 p-4 rounded-full border-2 border-[#F3F5F7]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 pt-20 md:px-10">
        <span className="text-3xl font-bold ">Siiv.</span>
        <div className="grid grid-cols-2 pt-5 md:grid-rows-2 md:grid-cols-none sm:flex sm:flex-col">
          <div className="w-4/5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate, aspernatur?
            </p>
            <div className="pt-8  flex gap-x-5">
              <Link
                href="https://github.com/FajriSiiv"
                target="_blank"
                className="relative cursor-pointer w-fit p-2 rounded-full border-2 border-[#DADCDD]"
              >
                <Github fill="#181818" classN="w-8 h-8" />
              </Link>
              <Link
                href="https://github.com/FajriSiiv"
                target="_blank"
                className="relative cursor-pointer w-fit p-2 rounded-full border-2 border-[#DADCDD]"
              >
                <Github fill="#181818" classN="w-8 h-8" />
              </Link>
              <Link
                href="https://github.com/FajriSiiv"
                target="_blank"
                className="relative cursor-pointer w-fit p-2 rounded-full border-2 border-[#DADCDD]"
              >
                <Github fill="#181818" classN="w-8 h-8" />
              </Link>
            </div>
          </div>
          <div className="flex justify-around w-full mx-auto md:justify-between md:pt-5 sm:flex-wrap sm:items-start sm:gap-10 sm:pt-10">
            <div className="flex flex-col gap-y-4">
              <p>Abous us</p>
              <p>Features</p>
              <p>Our Blogs</p>
              <p>Integrations</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookie Settings</p>
              <p>Community</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <p>Intergrations</p>
              <p>Use Case</p>
              <p>Customer</p>
              <p>Designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 pt-20 pb-5 md:px-10">
        <hr />
      </div>
      <div className="text-center text-lg font-medium">
        <span> &copy;2022 Copyright by Muhammad Fajri</span>
      </div>
    </footer>
  );
}
