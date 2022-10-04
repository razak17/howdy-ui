import { z } from 'zod';
import { auth, postBase } from './base';

const CreatePostSchema = z.object({
	description: z.string(),
	image: z.string().optional()
});

export type CreatePostResponseType = z.infer<typeof CreatePostSchema>;

export const createPost = async (description: string): Promise<CreatePostResponseType> => {
	if (!description) throw Error('description is not defined.');
	const res = await auth.post(`${postBase}`, { description });
	return res.data;
};
