import type { Request, Response } from 'express'
import type { ClientRepository } from '../../../domain/client/ClientRepository'
import { ClientRepositoryPGSQL } from '../../persistence/PGSQL/ClientRepositoryPGSQL'
import DatabaseConnection from '../../persistence/DatabaseConnection'
import { getErrorMessageHelper } from '../../../helpers/getErrorMessageHelper'
import { getCodeErrorHelper } from '../../../helpers/getCodeErrorHelper'
import { CountClientsService } from '../../../application/client/countClients/CountClientsService'

export class CountClientController {
    private readonly repository: ClientRepository

    constructor() {
        this.repository = new ClientRepositoryPGSQL(DatabaseConnection)
    }

    async index(req: Request, res: Response): Promise<Response<any>> {
        try {
            const service = new CountClientsService(this.repository)

            const count = await service.handle({
                queryFilters: req.query,
            })

            return res.status(200).json({ count })
        } catch (error) {
            return res
                .status(getCodeErrorHelper(error))
                .json({ error: getErrorMessageHelper(error) })
        }
    }
}
