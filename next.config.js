/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    // Força o webpack a tratar imagens como recursos estáticos
    config.module.rules.push({
      test: /\.(jpg|jpeg|png|gif|svg)$/i,
      type: 'asset/resource',
    });

    return config;
  },
};

module.exports = nextConfig;
