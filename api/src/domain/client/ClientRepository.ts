import type { Client } from './Client'

export interface InterfaceFindAllClients {
    column: string
    operator: string
    value: string
}
export interface ClientRepository {
    save: (data: Client) => Promise<Client>
    insert: (data: Client) => Promise<Client>
    update: (data: Client) => Promise<Client>
    findById: (id: number) => Promise<Client | null>
    findAll: (filters?: InterfaceFindAllClients[], page?: number) => Promise<Client[]>
    count: (filters?: InterfaceFindAllClients[]) => Promise<number>
}
