/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // Ignore linting during build
  },
  reactStrictMode: false,  // Disable React Strict Mode to avoid unnecessary warnings (use carefully)
   
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          },
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org', // <-- Add this line
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
        ],
      },
};

export default nextConfig;
