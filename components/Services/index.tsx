import React from "react";

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
        <p className="text-3xl">{title}</p>
      </div>
      <p className="text-[#F5F4F9] py-5 leading-relaxed min-h-[120px] w-[90%]">
        {desc}
      </p>
      <button className="px-5 py-1 text-lg border-2 border-[#F5F4F9] bg-transparent rounded-full">
        See Project
      </button>
    </div>
  );
};

export default function Service() {
  return (
    <>
      <div className="bg-[#181818] text-white px-20 pt-10">
        <h2 className="text-center mb-20 text-[3rem] font-bold">
          Provide quality services
        </h2>
        <div className="grid grid-cols-2 gap-x-[70px]">
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
      </div>
    </>
  );
}
