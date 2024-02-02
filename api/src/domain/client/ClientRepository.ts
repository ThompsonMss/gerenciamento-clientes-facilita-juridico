import type { Client } from './Client'
export interface ClientRepository {
    save: (data: Client) => Promise<Client>
    insert: (data: Client) => Promise<Client>
    update: (data: Client) => Promise<Client>
    findById: (id: number) => Promise<Client | null>
    findAll: () => Promise<Client[]>
}
