import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    // Required: the build fails if either is missing.
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** The tag on blog cards. A fixed set, so a typo fails the build instead of making a fifth spelling of "dermatology". */
    category: z.enum(['Skin', 'Diabetes', 'Orthopaedics', 'Dental']),
  }),
});

export const collections = { blog };
