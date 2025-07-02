import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { request, gql } from 'graphql-request';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Your GraphQL endpoint
const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_URL;

// GraphQL query
const query = gql`
  query GetAllBlogs {
    getAllBlogs {
      Blogslug
      Updated_at
    }
  }
`;

const slugify = (str) =>
  str.toLowerCase().trim().replace(/ /g, '-').replace(/[^\w-]+/g, '');

const getCurrentDateISO = () => new Date().toISOString();

const staticRoutes = [
  { path: '/', lastmod: getCurrentDateISO(), changefreq: 'daily', priority: 1.0 },
  { path: '/e-commerce', lastmod: getCurrentDateISO(), changefreq: 'daily', priority: 1.0 },
  { path: '/whyTryzen', lastmod: getCurrentDateISO(), changefreq: 'daily', priority: 1.0 },
  { path: '/restaurant', lastmod: getCurrentDateISO(), changefreq: 'daily', priority: 1.0 },
];

function generateSitemapXML(baseUrl, routes) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

async function generateSitemap() {
  try {
    const baseUrl = 'https://tryzensolution.com';

    // Fetch blog slugs
    const data = await request(GRAPHQL_ENDPOINT, query);
    const blogs = data.getAllBlogs;

    const blogRoutes = blogs.map((blog) => ({
      path: `/blog/${slugify(blog.Blogslug)}`,
      lastmod: new Date(Number(blog.Updated_at)).toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    }));

    const routes = [...staticRoutes, ...blogRoutes];
    const sitemapXML = generateSitemapXML(baseUrl, routes);

    const outputPath = path.resolve(__dirname, 'public/sitemap.xml');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, sitemapXML, 'utf8');

    console.log(`✅ Sitemap generated at: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
  }
}

generateSitemap();
