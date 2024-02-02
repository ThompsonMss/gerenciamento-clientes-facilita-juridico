import { CountClientsService } from '../../application/client/countClients/CountClientsService'
import { Client } from '../../domain/client/Client'
import { ClientRepositoryPGSQL } from '../__mocks__/ClientRepositoryPGSQL'

describe('CountClientsService', () => {
    const mockRepository = new ClientRepositoryPGSQL()

    mockRepository.clients = [
        new Client({
            id: 1,
            name: 'Thompson',
            email: 'thompson.msds@gmail.com',
            dddphone: '61',
            phone: '993133465',
        }),
        new Client({
            id: 2,
            name: 'Silva',
            email: 'silva@gmail.com',
            dddphone: '62',
            phone: '994133465',
        }),
    ]

    it('should count customers based on the filters and return 0', async () => {
        const countClientsService = new CountClientsService(mockRepository)
        const result = await countClientsService.handle({
            queryFilters: {
                name: 'John',
                email: 'john@example.com',
                phone: '123456789',
            },
        })

        expect(result).toEqual(0)
    })

    it('should count customers based on the filters and return 1', async () => {
        const countClientsService = new CountClientsService(mockRepository)
        const result = await countClientsService.handle({
            queryFilters: {
                name: 'Thomp',
                email: 'john@example.com',
                phone: '123456789',
            },
        })

        expect(result).toEqual(0)
    })

    it('should count customers based on the filters and return 2', async () => {
        const countClientsService = new CountClientsService(mockRepository)
        const result = await countClientsService.handle()
        expect(result).toEqual(2)
    })
})
