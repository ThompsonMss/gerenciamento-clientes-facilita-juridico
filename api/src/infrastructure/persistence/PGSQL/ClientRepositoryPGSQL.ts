import { Client } from '../../../domain/client/Client'
import type { InterfaceClient } from '../../../domain/client/Client'
import type { ClientRepository } from '../../../domain/client/ClientRepository'
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

    async findAll(): Promise<Client[]> {
        const sql = `SELECT * FROM clients WHERE deletedat is null`

        const result: InterfaceClient[] = await this.conn.query(sql)

        return result.map((item) => new Client(item))
    }
}
