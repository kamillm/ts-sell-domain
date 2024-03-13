/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ek65wlrwd0szvdez.public.blob.vercel-storage.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "nft-cdn.alchemy.com",
        port: ""
      }
    ]
  }
};

export default nextConfig;
