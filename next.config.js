/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        require('rehype-pretty-code'),
        /** @type {Partial<import("rehype-pretty-code").Options>} */
        ({
          theme: "github-light",
          getHighlighter: require('shiki').getHighlighter,
        }),
      ],
    ],
  },
});
module.exports = withMDX(nextConfig);