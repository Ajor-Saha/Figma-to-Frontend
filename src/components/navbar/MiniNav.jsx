import Link from "next/link";
import React from "react";

const MiniNav = () => {
  return (
    <div className="bg-primary flex justify-between py-3 fixed w-full top-0 z-10 text-white px-2">
      <div>
        <a href="#" className="hover:text-red-400">
          Logo
        </a>
      </div>
      <div>
        <Link href="/" className="hover:text-red-400">
          Home
        </Link>
      </div>
      <div>
        <a href="/#about" className="hover:text-red-400">
          ABOUT US
        </a>
      </div>
      <div>
        <Link href="/properties" className="hover:text-red-400">
          PROPERTIES
        </Link>
      </div>
      <div>
        <a href="/#contact" className="hover:text-red-400">
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default MiniNav;
