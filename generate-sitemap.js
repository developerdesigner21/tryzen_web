const path = require('path');
const fs = require('fs');

const getCurrentDateISO = () => {
    const now = new Date();
    return now.toISOString(); // e.g., "2025-01-02T07:29:40.221Z"
};

// Define the routes with metadata
const routes = [
    { path: '/', lastmod: getCurrentDateISO(), changefreq: 'daily', priority: 1.0 },
    { path: '/e-commerce', lastmod: getCurrentDateISO(), changefreq: 'daily', priority: 1.0 },
    { path: '/whyTryzen', lastmod: getCurrentDateISO(), changefreq: 'daily', priority: 1.0 },
    { path: '/restaurant', lastmod: getCurrentDateISO(), changefreq: 'daily', priority: 1.0 },
];

// Function to generate the XML content
function generateSitemapXML(baseUrl, routes) {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">';
    const urlsetClose = '</urlset>';

    const urls = routes.map((route) => `
        <url>
            <loc>${baseUrl}${route.path}</loc>
            <lastmod>${route.lastmod}</lastmod>
            <changefreq>${route.changefreq}</changefreq>
            <priority>${route.priority}</priority>
        </url>`).join('\n');

    return `${xmlHeader}\n${urlsetOpen}\n${urls}\n${urlsetClose}`;
}

function generateSitemap() {
    const baseUrl = 'https://tryzensolution.com'; // Replace with your domain
    const sitemapXML = generateSitemapXML(baseUrl, routes);
    const outputPath = path.resolve(__dirname, 'public/sitemap.xml');

    // Ensure the public directory exists
    if (!fs.existsSync(path.resolve(__dirname, 'public'))) {
        fs.mkdirSync(path.resolve(__dirname, 'public'));
    }

    // Write the sitemap to the file
    fs.writeFileSync(outputPath, sitemapXML, 'utf8');
    console.log(`Sitemap generated at: ${outputPath}`);
}

generateSitemap();