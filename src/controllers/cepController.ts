import axios from 'axios'
import { Request, Response } from 'express'

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

        res.json({
            requisicao: param,
            resutado: data
        })

    } catch (e) {
        if (axios.isAxiosError(e)) {
            return res.status(400).json({
                message:e.message
            });
        } else {
            return res.status(400).json({
                message:'An unexpected error occurred'
            })
        }
    }
}

export { getCep }