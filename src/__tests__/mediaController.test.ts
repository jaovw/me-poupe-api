import request from 'supertest'
import { media } from '../controllers/mediaController'
import { app, server } from '../../server'

afterAll(done => {
    server.close();
    done();
});

describe('media()', () => {

    it('Deve retornar a media entre dois valores numericos', () => {

        const a: number = 10
        const b: number = 2

        const resultado: number = media(a,b)

        expect(resultado).toBe(6)
        expect(typeof resultado).toBe('number')
    })

    it('Deve utilizar o arredondamento Half Round Up ', () => {

        const a: number = 11
        const b: number = 2

        const resultadoReal:  number = Math.round((a+b)/2)
        const resultadoFuncao: number = media(a,b)

        expect(resultadoFuncao).toBe(resultadoReal)
    })
})

describe('resultadoMedia()', () => {

    it('Deve retornar status 200 na requisicao com o body correto', async () => {
        
        const res = await request(app)
        .get('/')
        .send({
            a:3,b:2
        })

        expect(res.statusCode).toEqual(200)
    })

    it('Deve retornar erro caso o request seja invalido', async () => {

        const res = await request(app)
        .get('/')
        .send({
            a:5,
            b:'ff'
        })

        expect(res.statusCode).toEqual(400)
        expect(res.text).toContain("{\"message\":\"Favor inserir somente numeros ...\"}")

    })

    it('Deve retornar erro caso o request body esteja incompleto', async () => {

        const res = await request(app)
        .get('/')
        .send({
            a:5
        })

        expect(res.statusCode).toEqual(400)
        expect(res.text).toContain("{\"message\":\"Favor utilizar o body corretamente ...\"}")

    })
})