import type { MetadataRoute } from "next";
import { profile } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: profile.siteUrl, lastModified: new Date() }];
}
