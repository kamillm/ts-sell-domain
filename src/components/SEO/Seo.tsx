import React from "react";
// next
import Head from "next/head";

// type
import { SeoProps } from "./types";

// -----------------------------------------------------

const SEO: React.FC<SeoProps> = ({ title, description, canonical, keywords, image }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width,maximum-scale=5,initial-scale=1" />
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content={description} />
    <meta property="og:site_name" content="znsconnect" />
    <meta property="og:url" content={`${canonical || "znsconnect.io"}`} />
    {image ? <meta property="og:image" content={`${image}`} /> : ""}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content={`${canonical || "znsconnect.io"}`} />
    {image && <meta name="twitter:image" content={`${image}`} />}
    {canonical && <link rel="canonical" href={`${canonical}`} />}
    <link rel="publisher" href="www.znsconnect.io" />
    <meta name="robots" content="index,follow" />
    <meta name="GOOGLEBOT" content="index,follow" />
  </Head>
);

export default SEO;
