export class ErrorCode extends Error {
    code: number

    constructor(mensagem: string, code: number) {
        super(mensagem)
        this.code = code

        Object.setPrototypeOf(this, ErrorCode.prototype)
    }
}
