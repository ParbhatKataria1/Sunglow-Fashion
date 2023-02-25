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
      },
      {
        protocol:'https',
        hostname:'th.bing.com',
        port:'',
        pathname:'**',
      }
    ]
  },
  env:{
    GOOGLE_CLIENT_ID:'720176448326-cg3gms9ovmnt2roac9um424t87nhdk87.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET:'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'
  }
}

module.exports = nextConfig
