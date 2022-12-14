import { auth, userBase } from './base';
import { IUser } from '../types';
import { z } from 'zod';

const MeSchema = z.object({
	_id: z.string(),
	username: z.string(),
	email: z.string(),
	isAdmin: z.boolean()
});

export type MeResponseType = z.infer<typeof MeSchema>;

export const getMe = async (): Promise<IUser> => {
	const res = await auth.get(`${userBase}/me`);
	return res.data;
};

export const getUser = async (userId: string): Promise<IUser> => {
	if (!userId) throw new Error('userId is not defined.');
	const res = await auth.get(`${userBase}/${userId}`);
	return res.data;
};

export const getUsers = async (): Promise<IUser[]> => {
	const res = await auth.get(userBase);
	return res.data;
};

export const updateUser = async (payload: Partial<IUser>): Promise<IUser> => {
	if (!payload) throw new Error('payload is not defined.');
	const res = await auth.put(`${userBase}/${payload._id}`, payload);
	return res.data;
};

export const followUser = async (userId: string) => {
	if (!userId) throw new Error('userId is not defined.');
	const res = await auth.put(`${userBase}/${userId}/follow`);
	return res.data;
};

export const unfollowUser = async (userId: string) => {
	if (!userId) throw new Error('userId is not defined.');
	const res = await auth.put(`${userBase}/${userId}/unfollow`);
	return res.data;
};
