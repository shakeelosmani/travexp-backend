import { inject, injectable } from "inversify";
import { UserResponse } from "../models/view-models/UserViewModel";
import { UserRepositorySymbol, UserRepositoy } from "../repos/UserRepo";

export interface UserService {
	getUserByUid(uid: string): Promise<UserResponse | undefined>; 
}

export const UserServiceSymbol = Symbol.for("DefaultUserService");

@injectable()
export class DefaultUserService implements UserService {
	constructor(@inject(UserRepositorySymbol) private userRepository: UserRepositoy){}

	async getUserByUid(uid: string): Promise<UserResponse | undefined> {
		const user = await this.userRepository.getUserByUid(uid);
		if (user) {
			return {
				email: user.email,
				uid: user.uid,
				emailVerified: user.emailVerified,
				firstName: user.firstName,
				lastName: user.lastName,
				avatar: user.avatar,
				phoneNumber: user.phoneNumber
			};
		}
		return undefined;
	}
}