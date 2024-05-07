const nextConfig = {
  // Enable React strict mode for improved error handling
  reactStrictMode: true,

  // Enable SWC minification for improved performance
  swcMinify: false,

  // Disable font optimization for improved performance
  optimizeFonts: false,

  // Image optimization configuration
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1300, 1500, 1700],
    domains: [],
    path: '/_next/image',
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

// Configuration object tells the next-pwa plugin
const withPWA = require('next-pwa')({
  // Destination directory for the PWA files
  dest: 'public',

  // Disable PWA in development mode
  disable: process.env.NODE_ENV === 'development',

  // Register the PWA service worker
  register: true,

  // Skip waiting for service worker activation
  skipWaiting: true,
});

// Export the combined configuration for Next.js with PWA support
module.exports = withPWA(nextConfig);
