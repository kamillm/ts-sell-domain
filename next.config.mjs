/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ek65wlrwd0szvdez.public.blob.vercel-storage.com",
        port: ""
      }
    ]
  }
};

export default nextConfig;
