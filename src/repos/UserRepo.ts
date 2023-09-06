import { injectable } from "inversify";
import { dbConfig } from "../configs/db-config";
import { User } from "../models/UserModel";
import { MySqlQueryClient } from "../utils/db-utils/MySqlQueryClient";
import { GetUserByEmailQuery, GetUserByUidQuery, SaveUserQuery } from "./queries/UserQuery";

export interface UserRepositoy {
	getUserByUid(uid: string): Promise<User | undefined>;
	getUserByEmail(email: string): Promise<User | undefined>;
	saveUser(user: User): Promise<User | undefined>;
}

export const UserRepositorySymbol = Symbol.for("DefaultUserRepository");

@injectable()
export class DefaultUserRepository extends MySqlQueryClient implements UserRepositoy {

	private getUserByUidQuery: string;
	private getUserByEmailQuery: string;
	private saveUserQuery: string;

	constructor() {
		super(dbConfig);
		this.getUserByUidQuery = GetUserByUidQuery;
		this.getUserByEmailQuery = GetUserByEmailQuery;
		this.saveUserQuery = SaveUserQuery;
	}

	async getUserByUid(uid: string): Promise<User | undefined> {
		const values = [uid];
		const results = await this.query(this.getUserByUidQuery, values);
		return results.length > 0 ? results[0] : undefined;
	}

	async getUserByEmail(email: string): Promise<User | undefined> {
		const values = [email];
		const results = await this.query(this.getUserByEmailQuery, values);
		return results.length > 0 ? results[0] : undefined;
	}

	async saveUser(user: User): Promise<User> {
		const values = [
			user.email,
			user.firstName,
			user.lastName,
			user.uid,
			user.avatar,
			user.phoneNumber,
			user.emailVerified
		];
		await this.query(this.saveUserQuery, values);
		const results = await this.query(this.getUserByUidQuery, [user.uid])
		return results.length > 0 ? results[0] : undefined;
	}
}