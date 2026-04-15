import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactCompiler: true,
  basePath: "/cafe-loaded",
  assetPrefix: "/cafe-loaded",
};

export default nextConfig;
