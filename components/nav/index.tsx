import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <section>
      <div className="flex justify-between bg-[red] px-4 py-4 mb-6 rounded-lg relative z-20">
        <div className="flex w-full">
          <Link className="py-3 px-6 bg-[white] rounded-lg" href={"/search"}>
            Search
          </Link>
        </div>
        <div className="flex w-full justify-end">
          <Link
            className="bg-[white] py-3 px-6 rounded-lg"
            href={"/detail/asd"}
          >
            Detail
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Nav;
