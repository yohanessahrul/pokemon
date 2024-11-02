import Banner from "@/components/banner";
import HeadHtml from "@/components/head";
import Layout from "@/components/layout";
import Nav from "@/components/nav";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <HeadHtml title="Homepage" description="Ini adalah homepage" />
      <Layout>
        <main>
          <Banner />
          <Nav />
          <section className="bg-[white] mt-6">
            <h1 className={`text-3xl ${bebas.className} text-[orange]`}>
              Homepage
            </h1>
            <p className="text-[orange]">Ini adalah halaman homepage</p>
          </section>
        </main>
      </Layout>
    </>
  );
}
