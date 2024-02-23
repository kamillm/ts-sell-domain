import type { AppProps } from "next/app";
import { Poppins, Space_Mono, Space_Grotesk } from "next/font/google";

import Layout from "@/layouts";

import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-space-mono"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk"
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`relative ${poppins.variable} ${spaceMono.variable} ${spaceGrotesk.variable} font-poppins`}>
      <div className="absolute -z-10 inset-0 bg-decoration bg-cover bg-no-repeat mix-blend-multiply" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
