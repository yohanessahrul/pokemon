import React from "react";
import HeadHtml from "@/components/head";
import Layout from "@/components/layout";

import { Bebas_Neue } from "next/font/google";
import Nav from "@/components/nav";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function Search() {
  return (
    <>
      <HeadHtml title="Search" description="Ini adalah search page" />
      <Layout>
        <main>
          <Nav />
          <h1 className={`text-3xl ${bebas.className} text-[orange]`}>
            Search page
          </h1>
          <p className="text-[orange]">Ini adalah halaman search</p>
        </main>
      </Layout>
    </>
  );
}
