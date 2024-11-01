import Link from "next/link";
import React from "react";
import { Rubik_80s_Fade, Nabla } from "next/font/google";

const rubik80 = Nabla({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  return (
    <header
      className="
        w-full
        bg-primary
      "
    >
      <div
        className=" 
          m-auto
          lg:max-w-[990px]
          md:max-w-[760px]
          sm:max-w-[600px]
        "
      >
        <h1
          className={`lg:text-[80px] text-[70px] text-[white] text-center ${rubik80.className}`}
        >
          <Link href={"/"}>Pokemon</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
