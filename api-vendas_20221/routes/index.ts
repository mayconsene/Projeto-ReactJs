import {Router} from 'express'

import routerProduct from '../modules/products/routes/routes.product'
import userRouter from '../modules/users/routes/routes.user'
import sessionRouter from '../modules/users/routes/routes.session'
import empresaRouter from '../modules/empresas/routes/routes.empresa'
import fornecedorRouter from '../modules/fornecedores/routes/routes.fornecedor'


const router = Router()

router.use('/product', routerProduct)
router.use('/user', userRouter)
router.use('/session', sessionRouter)
router.use('/empresa', empresaRouter)
router.use('/fornecedor', fornecedorRouter)

export default router


