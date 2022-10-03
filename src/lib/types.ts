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

export interface IUser {
	_id: string;
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
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

/* eslint-disable no-unused-vars */
export enum QueryKeys {
	ME = 'Me',
	USER = 'User'
}
