import { createPool, Pool } from "promise-mysql";

export interface MySqlQueryClientOptions {
  host: string;
  user: string;
  password: string;
  database: string;
  connectionLimit?: number;
}

export interface MySqlQueryClient {
  query(sql: string, values?: any): Promise<any>;
  close(): Promise<void>;
}

export class MySqlQueryClient implements MySqlQueryClient {
  private pool: Pool;
  constructor(options: MySqlQueryClientOptions) {
		console.log(options);
    this.pool = createPool(options);
  }
  async query(sql: string, values?: any): Promise<any> {
		const pool = await this.pool;
    const connection = await pool.getConnection();
    try {
      const results = await connection.query(sql, values);
      return results;
    } finally {
      connection.release();
    }
  }
  async close(): Promise<void> {
    await this.pool.end();
  }
}
