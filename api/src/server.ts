import 'dotenv/config'

import { App } from './app'

const PORT = process.env.POST ?? 3333

// Iniciando minha aplicação
new App().server.listen(PORT, () => {
    console.log('Server is running.')
})
