import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  turbopack: {
    resolveExtensions: [".tsx", ".ts", ".jsx", ".js"],
  },
}

export default nextConfig
