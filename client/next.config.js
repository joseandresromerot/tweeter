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
      },
      {
        protocol: "https",
        hostname: "pe-images.s3.amazonaws.com"
      },
      {
        protocol: "https",
        hostname: "deerassociation.com"
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com"
      },
      {
        protocol: "https",
        hostname: "www.adorama.com"
      }
    ]
  }
}

module.exports = nextConfig
