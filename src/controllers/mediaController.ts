import { Request, Response } from 'express'

export function realizaMedia(req: Request, res: Response) {

    res.json({
        message:'Hello World com controller'
    })

}
