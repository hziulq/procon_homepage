import { z } from "zod";

export const ArticlesSchema = z.object({
    id: z.string(),
    title: z.string(),
    created_at: z.string(),
    content_url: z.string(),
    genre: z.string(),
});

export const ArticlesContentSchema = ArticlesSchema.extend({
    content: z.string(),
}).omit({
    content_url: true,
});

export const AboutContentSchema = z.object({
    content: z.string(),
})

export type Articles = z.infer<typeof ArticlesSchema>;

export const ArticlesListSchema = z.array(ArticlesSchema);