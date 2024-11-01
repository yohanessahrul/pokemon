import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <div
        className="
        w-full
        bg-secondary
        bg-gradient-to-b from-primary to-secondary
        "
      >
        <div
          className="p-6  
        m-auto
        lg:max-w-[990px]
        md:max-w-[760px]
        sm:max-w-[600px]
        "
        >
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
