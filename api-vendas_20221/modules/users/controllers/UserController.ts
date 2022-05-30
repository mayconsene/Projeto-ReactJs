import {Request, Response} from 'express'
import CreateUserService from '../services/CreateUserService'
import ListUserService from '../services/ListUserService'
import ShowUserService from '../services/ShowUserService'

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

    //chama o ShowUserService
    public async show(request: Request, response: Response): Promise<Response>{
        //recupera o usuário e a senha
        let email = request.params['email']
        let password = request.params['passwords']
        let ShowUserService = new ShowUserService()
        let resposta = await ShowUserService.execute({email, password})
        return response.json(resposta)
    }
}

export default UserController