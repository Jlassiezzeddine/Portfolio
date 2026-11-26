import { site } from "@/shared/data/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/privacy`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
