/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['dummyjson.com', 'i.dummyjson.com', 'cdn.dummyjson.com'],
        dangerouslyAllowSVG: true,
    },
}

module.exports = nextConfig
