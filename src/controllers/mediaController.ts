import { Request, Response } from 'express'
import logger from '../utils/logger'

function media(a: number, b: number): number{

    logger.info({params: {a,b}}, 'Parametros recebidos para a funcao media()')
    return Math.round((a + b)/2)
}

function resultadoMedia(req: Request, res: Response) {

    const { a, b } = req.body

    if(!a || !b){
        logger.error({params: {a,b}},'Favor utilizar o body corretamente ...')
        return res.status(400).json({message: 'Favor utilizar o body corretamente ...'})
    }

    if(typeof a !== 'number' || typeof b !== 'number'){
        logger.error({params: {a,b}},'Favor inserir somente numeros ...')
        return res.status(400).json({message: 'Favor inserir somente numeros ...'})
    }

    const resultado: number = media(a,b)

    res.status(200).json({
        resultado: resultado
    })
    logger.info({resultado: resultado}, 'Resultado da funcao media()')
}

export { resultadoMedia, media }