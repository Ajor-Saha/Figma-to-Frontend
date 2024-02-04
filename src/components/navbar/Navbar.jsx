import Link from "next/link";
import React from "react";
import MiniNav from "./MiniNav";

const Navbar = () => {
  return (
    <div>
      <div className="bg-primary flex justify-between py-3 fixed w-full top-0 z-10">
      <div>
        <a href="#" className="font-semibold text-xl ml-10 lg:ml-20 text-white">
          Logo
        </a>
      </div>
      <div className="hidden md:block mt-1 mr-10">
        <nav>
          <ul className="flex space-x-4 text-xl gap-10 lg:gap-20 text-white">
            <li>
              <Link href="/" className="hover:text-red-400">
                Home
              </Link>
            </li>
            <li>
              <a href="/#about" className="hover:text-red-400">
                ABOUT US
              </a>
            </li>
            <li>
              <Link href="/properties" className="hover:text-red-400">
                PROPERTIES
              </Link>
            </li>
            <li>
              <a href="/#contact" className="hover:text-red-400">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
      <div className="md:hidden">
        <MiniNav />
      </div>
    </div>
  );
};

export default Navbar;
