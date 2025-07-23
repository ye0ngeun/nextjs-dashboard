import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental' // Adopt PPR for specific routes
  }
};

export default nextConfig;
