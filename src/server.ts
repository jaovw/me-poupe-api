import express from 'express'
import { Router, Request, Response } from 'express'

const port = process.env.PORT || 5000

const app = express()
const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {

    res.json({
        message:'Hello World!'
    })
})


app.use(route)

app.listen(port, () => console.info(`Rodando na porta:${port}`))