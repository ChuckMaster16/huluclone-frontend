/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:['res.cloudinary.com', 'image.tmdb.org'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
