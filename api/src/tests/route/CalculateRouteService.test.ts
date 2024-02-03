import { CalculateRouteService } from '../../application/route/calculateRoute/CalculateRouteService'
import { Client } from '../../domain/client/Client'
import { ClientRepositoryPGSQL } from '../__mocks__/ClientRepositoryPGSQL'

describe('CalculateRouteService', () => {
    const mockRepository = new ClientRepositoryPGSQL()

    mockRepository.clients = [
        new Client({
            id: 1,
            name: '',
            email: '',
            dddphone: '',
            phone: '',
            xcoordinate: 3,
            ycoordinate: 1,
        }),
        new Client({
            id: 2,
            name: '',
            email: '',
            dddphone: '',
            phone: '',
            xcoordinate: 1,
            ycoordinate: 2,
        }),
        new Client({
            id: 3,
            name: '',
            email: '',
            dddphone: '',
            phone: '',
            xcoordinate: 4,
            ycoordinate: 4,
        }),
        new Client({
            id: 4,
            name: '',
            email: '',
            dddphone: '',
            phone: '',
            xcoordinate: 5,
            ycoordinate: 4,
        }),
        new Client({
            id: 5,
            name: '',
            email: '',
            dddphone: '',
            phone: '',
            xcoordinate: -1,
            ycoordinate: 2,
        }),
    ]

    it('should return a route with the shortest possible route from the company point (0,0) applying the "nearest neighbor" algorithm', async () => {
        const countClientsService = new CalculateRouteService(mockRepository)
        const result = await countClientsService.handle()

        expect(result[0].getId()).toEqual(5)
        expect(result[1].getId()).toEqual(2)
        expect(result[2].getId()).toEqual(1)
        expect(result[3].getId()).toEqual(3)
        expect(result[4].getId()).toEqual(4)
    })
})
