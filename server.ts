import express, { Application } from 'express'
import router from './src/routes'

const port = 5000

const app: Application = express()

app.use(express.json())
app.use(router)

const server = app.listen(port, (): void => console.info(`Rodando na porta:${port}`))

export { app, server }