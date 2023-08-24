/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "img.freepik.com"
      },
      {
        protocol: "https",
        hostname: "www.shutterstock.com"
      }
    ]
  }
}

module.exports = nextConfig
