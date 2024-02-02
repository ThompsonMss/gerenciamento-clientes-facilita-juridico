declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production'
            PORT?: string
            DB_USER: string
            DB_HOST: string
            DB_DATABASE: string
            DB_PASSWORD: string
            DB_PORT: number
        }
    }
}

export {}
