/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: "lh3.googleusercontent.com"
    }]
  }
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://be.forum.yasapintar.my.id/:path*'
  //     }
  //   ]
  // }
};

module.exports = nextConfig;
