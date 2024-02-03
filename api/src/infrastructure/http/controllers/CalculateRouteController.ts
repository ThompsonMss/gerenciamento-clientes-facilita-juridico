import type { Request, Response } from 'express'
import type { ClientRepository } from '../../../domain/client/ClientRepository'
import DatabaseConnection from '../../persistence/DatabaseConnection'
import { ClientRepositoryPGSQL } from '../../persistence/PGSQL/ClientRepositoryPGSQL'
import { getCodeErrorHelper } from '../../../helpers/getCodeErrorHelper'
import { getErrorMessageHelper } from '../../../helpers/getErrorMessageHelper'
import { CalculateRouteService } from '../../../application/route/calculateRoute/CalculateRouteService'

export class CalculateRouteController {
    private readonly repository: ClientRepository

    constructor() {
        this.repository = new ClientRepositoryPGSQL(DatabaseConnection)
    }

    async index(req: Request, res: Response): Promise<Response<any>> {
        try {
            const service = new CalculateRouteService(this.repository)
            const routes = await service.handle()

            return res.status(201).json(routes)
        } catch (error) {
            return res
                .status(getCodeErrorHelper(error))
                .json({ error: getErrorMessageHelper(error) })
        }
    }
}
