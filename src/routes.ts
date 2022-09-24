import { Router } from 'express'
import { resultadoMedia } from './controllers/mediaController'

const router = Router()

router.get('/', resultadoMedia)

export default router