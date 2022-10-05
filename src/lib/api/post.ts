import { IPost } from '../types';
import { auth, postBase } from './base';

export const createPost = async (description: string): Promise<IPost> => {
	if (!description) throw Error('description is not defined.');
	const res = await auth.post(`${postBase}`, { description });
	return res.data;
};

export const getRandomPosts = async (): Promise<IPost[]> => {
	const res = await auth.get(`${postBase}/explore/random`);
	return res.data;
};

export const getUserPosts = async (userId: string): Promise<IPost[]> => {
	if (!userId) throw Error('userId is not defined.');
	const res = await auth.get(`${postBase}/user/${userId}`);
	return res.data;
};

export const getTimeline = async (userId: string): Promise<IPost[]> => {
	if (!userId) throw Error('userId is not defined.');
	const res = await auth.get(`${postBase}/${userId}/feed`);
	return res.data;
};

export const likePost = async (postId: string) => {
	if (!postId) throw Error('postId is not defined.');
	const res = await auth.put(`${postBase}/${postId}/like`);
	return res.data;
};

export const searchPosts = async (query: string): Promise<IPost[]> => {
	if (!query) throw new Error('query is not defined.');
	const res = await auth.get(`${postBase}/search${query}`);
	return res.data;
};
