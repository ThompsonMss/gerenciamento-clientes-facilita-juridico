import type { Client } from '../../domain/client/Client'
import type {
    ClientRepository,
    InterfaceFindAllClients,
} from '../../domain/client/ClientRepository'

export class ClientRepositoryPGSQL implements ClientRepository {
    public clients: Client[]

    constructor() {
        this.clients = []
    }

    async count(filters?: InterfaceFindAllClients[] | undefined): Promise<number> {
        if (filters !== undefined && filters?.length > 0) {
            const data: Client[] = []

            filters.forEach((filter) => {
                if (filter.column === 'name') {
                    const hasClient = this.clients.filter((client) =>
                        filter.value.replace('%', '').replace('%', '').includes(client.getName())
                    )

                    data.push(...hasClient)
                }
            })

            const result: Client[] = []

            data.forEach((item) => {
                const hasClient = result.find((itemResult) => itemResult.getId() === item.getId())
                if (hasClient === undefined) {
                    result.push(item)
                }
            })

            return result.length
        }

        return this.clients.length
    }

    findAll = jest.fn()

    async findById(id: number): Promise<Client | null> {
        const client = this.clients.find((item) => item.getId() === id)

        if (client === undefined) {
            return null
        }

        return client
    }

    async insert(data: Client): Promise<Client> {
        data.setId(this.clients.length + 1)
        this.clients.push(data)

        return data
    }

    async save(data: Client): Promise<Client> {
        if (data.getId() !== undefined) {
            return await this.update(data)
        }

        return await this.insert(data)
    }

    async update(data: Client): Promise<Client> {
        this.clients = this.clients.filter((client) => client.getId() !== data.getId())

        this.clients.push(data)

        return data
    }
}
