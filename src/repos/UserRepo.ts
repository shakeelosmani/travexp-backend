import { injectable } from "inversify";
import { dbConfig } from "../configs/db-config";
import { User } from "../models/UserModel";
import { MySqlQueryClient } from "../utils/db-utils/MySqlQueryClient";
import { GetUserByUidQuery } from "./queries/UserQuery";

export interface UserRepositoy {
	getUserByUid(uid: string): Promise<User | undefined>;
}

export const UserRepositorySymbol = Symbol.for("DefaultUserRepository");

@injectable()
export class DefaultUserRepository extends MySqlQueryClient implements UserRepositoy {

	private getUserByUidQuery: string;

	constructor() {
		super(dbConfig);
		this.getUserByUidQuery = GetUserByUidQuery;
	}

	async getUserByUid(uid: string): Promise<User | undefined> {
		const values = [uid];
		const results = await this.query(this.getUserByUidQuery, values);
		return results.length > 0 ? results[0] : undefined;
	}
}