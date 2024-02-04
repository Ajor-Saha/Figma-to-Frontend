import React from "react"

const Cardb = () => {
  return (
    <div className="max-w-sm h-auto  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-600 flex justify-between items-center gap-1">
      <div className="py-2 px-1">
        <div>
          <img
            className="w-[52px] h-[43px] relative overflow-hidden shrink-0 z-[6]"
            loading="eager"
            alt=""
            src="/vector-3.svg"
          />
        </div>
        <div className="self-stretch h-[26px] relative font-medium inline-block shrink-0 z-[6] text-white text-sm">
         GROWTH
        </div>
      </div>
      <div className="py-2 px-2">
        <div>
          <img
            className="w-[52px] h-[43px] relative overflow-hidden shrink-0 z-[6]"
            loading="eager"
            alt=""
            src="/layer-1.svg"
          />
        </div>
        <div className="self-stretch h-[26px] relative font-medium inline-block shrink-0 z-[6] text-white text-sm">
         INVESTMENT
        </div>
      </div>
      <div className="py-2 px-2">
        <div>
          <img
            className="w-[52px] h-[43px] relative overflow-hidden shrink-0 z-[6]"
            loading="eager"
            alt=""
            src="/layer-1-1.svg"
          />
        </div>
        <div className="self-stretch h-[26px] relative font-medium inline-block shrink-0 z-[6] text-white text-sm">
          PROPERTY
        </div>
      </div>
      <div className="py-2 px-2">
        <div>
          <img
            className="w-[52px] h-[43px] relative overflow-hidden shrink-0 z-[6]"
            loading="eager"
            alt=""
            src="/frame.svg"
          />
        </div>
        <div className="self-stretch h-[26px] relative font-medium inline-block shrink-0 z-[6] text-white text-sm">
        ASSISTANCE
        </div>
      </div>
    </div>
  );
};

export default Cardb;
