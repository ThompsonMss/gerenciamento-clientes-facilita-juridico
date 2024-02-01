import type { Request, Response } from 'express'

export class ClientController {
    store(req: Request, res: Response): Response<any> {
        return res.status(201).json({ message: 'teste' })
    }
}
