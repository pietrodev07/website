import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [""].map((route) => ({
    url: `https://pietrodev07.vercel.app${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
