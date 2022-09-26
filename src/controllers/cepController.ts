import axios from 'axios'
import { Request, Response } from 'express'
import logger from '../utils/logger'

type Cep = {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
}

type GetCepResponse = {
    data: Cep[]
}

async function getCep(req: Request, res: Response) {

    const param: any = req.params.cep

    try {

        const { data, status } = await axios.get<GetCepResponse>(
            `https://viacep.com.br/ws/${param}/json`,
            {
                headers: {
                    Accept: 'aplication/json'
                }
            }
        )

        const msg: string = JSON.stringify(data)
        const regex: any = new RegExp('true')

        if(regex.test(msg)) {
            logger.error({
                CEP: param,
                mensagem: 'Nao foi possivel encontrar o CEP solicitado'
            })
            res.status(400).json({
                mensagem: `CEP ${param} inexistente`
            })
        }

        res.status(200).json({
            resutado: data
        })
        logger.info('Requisicao ok')
        
    } catch (e) {
        if (axios.isAxiosError(e)) {
            logger.error({
                status: 400,
                code: e.code,
                message: e.message,
            },'Erro em query string, necessario utilizar um CEP completo')

            return res.status(400).json({
                erro:e.message,
                mensagem: 'Necessario utilizar um CEP valido'
            });
        }
    }
}

export { getCep }