import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // Favicons and all public assets remain crawlable for Googlebot.
      allow: "/",
    },
    sitemap: "https://www.mahagujaratpipe.in/sitemap.xml",
  };
}
