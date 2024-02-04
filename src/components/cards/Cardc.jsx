import React from "react";

const Cardc = () => {
  return (
    <div className="relative flex w-72 h-80 flex-col overflow-hidden rounded-xl bg-primary bg-clip-border text-gray-700 shadow-md">
      <div className="relative ml-2 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img
          src="/rectangle-15@2x.png"
          alt="ui/ux review check"
          className="w-72"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <h4 className="bg-slate-900 text-yellow-600 rounded-md py-1 px-[83px]">
            NAME NAME
          </h4>
        </div>
        <div className="flex flex-row gap-3 py-3">
          <div className="flex flex-col text-sm text-white">
            <p>20 Lakhs</p>
            <p className="mb-2">MIN INVESTMENT</p>
            <p>9%-12%</p>
            <p>RENTAL YIELD</p>
          </div>
          <div className="flex flex-col text-sm text-white">
            <p>100 sq.ft.</p>
            <p className="mb-2">MIN AREA</p>
            <p>Sector 121, Noida</p>
            <p>LOCATION</p>
          </div>
        </div>
        <div className="py-2 justify-end items-end ml-32">
            <button className="underline text-sm text-right">CONTACT</button>
        </div>
      </div>
    </div>
  );
};

export default Cardc;
