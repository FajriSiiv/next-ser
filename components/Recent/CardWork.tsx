import Image, { StaticImageData } from "next/image";
import React from "react";
import webG from "public/images/web.jpg";
import branding from "public/images/branding-img.jpg";
import sosmed from "public/images/sosmed-img.jpg";

interface PageProps {
  grid_rev?: string;
  title?: string;
  desc?: string;
  brand?: [] | any;
  gambar: HTMLImageElement | StaticImageData;
}

const GridWork = ({ grid_rev = "", brand, desc, title, gambar }: PageProps) => {
  return (
    <div className={`flex gap-x-[100px] max-h-[400px] ${grid_rev}`}>
      <div className="relative w-1/2 group hover:scale-110 transition-all">
        <div>
          <Image
            src={gambar}
            alt="dribble"
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="absolute bg-[#1818189a] w-[100%] h-full top-0 left-0 z-10 shadow-[10px_10px_0px_4px_#181818] text-white p-10 flex flex-col gap-y-5 justify-end opacity-0 group-hover:opacity-100 transition-all">
          <div className="cursor-pointer w-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 p-4 rounded-full border-2 border-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <span className="text-lg cursor-pointer">See Project</span>
        </div>
      </div>
      <div className="flex flex-col justify-start w-1/2">
        <h3 className="text-5xl font-bold">{title}</h3>
        <p className="pt-5 pb-10 leading-relaxed">{desc}</p>
        <div className="flex gap-x-5">
          {brand?.map((e: any, i: number) => (
            <div
              key={i}
              className="cursor-pointer border-2 border-[#BABCBD] py-1 px-4 rounded-full w-fit text-center text-[#BABCBD] "
            >
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function CardWork() {
  return (
    <div className="flex flex-col gap-y-[100px]">
      <GridWork
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, alias
          obcaecati delectus labore voluptas ad deleniti asperiores veniam
          laudantium modi nostrum sequi est? Optio, ab!"
        title="EasyBank"
        brand={["Web Development", "Frontend Developer"]}
        gambar={webG}
      />
      <GridWork
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, alias
          obcaecati delectus labore voluptas ad deleniti asperiores veniam
          laudantium modi nostrum sequi est? Optio, ab!"
        title="Conduit"
        brand={["Web Design", "Design Logo", "Web Development"]}
        grid_rev="flex-row-reverse"
        gambar={branding}
      />
      <GridWork
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, alias
          obcaecati delectus labore voluptas ad deleniti asperiores veniam
          laudantium modi nostrum sequi est? Optio, ab!"
        title="Social Media B"
        brand={["Web Design", "Design Logo", "Social Media"]}
        gambar={sosmed}
      />
    </div>
  );
}
