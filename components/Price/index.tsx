import React from "react";

const initialData = [
  "40 Asset Delivery",
  "15 Capacity Bandwidth",
  "Support System Everywhere",
  "Access Social Media",
  "Unlimited Bandwidth",
  "Priority Support",
];

const CardPrice = () => {
  return (
    <div className="w-1/4 bg-white py-7 px-5 rounded-2xl hover:shadow-[11px_11px_0px_1px_rgba(0,0,0,0.75)] hover:border-2 border-2 border-[#55E6A5] hover:border-[#181818] hover:scale-110 cursor-default flex flex-col justify-between transition-all group">
      <div>
        <div>
          <div className="pb-5 ">
            <div className="flex gap-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-4xl font-bold">Personal</p>
            </div>
            <p className=" text-[#8B8A8D]">For 1x project</p>
          </div>
        </div>
        <div className="flex items-start pt-6">
          <span className="font-bold text-xl">$</span>
          <div className="flex items-end">
            <p className="text-[5rem] leading-[5rem] font-extrabold">10</p>
            <p className="mb-3 text-xl font-semibold">/Mo</p>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex flex-col gap-y-2 pb-20">
          {initialData.map((e, i) => (
            <div key={i} className="flex items-center gap-x-3 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="w-7 h-7 stroke-[#55E6A5]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-lg font-medium">{e}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="transition-all py-2 w-full bg-white text-[#181818] rounded-full group-hover:bg-[#181818] group-hover:text-white border-2 border-[#181818]">
        Purcase Now
      </button>
    </div>
  );
};

export default function Price() {
  return (
    <div className="mt-20">
      <div>
        <svg
          viewBox="0 0 888 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M128.5 5.99995C108 9.9999 0 5.99995 0 5.99995V122H887.5V0C869.9 9.2 835.5 10.5 820.5 10C756.5 2.4 738.5 14 696 10C654 3 544 24 474 28C418 31.2 299 14.6666 246.5 5.99995C198.1 0.399951 149 2 128.5 5.99995Z"
            fill="#55E6A5"
          />
        </svg>
      </div>
      <div className="px-20 bg-[#55E6A5] pb-72">
        <div className="text-center text-lg">
          <h2 className="text-[3rem] font-extrabold mb-10">
            Choose your package
          </h2>
          <p>Change the package that suits you</p>
        </div>
        <div className="flex gap-x-[60px]  justify-center mt-20">
          <CardPrice />
          <CardPrice />
          <CardPrice />
        </div>
      </div>
    </div>
  );
}
