import React from "react";
import Avatar from "../avatar";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full">
      <div className="w-full flex flex-row justify-center items-center relative overflow-hidden">
        <div className="sm:w-[70%] sm:h-[90%] w-[1000px] md:ml-[-30px] sm:ml-[-300px] ml-[-100px] h-[220px] flex justify-start">
          <Image
            className="sm:block hidden"
            src="/images/pokemon-left.png"
            style={{ objectFit: "contain" }}
            width={380}
            height={380}
            alt="left"
          />
        </div>
        <div className="sm:w-[70%] sm:h-[90%] w-[1000px] md:mr-[-30px] sm:mr-[-300px] mr-[-100px] h-[220px] flex justify-end">
          <Image
            className="sm:block hidden"
            src="/images/pokemon-right.png"
            style={{ objectFit: "contain" }}
            width={380}
            height={380}
            alt="right"
          />
        </div>
        <div className="absolute">
          <Avatar imageUrl="/images/pokemon-banner-1.png" />
        </div>
      </div>
    </section>
  );
}

/* <DotLottieReact src="/lottie/ring.json" loop autoplay /> */
