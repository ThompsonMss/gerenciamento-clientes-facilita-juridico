import type { Request, Response } from 'express'
import { ClientValidator } from '../../../validators/ClientValidator'
import { CreateClientService } from '../../../application/client/createClient/CreateClientService'
import type { ClientRepository } from '../../../domain/client/ClientRepository'
import { ClientRepositoryPGSQL } from '../../persistence/PGSQL/ClientRepositoryPGSQL'
import DatabaseConnection from '../../persistence/DatabaseConnection'

export class ClientController {
    private readonly validator: ClientValidator
    private readonly repository: ClientRepository

    constructor() {
        this.validator = new ClientValidator()
        this.repository = new ClientRepositoryPGSQL(DatabaseConnection)
    }

    async store(req: Request, res: Response): Promise<Response<any>> {
        const errors = await this.validator.validateStore(req)

        if (errors !== false) {
            return res.status(400).json({ errors })
        }

        const service = new CreateClientService(this.repository)

        const client = await service.handle({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
        })

        return res.status(201).json({ client })
    }

    async update(req: Request, res: Response): Promise<Response<any>> {
        return res.status(201).json({ message: 'teste' })
    }

    async destroy(req: Request, res: Response): Promise<Response<any>> {
        return res.status(201).json({ message: 'teste' })
    }

    async index(req: Request, res: Response): Promise<Response<any>> {
        return res.status(201).json({ message: 'teste' })
    }

    async show(req: Request, res: Response): Promise<Response<any>> {
        return res.status(201).json({ message: 'teste' })
    }
}
