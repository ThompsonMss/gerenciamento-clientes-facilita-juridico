import type DatabaseConnection from '../DatabaseConnection'

export abstract class BaseConnection {
    protected readonly conn: typeof DatabaseConnection

    constructor(conn: typeof DatabaseConnection) {
        this.conn = conn
    }
}
