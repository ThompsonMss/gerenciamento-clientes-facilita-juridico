import type { Request } from 'express'
import * as yup from 'yup'

export class ClientValidator {
    async validateStore(req: Request): Promise<false | string[]> {
        const schema = yup.object().shape({
            name: yup.string().required('O nome obrigatório.').trim(),
            email: yup
                .string()
                .email('Insira um e-mail válido.')
                .required('O e-mail é obrigatório.')
                .trim(),
            phone: yup
                .string()
                .min(10, 'Insira um telefone válido.')
                .max(11, 'Insira um telefone válido.')
                .required('O telefone é obrigatório.'),
        })

        try {
            await schema.validate(req.body)
        } catch (err: any) {
            return err.errors
        }

        return false
    }

    async validateUpdate(req: Request): Promise<false | string[]> {
        const schema = yup.object().shape({
            name: yup.string().required('O nome obrigatório.').trim(),
            email: yup
                .string()
                .email('Insira um e-mail válido.')
                .required('O e-mail é obrigatório.')
                .trim(),
            phone: yup
                .string()
                .min(10, 'Insira um telefone válido.')
                .max(11, 'Insira um telefone válido.')
                .required('O telefone é obrigatório.'),
        })

        try {
            await schema.validate(req.body)
        } catch (err: any) {
            return err.errors
        }

        return false
    }
}
