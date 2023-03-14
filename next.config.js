/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
}
// next.config.js
const withVideos = require('next-videos')
module.exports = {
  images: {
    domains: [
      'images.unsplash.com', 'openweathermap.org'
    ],
  },
};
// module.exports = nextConfig
