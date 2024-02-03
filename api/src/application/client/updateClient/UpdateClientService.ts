import { Client } from '../../../domain/client/Client'
import type { ClientRepository } from '../../../domain/client/ClientRepository'
import { ErrorCode } from '../../../helpers/ErrorCode'

interface InterfaceHandle {
    id: number
    name: string
    email: string
    phone: string
    xcoordinate?: number
    ycoordinate?: number
}

export class UpdateClientService {
    private readonly repository: ClientRepository

    constructor(repository: ClientRepository) {
        this.repository = repository
    }

    async handle(data: InterfaceHandle): Promise<Client> {
        // Verificando se o client existe.

        const hasClient = await this.repository.findById(data.id)

        if (hasClient === null) {
            throw new ErrorCode('Client not found', 404)
        }

        // Recuperando o ddd.
        const dddphone = data.phone.slice(0, 2)

        // Recuperando somente o número celular/telefone.
        const phone = data.phone.slice(2)

        const client = new Client({ ...data, dddphone, phone })
        client.recordUpdateDate()

        return await this.repository.save(client)
    }
}
