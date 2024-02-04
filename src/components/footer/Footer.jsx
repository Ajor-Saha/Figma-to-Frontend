import React from "react";

const Footer = () => {
  return (
    <div className="bg-footer">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between text-slate-300 text-sm px-5 md:py-32 py-5 lg:px-20">
        <div className="text-yellow-600 text-xl md:py-10 py-3">LOGO</div>
        <div className="flex flex-col gap-5 mt-8 py-3 md:py-0">
          <div className="flex flex-row">
            <img src="/mail.svg" alt="" />
            <span className="mt-2">MAIL ID</span>
          </div>
          <div className="flex flex-row">
            <img src="/contact.svg" alt="" />
            <span className="mt-2">Contact No</span>
          </div>
        </div>
        <div className="flex flex-col gap-8 py-3 md:py-0">
          <p>HOME</p>
          <p>ABOUT US</p>
          <p>PROPERTIES</p>
          <p>CONTACT</p>
        </div>
        <div className="flex flex-col py-3 md:py-0">
          <p>DIRECTLY CONTACT US ON</p>
          <div className="flex flex-row bg-primary mt-2 py-1 rounded-lg justify-center items-center gap-2">
            <img src="/what.png" alt="pic" className="w-10"/>
            <button>WHATSAPP</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-7 pb-5">
        
          <div className="border border-yellow-600 w-full"></div>
          <span className="py-3">
            ©2024 ALL RIGHTS RESERVED | POWERED BY PROPERTY VISTA DISCLAIMER
          </span>
        
      </div>
    </div>
  );
};

export default Footer;
