/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:['res.cloudinary.com', 'image.tmdb.org'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
