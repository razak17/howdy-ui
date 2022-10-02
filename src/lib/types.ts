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

/* eslint-disable no-unused-vars */
export enum QueryKeys {
	ME = 'Me'
}
