/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  image: {
    domains: ['https://*.netlify.app', 'https://*.vercel.app'],
},
}

module.exports = nextConfig
