import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-primary lg:px-[10%] md:px-[10%] sm:px-[16px]">
      <div className="bg-[red] ">
        <h1 className="text-3xl text-[white] text-center ">
          <Link href={"/"}>Poke-Dex</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
