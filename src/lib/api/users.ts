import { auth, userBase } from './base';
import { IMe, IUser } from '../types';

export const getMe = async (): Promise<IMe> => {
	const res = await auth.get(`${userBase}/me`);
	return res.data;
};

export const getUser = async (userId: string): Promise<IUser> => {
	if (!userId) throw new Error('userId is not defined.');
	const res = await auth.get(`${userBase}/${userId}`);
	return res.data;
};

export const updateUser = async (payload: Partial<IUser>): Promise<IUser> => {
	if (!payload) throw new Error('payload is not defined.');
	const res = await auth.put(`${userBase}/${payload._id}`, payload);
	return res.data;
};
