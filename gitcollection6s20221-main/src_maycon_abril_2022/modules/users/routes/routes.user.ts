import {Router} from 'express'
import UserController from '../controllers/UserController'

// instancia um objeto Router
const userRouter = Router()
// instancia um objeto UserController
const userController = new UserController()
// chama os métodos de inserção e consulta do userRouter
// faz o mapeamento de qual método no controller responderá qual rota
userRouter.get('/', userController.index)
userRouter.post('/', userController.create)
//rota para checar email e senha do usuário
userRouter.get("/:email/:password", userController.show)

export default userRouter