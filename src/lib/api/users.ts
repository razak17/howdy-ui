import { auth, userBase } from './base';
import { IUser } from '../types';

export const getMe = async (): Promise<IUser> => {
	const res = await auth.get(`${userBase}/me`);
	return res.data;
};
