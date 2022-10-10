export interface IRegister {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export interface ILogin {
	email: string;
	password: string;
}

interface MongoDocument {
	_id: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export interface IUser extends MongoDocument {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	about: string;
	isAdmin: boolean;
	followers: string[];
	following: string[];
	profilePicture: string;
	coverPicture: string;
	city: string;
	country: string;
	relationshipStatus: string;
	workplace: string;
}

export interface IPost extends MongoDocument {
	userId: string;
	description: string;
	image: string;
	likes: string[];
	dislikes: string[];
}

export interface INewPost {
	description: string;
	image?: string;
}

/* eslint-disable no-unused-vars */
export enum QueryKeys {
	ME = 'Me',
	CURRENT_USER = 'CurrentUser',
	USER = 'User',
	USERS = 'Users',
	POSTS = 'Posts',
	POST = 'Post',
	USER_PROFILE = 'UserProfile',
	USER_POSTS = 'UserPosts',
	SEARCH = 'Search'
}

export type TLocation = 'home' | 'profile' | 'search' | 'modal';
