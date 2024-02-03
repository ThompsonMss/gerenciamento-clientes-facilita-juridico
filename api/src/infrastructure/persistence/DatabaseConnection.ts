import { Pool } from 'pg'

class DatabaseConnection {
    private readonly pool: Pool

    constructor() {
        this.pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
            port: parseInt(`${process.env.DB_PORT}`),
        })
    }

    async query<T>(command: string, params?: Array<string | null | number>): Promise<T[]> {
        const result = await this.pool.query(command, params)
        return result.rows
    }
}

export default new DatabaseConnection()
