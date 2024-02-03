import { Client } from '../../../domain/client/Client'
import type { ClientRepository } from '../../../domain/client/ClientRepository'

interface InterfaceHandle {
    name: string
    email: string
    phone: string
    xcoordinate?: number
    ycoordinate?: number
}
export class CreateClientService {
    private readonly repository: ClientRepository

    constructor(repository: ClientRepository) {
        this.repository = repository
    }

    async handle(data: InterfaceHandle): Promise<Client> {
        // Recuperando o ddd.
        const dddphone = data.phone.slice(0, 2)

        // Recuperando somente o número celular/telefone.
        const phone = data.phone.slice(2)

        const client = new Client({ ...data, dddphone, phone })
        return await this.repository.save(client)
    }
}
