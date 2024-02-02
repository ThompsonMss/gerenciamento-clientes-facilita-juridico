import { ErrorCode } from './ErrorCode'

export function getErrorMessageHelper(error: unknown): string {
    if (error instanceof ErrorCode) return error.message
    if (error instanceof Error) return error.message
    return String(error)
}
