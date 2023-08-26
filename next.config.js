const isProd = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
    experimental: {
        mdxRs: true,
    },
    // For S3
    output: "export",
    trailingSlash: true,
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
