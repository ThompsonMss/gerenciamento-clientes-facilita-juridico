import type { Client } from '../../../domain/client/Client'
import type {
    ClientRepository,
    InterfaceFindAllClients,
} from '../../../domain/client/ClientRepository'
import { ErrorCode } from '../../../helpers/ErrorCode'

interface InterfaceHandle {
    id?: number
    queryFilters?: {
        name?: string
        email?: string
        phone?: string
        page?: string
    }
}

export class GetClientsService {
    private readonly repository: ClientRepository

    constructor(repository: ClientRepository) {
        this.repository = repository
    }

    async handle(data?: InterfaceHandle): Promise<Client | Client[]> {
        if (data?.id !== undefined) {
            // Verificando se o client existe.

            const hasClient = await this.repository.findById(data.id)

            if (hasClient === null) {
                throw new ErrorCode('Client not found', 404)
            }

            return hasClient
        }

        const filters: InterfaceFindAllClients[] = []

        if (data?.queryFilters?.name !== undefined) {
            filters.push({
                column: 'name',
                operator: 'ilike',
                value: `'%${data?.queryFilters?.name}%'`,
            })
        }

        if (data?.queryFilters?.email !== undefined) {
            filters.push({
                column: 'email',
                operator: 'ilike',
                value: `'%${data?.queryFilters?.email}%'`,
            })
        }

        if (data?.queryFilters?.email !== undefined) {
            filters.push({
                column: 'dddphone',
                operator: 'ilike',
                value: `'%${data?.queryFilters?.phone?.slice(0, 2)}%'`,
            })

            filters.push({
                column: 'phone',
                operator: 'ilike',
                value: `'%${data?.queryFilters?.phone?.slice(2)}%'`,
            })
        }

        const page =
            data?.queryFilters?.page !== undefined ? parseInt(data?.queryFilters?.page) : undefined

        return await this.repository.findAll(filters, page)
    }
}
