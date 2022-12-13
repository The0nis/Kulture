/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

{
  test: /\.(sass|less|css)$/,
  use: ["style-loader", "css-loader", 'sass-loader'],
}

module.exports = nextConfig
