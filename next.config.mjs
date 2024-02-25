/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost", "placehold.co"], // Menggunakan 'domains' untuk konfigurasi localhost
  },
};

export default nextConfig;
