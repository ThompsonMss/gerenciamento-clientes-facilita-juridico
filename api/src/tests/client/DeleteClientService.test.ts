import { DeleteClientService } from '../../application/client/deleteClient/DeleteClientService'
import { Client } from '../../domain/client/Client'
import { ClientRepositoryPGSQL } from '../__mocks__/ClientRepositoryPGSQL'

describe('DeleteClientService', () => {
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

    it('should throw an error when not finding the client', async () => {
        const countClientsService = new DeleteClientService(mockRepository)

        await expect(() =>
            countClientsService.handle({
                id: 3,
            })
        ).rejects.toThrow('Client not found')
    })

    it('should return a Client class', async () => {
        const countClientsService = new DeleteClientService(mockRepository)
        const result = await countClientsService.handle({
            id: 1,
        })

        expect(result).toBeInstanceOf(Client)
    })

    it('should check if the customer the deletedat attribute has been filled in', async () => {
        const countClientsService = new DeleteClientService(mockRepository)
        const result = await countClientsService.handle({
            id: 2,
        })

        expect(result.getDeletedat()).not.toBeNull()
    })
})
