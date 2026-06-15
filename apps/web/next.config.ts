import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui", "@workspace/ui-web"],
  turbopack: {
    resolveExtensions: [".tsx", ".ts", ".jsx", ".js"],
  },
}

export default nextConfig
