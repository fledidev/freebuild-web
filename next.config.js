/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "mc-heads.net",
                port: '',
                pathname: "/avatar/**"
            }
        ]
    }
}

module.exports = nextConfig
