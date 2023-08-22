/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
    experimental: {
        mdxRs: true,
    },
    output: "export",
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
