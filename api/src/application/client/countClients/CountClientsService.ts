import type {
    ClientRepository,
    InterfaceFindAllClients,
} from '../../../domain/client/ClientRepository'

interface InterfaceHandle {
    queryFilters?: {
        name?: string
        email?: string
        phone?: string
    }
}

export class CountClientsService {
    private readonly repository: ClientRepository

    constructor(repository: ClientRepository) {
        this.repository = repository
    }

    async handle(data?: InterfaceHandle): Promise<number> {
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

        return await this.repository.count(filters)
    }
}
