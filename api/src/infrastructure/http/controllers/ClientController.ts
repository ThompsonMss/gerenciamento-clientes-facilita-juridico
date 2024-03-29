import type { Request, Response } from 'express'
import { ClientValidator } from '../../../validators/ClientValidator'
import { CreateClientService } from '../../../application/client/createClient/CreateClientService'
import type { ClientRepository } from '../../../domain/client/ClientRepository'
import { ClientRepositoryPGSQL } from '../../persistence/PGSQL/ClientRepositoryPGSQL'
import DatabaseConnection from '../../persistence/DatabaseConnection'
import { getErrorMessageHelper } from '../../../helpers/getErrorMessageHelper'
import { UpdateClientService } from '../../../application/client/updateClient/UpdateClientService'
import { getCodeErrorHelper } from '../../../helpers/getCodeErrorHelper'
import { DeleteClientService } from '../../../application/client/deleteClient/DeleteClientService'
import { GetClientsService } from '../../../application/client/getClients/GetClientsService'

export class ClientController {
    private readonly validator: ClientValidator
    private readonly repository: ClientRepository

    constructor() {
        this.validator = new ClientValidator()
        this.repository = new ClientRepositoryPGSQL(DatabaseConnection)
    }

    async store(req: Request, res: Response): Promise<Response<any>> {
        try {
            const errors = await this.validator.validateStore(req)

            if (errors !== false) {
                return res.status(400).json({ errors })
            }

            const service = new CreateClientService(this.repository)

            const client = await service.handle({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                xcoordinate: req.body.xcoordinate,
                ycoordinate: req.body.ycoordinate,
            })

            return res.status(201).json(client)
        } catch (error) {
            return res
                .status(getCodeErrorHelper(error))
                .json({ error: getErrorMessageHelper(error) })
        }
    }

    async update(req: Request, res: Response): Promise<Response<any>> {
        try {
            const errors = await this.validator.validateUpdate(req)

            if (errors !== false) {
                return res.status(400).json({ errors })
            }

            const service = new UpdateClientService(this.repository)

            const client = await service.handle({
                id: parseInt(`${req.params.id}`),
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                xcoordinate: req.body.xcoordinate,
                ycoordinate: req.body.ycoordinate,
            })

            return res.status(200).json(client)
        } catch (error) {
            return res
                .status(getCodeErrorHelper(error))
                .json({ error: getErrorMessageHelper(error) })
        }
    }

    async destroy(req: Request, res: Response): Promise<Response<any>> {
        try {
            const service = new DeleteClientService(this.repository)

            const client = await service.handle({
                id: parseInt(`${req.params.id}`),
            })

            return res.status(200).json(client)
        } catch (error) {
            return res
                .status(getCodeErrorHelper(error))
                .json({ error: getErrorMessageHelper(error) })
        }
    }

    async index(req: Request, res: Response): Promise<Response<any>> {
        try {
            const service = new GetClientsService(this.repository)

            const clients = await service.handle({
                queryFilters: req.query,
            })

            return res.status(200).json(clients)
        } catch (error) {
            return res
                .status(getCodeErrorHelper(error))
                .json({ error: getErrorMessageHelper(error) })
        }
    }

    async show(req: Request, res: Response): Promise<Response<any>> {
        try {
            const service = new GetClientsService(this.repository)

            const client = await service.handle({
                id: parseInt(`${req.params.id}`),
            })

            return res.status(200).json(client)
        } catch (error) {
            return res
                .status(getCodeErrorHelper(error))
                .json({ error: getErrorMessageHelper(error) })
        }
    }
}
