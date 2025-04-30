// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'prod-files-secure.s3.us-west-2.amazonaws.com', // ←これ追加！
    ],
  },
};

