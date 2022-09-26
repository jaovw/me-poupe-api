import express, { Application } from 'express'
import router from './src/routes'
import logger from './src/utils/logger'

const port = 5000

const app: Application = express()

app.use(express.json())
app.use(router)

const server = app.listen(port, (): void => logger.info(`Rodando na porta:${port}`))

export { app, server }