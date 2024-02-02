import { CreateClientService } from '../../application/client/createClient/CreateClientService'
import { Client } from '../../domain/client/Client'
import { ClientRepositoryPGSQL } from '../__mocks__/ClientRepositoryPGSQL'

describe('CreateClientService', () => {
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

    it('should return a Client class', async () => {
        const countClientsService = new CreateClientService(mockRepository)
        const result = await countClientsService.handle({
            name: 'Thompson',
            phone: '61993133465',
            email: 'thompson.msds@gmail.com',
        })

        expect(result).toBeInstanceOf(Client)
    })

    it('should return a Client class and the id attribute equal to 4', async () => {
        const countClientsService = new CreateClientService(mockRepository)
        const result = await countClientsService.handle({
            name: 'Silva',
            phone: '61993133465',
            email: 'thompson.msds@gmail.com',
        })

        expect(result.getId()).toEqual(4)
    })

    it('should return with the attributes dddphone and phone each with their values', async () => {
        const countClientsService = new CreateClientService(mockRepository)
        const result = await countClientsService.handle({
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
