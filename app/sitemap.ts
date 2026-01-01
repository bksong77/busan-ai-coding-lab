import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://busan-ai-coding-lab.vercel.app";

    return [
        { url: `${base}/`, lastModified: new Date() },
        { url: `${base}/students` },
        { url: `${base}/adults` },
        { url: `${base}/curriculum` },
        { url: `${base}/cases` },
        { url: `${base}/reviews` },
        { url: `${base}/contact` },
    ];
}
