import Head from "next/head";
import React from "react";

interface HeadTypes {
  title: string;
  description: string;
}

export default function HeadHtml({ title, description }: HeadTypes) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
