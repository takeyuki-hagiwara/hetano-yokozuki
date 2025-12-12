import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// ↓ ここに ({ image }) を書くのが最大のポイントです
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		
		// ↓ ここを z.string() ではなく image() にします
		heroImage: image().optional(),
	}),
});

export const collections = { blog };