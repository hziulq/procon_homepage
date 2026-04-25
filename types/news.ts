import { z } from "zod";

export const NewsSchema = z.object({
    id: z.string(),
    title: z.string(),
    created_at: z.string(),
    content_url: z.string(),
});

export type News = z.infer<typeof NewsSchema>;

export const NewsListSchema = z.array(NewsSchema);