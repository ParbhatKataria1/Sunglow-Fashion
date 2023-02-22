/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'images.urbndata.com',
        port:'',
        pathname:'**',
      },
      {
        protocol:'https',
        hostname:'images.ctfassets.net',
        port:'',
        pathname:'**',
      }
    ]
  }
}

module.exports = nextConfig
