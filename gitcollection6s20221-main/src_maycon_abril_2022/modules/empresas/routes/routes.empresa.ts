import {Router} from 'express'
import isAuthenticated from '../../../middleware/isAuthenticated'
import EmpresaController from '../controllers/EmpresaController'
import {celebrate, Segments, Joi} from 'celebrate'

// cria objeto para router
const routerEmpresa = Router()
// cria objeto controller
const empresaController = new EmpresaController()

// define as rotas com o middleware que verifica:
// 1. se passou o toke
// 2. se o token é correto
routerEmpresa.get('/', isAuthenticated, empresaController.index)
routerEmpresa.get('/:id', isAuthenticated, empresaController.show)
routerEmpresa.delete('/:id', 
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    isAuthenticated, 
    empresaController.delete)





routerEmpresa.post('/',
    celebrate({
        [Segments.BODY] : {
            nome: Joi.string().required(),
            email: Joi.string().required(),
            cnpj: Joi.number().required()
        }
    }),
    isAuthenticated, 
    empresaController.create)







routerEmpresa.put('/:id', isAuthenticated, empresaController.update)

export default routerEmpresa