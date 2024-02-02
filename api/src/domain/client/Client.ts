export interface InterfaceClient {
    id?: number
    name: string
    email: string
    dddphone: string
    phone: string
}

export class Client {
    private id?: number
    private readonly name: string
    private readonly email: string
    private readonly dddphone: string
    private readonly phone: string
    private updatedat?: Date
    private deletedat?: Date

    constructor({ name, email, dddphone, phone, id }: InterfaceClient) {
        this.name = name
        this.email = email
        this.dddphone = dddphone
        this.phone = phone
        this.id = id
    }

    markAsDeleted(): void {
        this.deletedat = new Date()
    }

    recordUpdateDate(): void {
        this.updatedat = new Date()
    }

    getId(): number | undefined {
        return this.id
    }

    setId(id: number): void {
        this.id = id
    }

    getName(): string {
        return this.name
    }

    getEmail(): string {
        return this.email
    }

    getDddPhone(): string {
        return this.dddphone
    }

    getPhone(): string {
        return this.phone
    }

    getUpdatedat(): string | null {
        if (this.updatedat !== undefined) {
            return this.updatedat.toISOString()
        }

        return null
    }

    getDeletedat(): string | null {
        if (this.deletedat !== undefined) {
            return this.deletedat.toISOString()
        }

        return null
    }
}
