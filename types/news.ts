import { z } from "zod";

export const NewsSchema = z.object({
    id: z.string(),
    title: z.string(),
    created_at: z.string(),
    content_url: z.string(),
});

export const NewsContentSchema = NewsSchema.extend({
    content: z.string(),
}).omit({
    content_url: true,
});

export type News = z.infer<typeof NewsSchema>;

export const NewsListSchema = z.array(NewsSchema);