import { Static, Type } from '@sinclair/typebox';

export const UserResponse = Type.Object({
	email: Type.String(),
	uid: Type.String(),
	emailVerified: Type.Boolean(),
	firstName: Type.Optional(Type.String()),
	lastName: Type.Optional(Type.String()),
	avatar: Type.Optional(Type.String()),
	phoneNumber: Type.Optional(Type.String()),
});

export type UserResponse = Static<typeof UserResponse>;

