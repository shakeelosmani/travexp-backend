import { MySqlQueryClientOptions } from "../utils/db-utils/MySqlQueryClient";

export const dbConfig: MySqlQueryClientOptions = {
  host: String(process.env.DBHOST),
  user: String(process.env.USER),
  password: String(process.env.PASSWORD),
  database: String(process.env.DATABASE),
};
