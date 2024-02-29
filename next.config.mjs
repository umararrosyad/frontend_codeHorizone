/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  dangerouslyAllowSVG: true,
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  images: {
    domains: ["localhost", "placehold.co"], // Menggunakan 'domains' untuk konfigurasi localhost
  },
};

export default nextConfig;
