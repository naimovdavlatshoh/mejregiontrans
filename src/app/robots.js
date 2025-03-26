export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: "https://mejregiontrans.vercel.app/sitemap.xml",
    };
}
