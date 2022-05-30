import {Request, Response} from 'express'
import CreateUserService from '../services/CreateUserService'
import ListUserService from '../services/ListUserService'
class UserController {
    // chama o CreateUserService
    public async create(request: Request, response: Response ): Promise<Response>{
        let createUserService = new CreateUserService()
        // recupera os dados do body
        let {name, email, password} = request.body
        // executa o serviço
        let newUser = await createUserService.execute({name, email, password})
        return response.json(newUser) // retorna novo usuário
    }
    // chama o ListUserService
    public async index(request: Request, response: Response): Promise<Response>{
        let listUserService = new ListUserService()
        // executa o serviço
        let users = await listUserService.execute()
        return response.json(users) // retorna os usuários
    }
}

export default UserController