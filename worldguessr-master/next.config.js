/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/guess',    // Чтобы работали картинки и ссылки
    trailingSlash: true,   // Обязательно для работы подпапок
    images: {
        unoptimized: true,
    }
};

export default nextConfig;