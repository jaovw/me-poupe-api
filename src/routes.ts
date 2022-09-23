import { Router } from 'express'
import { realizaMedia } from './controllers/mediaController'

const router = Router()

router.get('/', realizaMedia)
export default router