// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     // domains: ['*'],
//     domains: ["example.com", "anotherdomain.com"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "avatars.githubusercontent.com",
//         port: "",
//         pathname: "/u/**",
//       },
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "example.com",
      "anotherdomain.com",
      "lh3.googleusercontent.com", // Add Google user content domain
      "avatars.githubusercontent.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Add pattern for Google user content
        port: "",
        pathname: "/a/**",
      },
      // Add other patterns as needed
    ],
  },
};

export default nextConfig;
