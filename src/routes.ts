import { Router } from 'express'
import { resultadoMedia } from './controllers/mediaController'
import { getCep } from './controllers/cepController'

const router = Router()

router.get('/', resultadoMedia)
router.get('/:cep', getCep)

export default router