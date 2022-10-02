import postPic1 from '../assets/postpic1.jpg';
import postPic2 from '../assets/postpic2.jpg';
import postPic3 from '../assets/postpic3.jpg';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.jpg';

export const posts = [
	{
		img: postPic1,
		name: 'Tzuyu',
		desc: 'Happy New Year all friends! #2023',
		likes: 2300,
		liked: true
	},
	{
		img: postPic2,
		name: 'Maryam',
		desc: 'Party time :)',
		likes: 2300,
		liked: false
	},
	{
		img: postPic3,
		name: 'Salena Gomez',
		desc: 'At Archery Festival',
		likes: 800,
		liked: false
	}
];

export const followers = [
	{ name: 'Andrew Thomas', username: 'AndrewThomas', img: img1 },
	{ name: 'Hulk Buster', username: 'HulkBuster', img: img2 },
	{ name: 'Thor', username: 'ThunderMaster', img: img3 },
	{ name: 'Natasha', username: 'Natasha', img: img4 }
];

export const trending = [
	{
		name: 'Cowboys',
		shares: 97
	},
	{
		name: 'Real Madrid',
		shares: 80.5
	},
	{
		name: 'LeBron',
		shares: 75.5
	},
	{
		name: 'Lakers',
		shares: 71.9
	},
	{
		name: 'Hacktoberfest',
		shares: 20
	}
];
