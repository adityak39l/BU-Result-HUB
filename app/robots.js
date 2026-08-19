export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://bu-btech-resulthub.vercel.app/sitemap.xml',
  };
}
