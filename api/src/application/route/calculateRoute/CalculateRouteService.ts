import { Client } from '../../../domain/client/Client'
import type { ClientRepository } from '../../../domain/client/ClientRepository'

interface InterfaceCoordinate {
    x: any
    y: any
}

export class CalculateRouteService {
    private readonly repository: ClientRepository
    private readonly companyCoordinates: Client

    private clients: Client[] = []

    constructor(repository: ClientRepository) {
        this.repository = repository

        // Estou fazendo um 'cast' para cliente já que os demais pontos são clientes
        this.companyCoordinates = new Client({
            xcoordinate: 0,
            ycoordinate: 0,
            name: '',
            phone: '',
            dddphone: '',
            email: '',
        })
    }

    async handle(): Promise<any> {
        // Recuperando todos os clientes ativos e que possui coordenadas.
        this.clients = await this.repository.findAll([
            {
                column: 'xcoordinate',
                operator: 'is not null',
                value: '',
            },
            {
                column: 'ycoordinate',
                operator: 'is not null',
                value: '',
            },
        ])

        /**
         * Dei uma pesquisada sobre esse problema e achei bem interessante.
         * Esse problema é conhecido com Problema do Caixeiro Viajante
         * Diante disso pesquisei algumas possíveis soluções pro cenário
         * E a heurística que eu acredito que mais se encaixe no cenário
         * do problema dessa aplicação se chama 'Vizinho Mais Próximo'
         * Ref.: https://en.wikipedia.org/wiki/Travelling_salesman_problem
         */

        // Implementando a heurística do vizinho mais próximo
        let route: Client[] = []

        // O ponto de partida é a empresa.
        route = this.findNearestNeighbor(route, this.companyCoordinates)
        return route
    }

    // Função que calcula a distância entre dois pontos
    private calculateDistanceBetweenTwoPoints(
        coord1: InterfaceCoordinate,
        coord2: InterfaceCoordinate
    ): number {
        return Math.sqrt(Math.pow(coord2.x - coord1.x, 2) + Math.pow(coord2.y - coord1.y, 2))
    }

    // Função que aplica a lógica de caçar o vizinho mais próximo.
    private findNearestNeighbor(route: Client[], currentNeighbor: Client): Client[] {
        let nearestNeighbor: Client | null = null
        let shortestDistanceFound: number | null = null

        /**
         * Pecorrendo todos os vizinhos para verificar
         * qual tem a menor distancia do meu vizinho atual
         */

        this.clients.forEach((neighbor) => {
            const distance = this.calculateDistanceBetweenTwoPoints(
                {
                    x: currentNeighbor.getXcoordinate(),
                    y: currentNeighbor.getYcoordinate(),
                },
                {
                    x: neighbor.getXcoordinate(),
                    y: neighbor.getYcoordinate(),
                }
            )

            if (shortestDistanceFound === null) {
                shortestDistanceFound = distance
                nearestNeighbor = neighbor
            } else {
                if (distance <= shortestDistanceFound) {
                    shortestDistanceFound = distance
                    nearestNeighbor = neighbor
                }
            }
        })

        if (nearestNeighbor !== null) {
            // Colocando na rota o viznho com menor disntancia pro atual.
            route.push(nearestNeighbor)

            // Removendo o vizinho dos demais
            this.clients = this.clients.filter(
                (neighbor) => neighbor.getId() !== nearestNeighbor?.getId()
            )

            /**
             * Se ainda sobrar vizinhos para entrar na rota
             * então aplica uma recursão até que não tenha mais vizinhos
             */
            if (this.clients.length > 0) {
                return this.findNearestNeighbor(route, nearestNeighbor)
            }
        }

        // Devolvendo a rota
        return route
    }
}
