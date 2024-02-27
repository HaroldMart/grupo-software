/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;


// next.config.js
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}