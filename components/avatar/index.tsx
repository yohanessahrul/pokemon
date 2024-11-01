import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

interface AvatarTypes {
  imageUrl: string;
}

const Avatar = ({ imageUrl }: AvatarTypes) => {
  return (
    <>
      <div
        className="
        w-full
          relative
          flex
          justify-center
          h-[300px]
          items-center
          overflow-hidden
          "
      >
        <div className="relative z-0 w-full">
          <DotLottieReact
            src="/lottie/ring.json"
            loop
            autoplay
            className="lg:h-[500px] md:h-[400px] sm:h-[400px] ml-[-20px]"
          />
        </div>
        <div className="absolute z-10">
          <Image
            src={imageUrl}
            alt="banner"
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </>
  );
};

export default Avatar;
