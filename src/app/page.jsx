import About from "@/components/about/About";
import SimpleSlider from "@/components/cards/CardSlider";
import Carda from "@/components/cards/Carda";
import Cardb from "@/components/cards/Cardb";
import Cardc from "@/components/cards/Cardc";
import Contact from "@/components/contact/Contact";
import Properties from "@/components/properties/Properties";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="py-32 bg-primary flex flex-col md:flex-row justify-center items-center md:justify-evenly gap-5 md:gap-0">
        <div className="flex flex-col gap-10">
          <Carda />
          <Cardb />
        </div>
        <div>
          <img className="max-w-sm" alt="" src="/img20231227wa0188-1@2x.png" />
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Properties />
      </div>
      <div className="py-10 bg-contact">
        <Contact />
      </div>
    </div>
  );
}
