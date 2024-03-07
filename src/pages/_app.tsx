import type { AppProps } from "next/app";
import { Poppins, Space_Mono, Space_Grotesk } from "next/font/google";
import NProgress from "nprogress";
import { Router } from "next/router";
import Layout from "@/layouts";

import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import "@rainbow-me/rainbowkit/styles.css";
import { darkTheme, getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { polygonMumbai, x1Testnet, berachainTestnet, opBNB } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { StorageProvider } from "@/contexts";
import FavoriteProvider from "@/contexts/FavoriteProvider";

const config = getDefaultConfig({
  appName: "ZNS Connect",
  projectId: "YOUR_PROJECT_ID",
  chains: [polygonMumbai, x1Testnet, berachainTestnet, opBNB],
  ssr: true // If your dApp uses server side rendering (SSR)
});

export const queryClient = new QueryClient();

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

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <div className={`relative ${poppins.variable} ${spaceMono.variable} ${spaceGrotesk.variable} font-poppins`}>
      <div className="absolute -z-10 inset-0 bg-decoration bg-cover bg-no-repeat mix-blend-multiply" />
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={darkTheme()}>
            <StorageProvider>
              <FavoriteProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </FavoriteProvider>
            </StorageProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}
