import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog" }),
    schema: z.object({
        isDraft: z.boolean().default(false).optional(),
        title: z.string(),
        publishedDate: z.coerce.date(),
        description: z.string(),
    }),
});

export const collections = { blog };