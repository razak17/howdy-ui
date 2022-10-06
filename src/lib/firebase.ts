import { initializeApp } from 'firebase/app';

const firebaseApiKey = import.meta.env.VITE_FIREBASE_KEY;

const firebaseConfig = {
	apiKey: firebaseApiKey,
	authDomain: 'howwdy-2f2ee.firebaseapp.com',
	projectId: 'howwdy-2f2ee',
	storageBucket: 'howwdy-2f2ee.appspot.com',
	messagingSenderId: '839173597699',
	appId: '1:839173597699:web:c4a88244a2646c6243fc36'
};

const app = initializeApp(firebaseConfig);

export default app;
