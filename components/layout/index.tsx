import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <div className="bg-secondary lg:px-[10%] md:px-[10%] sm:px-[16px]">
        {children}
      </div>
      <Footer />
    </>
  );
}
