import HeadHtml from "@/components/head";
import Layout from "@/components/layout";
import React from "react";
import Avatar from "@/components/avatar";
import { Climate_Crisis, Grandstander } from "next/font/google";

const climateCrisis = Climate_Crisis({ subsets: ["latin"], weight: ["400"] });
const grandStander = Grandstander({ subsets: ["latin"], weight: ["400"] });

const DetailPage = () => {
  return (
    <>
      <HeadHtml title="Detail Page" description="Ini adalah halaman detail" />
      <Layout>
        <main>
          <section className="w-full">
            <div className="flex lg:flex-row sm:flex-col flex-col items-center">
              <div className="lg:w-[400px] sm:w-full">
                <Avatar imageUrl="/images/pokemon-banner-1.png" />
              </div>
              <div className="lg:w-[100%-400px] sm:w-full w-full">
                <h1
                  className={`text-[40px] text-[#fff200] ${climateCrisis.className} shadow-sm mb-6 lg:text-left md:text-center sm:text-center text-center`}
                >
                  Bullbasaur
                </h1>
                <p
                  className={`text-2xl text-[#f5ebb7] ${grandStander.className} shadow-sm lg:text-left md:text-center sm:text-center text-center`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, magni ipsa est hic corrupti ratione inventore
                </p>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default DetailPage;
