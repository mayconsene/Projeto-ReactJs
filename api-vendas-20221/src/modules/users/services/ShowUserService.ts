import {getCustomRepository} from 'typeorm'
import UserRepository from '../typeorm/repositories/UserRepository'
import {compare} from 'bcryptjs'

interface ILogin {
    email: string,
    password: string
}

class ShowUserService {

    public async execute({email, password}: ILogin): Promise<Login> {
        console.log(`Entrou no execute`)
        let userRepository = getCustomRepository(UserRepository)
        let user = await userRepository.findByEmail(email)
        if (user){ // usuário existe e vamos verificar senha
            let validPassord = await compare(password, user.password)
            if (validPassord){
                return "Usuário OK"
            }
            else {
                return "Usuário/Senha inválido"
            }
        }
        else {
            return "Usuário/Senha inválido"           
        }
    }
}

export default ShowUserService