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
    // chama o ShowUSerService
    public async show(request: Request, response: Response): Promise<Response> {
        console.log(`Entrou no show`)
        // recupera o usuário e senha
        let email = request.params['email']
        let password = request.params['password']
        let showUserService = new ShowUserService()
        let resposta = await showUserService.execute({email, password})
        return response.json(resposta)
    }
}

export default UserController