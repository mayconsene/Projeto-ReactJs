import {Router} from 'express'
import isAuthenticated from '../../../middleware/isAuthenticated'
import ProductController from '../controllers/ProductController'
import {celebrate, Segments, Joi} from 'celebrate'

// cria objeto para router
const routerProduct = Router()
// cria objeto controller
const productController = new ProductController()

// define as rotas com o middleware que verifica:
// 1. se passou o toke
// 2. se o token é correto
routerProduct.get('/', isAuthenticated, productController.index)
routerProduct.get('/:id', isAuthenticated, productController.show)
routerProduct.delete('/:id', 
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    isAuthenticated, 
    productController.delete)





routerProduct.post('/',
    celebrate({
        [Segments.BODY] : {
            name: Joi.string().required(),
            price: Joi.number().required(),
            quantity: Joi.number().required()
        }
    }),
    isAuthenticated, 
    productController.create)







routerProduct.put('/:id', isAuthenticated, productController.update)

export default routerProduct