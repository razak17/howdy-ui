import axios from 'axios';
import { auth, authBase } from './base';
import { ILogin, IRegister } from '../types';

export const register = async (payload: IRegister) => {
	const res = await axios.post(`${authBase}/register`, payload);
	return res.data;
};

export const login = async (payload: ILogin) => {
	const res = await auth.post(`${authBase}/login`, payload);
	return res.data;
};

export const logout = async () => {
	const res = await auth.post(`${authBase}/logout`);
	return res.data;
};
