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
      },
      {
        protocol:'https',
        hostname:'serving.photos.photobox.com',
        port:'',
        pathname:'**',
      }
    ]
  }
}

module.exports = nextConfig
