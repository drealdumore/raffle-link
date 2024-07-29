/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['*'],
    domains: ["example.com", "anotherdomain.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
};

export default nextConfig;
