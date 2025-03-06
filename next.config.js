/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://qgd.agency/login",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig