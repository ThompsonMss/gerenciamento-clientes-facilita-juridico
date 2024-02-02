import 'dotenv/config'

import { Server } from './infrastructure/server'

const PORT = process.env.PORT ?? 3333

// Iniciando minha aplicação
new Server().server.listen(PORT, () => {
    console.log('Server is running.')
})
