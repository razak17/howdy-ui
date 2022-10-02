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
	isAdmin: boolean;
	followers: string[];
	following: string[];
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

/* eslint-disable no-unused-vars */
export enum QueryKeys {
	ME = 'Me'
}
