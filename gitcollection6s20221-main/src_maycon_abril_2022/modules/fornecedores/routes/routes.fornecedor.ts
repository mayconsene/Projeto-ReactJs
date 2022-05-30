import {Router} from 'express'
import isAuthenticated from '../../../middleware/isAuthenticated'
import {celebrate, Segments, Joi} from 'celebrate'
import FornecedorController from '../controllers/FornecedorController'

// cria objeto para router
const routerFornecedor = Router()
// cria objeto controller
const fornecedorController = new FornecedorController()

// define as rotas com o middleware que verifica:
// 1. se passou o toke
// 2. se o token é correto
routerFornecedor.get('/', isAuthenticated, fornecedorController.index)
routerFornecedor.get('/:id', isAuthenticated, fornecedorController.show)
routerFornecedor.delete('/:id', 
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    isAuthenticated, 
    fornecedorController.delete)





routerFornecedor.post('/',
    celebrate({
        [Segments.BODY] : {
            name: Joi.string().required(),
            price: Joi.number().required(),
            quantity: Joi.number().required()
        }
    }),
    isAuthenticated, 
    fornecedorController.create)







routerFornecedor.put('/:id', isAuthenticated, fornecedorController.update)

export default routerFornecedor