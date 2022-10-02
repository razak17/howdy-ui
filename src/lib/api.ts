import axios from 'axios';

const base = import.meta.env.VITE_PUBLIC_API_ENDPOINT;

const postBase = `${base}/posts`;
const chatBase = `${base}/chats`;
const messageBase = `${base}/messages`;
