import axios from 'axios';

const base = import.meta.env.VITE_PUBLIC_API_ENDPOINT;

export const userBase = `${base}/users`;
export const authBase = `${base}/auth`;
export const postBase = `${base}/posts`;
export const chatBase = `${base}/chats`;
export const messageBase = `${base}/messages`;

export const auth = axios.create({
	baseURL: base,
	withCredentials: true
});
