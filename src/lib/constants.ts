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

export const chats = [
	{
		_id: '63371990ba70ebc3ad26c670',
		creatorId: '633653b821bfe1c9ee7f5e1d',
		members: ['633653b821bfe1c9ee7f5e1d', '6336510f3f5928acd9f6cafb'],
		createdAt: '2022-09-30T16:30:08.447Z',
		updatedAt: '2022-09-30T16:30:08.447Z',
		__v: 0
	},
	{
		_id: '63371c8c072de029994a42d6',
		creatorId: '6336510f3f5928acd9f6cafb',
		members: ['6336510f3f5928acd9f6cafb', '633653b821bfe1c9ee7f5e1d'],
		createdAt: '2022-09-30T16:42:52.100Z',
		updatedAt: '2022-09-30T16:42:52.100Z',
		__v: 0
	}
];
