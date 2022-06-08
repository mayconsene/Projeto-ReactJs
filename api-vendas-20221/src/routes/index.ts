import {Router} from 'express'

import routerProduct from '../modules/products/routes/routes.product'
import userRouter from '../modules/users/routes/routes.user'
import sessionRouter from '../modules/users/routes/routes.session'

const router = Router()

router.use('/product', routerProduct)
router.use('/user', userRouter)
router.use('/session', sessionRouter)

export default router
