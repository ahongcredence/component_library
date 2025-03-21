import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // Enable any other Next.js configurations here
};

export default nextConfig;
