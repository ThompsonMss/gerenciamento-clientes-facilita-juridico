import { ErrorCode } from './ErrorCode'

export function getCodeErrorHelper(error: unknown): number {
    if (error instanceof ErrorCode) return error.code

    return 400
}
