import React from "react";

export default function Banner() {
  return (
    <section className="w-full h-300px">
      <div className="w-full h-300  flex flex-row justify-center items-center">
        <div className="w-[150px] h-[210px] bg-[orange]"></div>
        <div className="w-[280px] h-[300px] bg-[yellow]"></div>
        <div className="w-[150px] h-[210px] bg-[orange]"></div>
      </div>
    </section>
  );
}
