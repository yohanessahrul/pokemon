import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <section>
      <div className="flex justify-between bg-primary">
        <div>
          <Link className="text-[white]" href={"/search"}>
            Search
          </Link>
        </div>
        <div>
          <Link className="text-[white]" href={"/search"} target="_blank">
            Filter
          </Link>
        </div>
      </div>
    </section>
  );
}
