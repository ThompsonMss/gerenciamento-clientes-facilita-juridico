import { Client } from '../../../domain/client/Client'
import type { InterfaceClient } from '../../../domain/client/Client'
import type {
    ClientRepository,
    InterfaceFindAllClients,
} from '../../../domain/client/ClientRepository'
import { BaseConnection } from './BaseConnection'

export class ClientRepositoryPGSQL extends BaseConnection implements ClientRepository {
    public async save(data: Client): Promise<Client> {
        if (data.getId() !== undefined) {
            return await this.update(data)
        }

        return await this.insert(data)
    }

    async insert(data: Client): Promise<Client> {
        const sql = `INSERT INTO clients (name, email, dddphone, phone) VALUES
         ($1, $2, $3, $4) RETURNING *`

        const [result]: InterfaceClient[] = await this.conn.query(sql, [
            data.getName(),
            data.getEmail(),
            data.getDddPhone(),
            data.getPhone(),
        ])

        return new Client(result)
    }

    async update(data: Client): Promise<Client> {
        const sql = `UPDATE clients SET 
          name = $1,
          email = $2,
          dddphone = $3,
          phone = $4,
          updatedat = $5,
          deletedat = $6
        WHERE 
          id = $7
        RETURNING *`

        const [result]: InterfaceClient[] = await this.conn.query(sql, [
            data.getName(),
            data.getEmail(),
            data.getDddPhone(),
            data.getPhone(),
            data.getUpdatedat(),
            data.getDeletedat(),
            String(data.getId()),
        ])

        return new Client(result)
    }

    async findById(id: number): Promise<Client | null> {
        const sql = `SELECT * FROM clients WHERE id = $1 AND deletedat is null`

        const result: InterfaceClient[] = await this.conn.query(sql, [String(id)])

        if (result.length > 0) {
            return new Client(result[0])
        }

        return null
    }

    async findAll(filters?: InterfaceFindAllClients[], page?: number): Promise<Client[]> {
        let sql = `SELECT * FROM clients WHERE deletedat is null`

        if (filters !== undefined && filters?.length > 0) {
            sql += ` AND (`
        }

        filters?.forEach((filter, index) => {
            sql += `${filter.column} ${filter.operator} ${filter.value}`

            if (filters.length !== index + 1) {
                sql += ` OR `
            }
        })

        if (filters !== undefined && filters?.length > 0) {
            sql += `)`
        }

        sql += ` ORDER BY id`

        // Tratando a paginação.
        if (page !== undefined) {
            sql += ` LIMIT 20 OFFSET ${page <= 1 ? 0 : (page - 1) * 20}`
        }

        const result: InterfaceClient[] = await this.conn.query(sql)
        return result.map((item) => new Client(item))
    }

    async count(filters?: InterfaceFindAllClients[] | undefined): Promise<number> {
        let sql = `SELECT COUNT(*) FROM clients WHERE deletedat is null`

        if (filters !== undefined && filters?.length > 0) {
            sql += ` AND (`
        }

        filters?.forEach((filter, index) => {
            sql += `${filter.column} ${filter.operator} ${filter.value}`

            if (filters.length !== index + 1) {
                sql += ` OR `
            }
        })

        if (filters !== undefined && filters?.length > 0) {
            sql += `)`
        }

        const [result]: Array<{ count: string }> = await this.conn.query(sql)
        return parseInt(result.count)
    }
}
