import axios from 'axios';
import { ILogin, IRegister } from '../types';

const base = import.meta.env.VITE_PUBLIC_API_ENDPOINT;

const userBase = `${base}/users`;
const authBase = `${base}/auth`;

const auth = axios.create({
	baseURL: base,
	withCredentials: true
});

export const register = async (payload: IRegister) => {
	const res = await axios.post(`${userBase}/register`, payload);
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
