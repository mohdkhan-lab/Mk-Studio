/** @type {import('next').NextConfig} */
const isStatic = process.env.GITHUB_ACTIONS || process.env.STATIC_EXPORT || false;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_ACTIONS ? "/Mk-Studio" : "");

const nextConfig = {
  ...(isStatic ? { output: "export" } : {}),
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
};

export default nextConfig;
