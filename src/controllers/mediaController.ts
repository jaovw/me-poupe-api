import { Request, Response } from 'express'

function media(a: number, b: number): number{

    return Math.round((a + b)/2)
}

function resultadoMedia(req: Request, res: Response) {

    const { a, b } = req.body

    if(!a || !b){
        return res.status(400).json({message: 'Favor utililizar o body corretamente ... '})
    }

    if(typeof a !== 'number' || typeof b !== 'number'){
        return res.status(400).json({message: 'Favor inserir somente numeros ...'})
    }

    const resultado: number = media(a,b)

    res.json({
        resultado: resultado
    })
}

export { resultadoMedia }