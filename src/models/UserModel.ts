export interface User {
	email: string;
	uid: string;
	emailVerified: boolean;
	firstName?: string;
	lastName?: string;
	avatar?: string;
	phoneNumber?: string;
}