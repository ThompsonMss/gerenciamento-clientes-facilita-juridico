import type { Client } from '../../../domain/client/Client'
import type { ClientRepository } from '../../../domain/client/ClientRepository'
import { ErrorCode } from '../../../helpers/ErrorCode'

interface InterfaceHandle {
    id: number
}

export class DeleteClientService {
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

        hasClient.markAsDeleted()
        hasClient.recordUpdateDate()

        return await this.repository.update(hasClient)
    }
}
