import { UpdateClientService } from '../../application/client/updateClient/UpdateClientService'
import { Client } from '../../domain/client/Client'
import { ClientRepositoryPGSQL } from '../__mocks__/ClientRepositoryPGSQL'

describe('UpdateClientService', () => {
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
        const countClientsService = new UpdateClientService(mockRepository)

        await expect(() =>
            countClientsService.handle({
                id: 3,
                name: 'Thompson',
                phone: '61993133465',
                email: 'thompson.msds@gmail.com',
            })
        ).rejects.toThrow('Client not found')
    })

    it('should return a Client class', async () => {
        const countClientsService = new UpdateClientService(mockRepository)
        const result = await countClientsService.handle({
            id: 1,
            name: 'Thompson',
            phone: '61993133465',
            email: 'thompson.msds@gmail.com',
        })

        expect(result).toBeInstanceOf(Client)
    })

    it('should return a Customer class and updated attributes', async () => {
        const countClientsService = new UpdateClientService(mockRepository)
        const result = await countClientsService.handle({
            id: 2,
            name: 'Jorge Teste',
            phone: '66995953232',
            email: 'teste@teste.com',
        })

        expect({
            id: result.getId(),
            name: result.getName(),
            dddphone: result.getDddPhone(),
            phone: result.getPhone(),
            email: result.getEmail(),
        }).toEqual({
            id: 2,
            name: 'Jorge Teste',
            dddphone: '66',
            phone: '995953232',
            email: 'teste@teste.com',
        })
    })

    it('should return with the attributes dddphone and phone each with their values', async () => {
        const countClientsService = new UpdateClientService(mockRepository)
        const result = await countClientsService.handle({
            id: 1,
            name: 'Silva',
            phone: '61993133465',
            email: 'thompson.msds@gmail.com',
        })

        expect({
            dddphone: '61',
            phone: '993133465',
        }).toEqual({
            dddphone: result.getDddPhone(),
            phone: result.getPhone(),
        })

        const result1 = await countClientsService.handle({
            id: 1,
            name: 'Silva',
            phone: '6533337777',
            email: 'thompson.msds@gmail.com',
        })

        expect({
            dddphone: '65',
            phone: '33337777',
        }).toEqual({
            dddphone: result1.getDddPhone(),
            phone: result1.getPhone(),
        })
    })
})
