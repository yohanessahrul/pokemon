import Link from "next/link";
import React from "react";
import { Rubik_80s_Fade, Nabla } from "next/font/google";
import Image from "next/image";

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
          flex
          justify-center
          pt-10
        "
      >
        <Link href={"/"}>
          <Image
            src="/images/pokemon-logo.png"
            width={600}
            height={100}
            alt="logo"
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
