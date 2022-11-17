import Image from "next/image";
import React from "react";
import stripe from "public/images/stripe.webp";

interface CardSer {
  title: string;
  no: string;
  desc: string;
}

const CardService = ({ title, no, desc }: CardSer) => {
  return (
    <div className="pb-10">
      <div className="flex items-start gap-x-5">
        <span className="text-xl text-[#55E6A5]">{no}.</span>
        <p className="text-3xl leading-7 md:text-2xl md:leading-8">{title}</p>
      </div>
      <p className="text-[#F5F4F9] py-5 leading-relaxed min-h-[120px] w-[90%] md:text-base sm:text-xs">
        {desc}
      </p>
      <button className="px-5 py-1 text-lg border-2 border-[#F5F4F9] bg-transparent rounded-full sm:text-sm">
        See Project
      </button>
    </div>
  );
};

export default function Service() {
  return (
    <>
      <div className="bg-[#181818] text-white px-20 pt-10 md:px-10">
        <h2 className="text-center mb-20 text-[3rem] font-bold md:text-[2.5rem] sm:text-3xl">
          Provide quality services
        </h2>
        <div className="grid grid-cols-2 gap-x-[70px] md:grid-rows-2 md:grid-cols-none">
          <CardService
            title="Frontend Developer"
            no="01"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        magni dolores sapiente temporibus at amet quidem aliquid molestiae
        alias,Possimus, accusantium doloremque!"
          />
          <CardService
            title="Backend Developer"
            no="02"
            desc="Lorem ipsum dolor sit amet consectetur adipi magni dolores sapiente temporibus at amet quidem aliquid molestiae
          alias,Possimus, accusantium doloremque!"
          />
        </div>
        <div className="flex justify-between py-10">
          <div className="relative">
            <Image
              className="h-20 w-28 object-contain"
              src={stripe}
              alt="stripe"
            />
          </div>
          <div className="relative">
            <Image
              className="h-20 w-28 object-contain"
              src={stripe}
              alt="stripe"
            />
          </div>
          <div className="relative">
            <Image
              className="h-20 w-28 object-contain"
              src={stripe}
              alt="stripe"
            />
          </div>
          <div className="relative">
            <Image
              className="h-20 w-28 object-contain"
              src={stripe}
              alt="stripe"
            />
          </div>
          <div className="relative">
            <Image
              className="h-20 w-28 object-contain"
              src={stripe}
              alt="stripe"
            />
          </div>
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#181818"
            fillOpacity="1"
            d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,112C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
