import{getCustomRepository} from 'typeorm'
import UserRepository from "../typeorm/repositories/UserRepository"
import {compare} from 'bcryptjs'

interface ILogin{
    email: string,
    password: string
}
class ShowUserService{
    public async execute({email, password}: ILogin): Promise<Login>{
        let userRepository = getCustomRepository(UserRepository)
        let user = await userRepository.findByEmail(email)
        if(user){//usuário existe e vamos verificar a senha
            let validPassword = await compare(password, user.password)
            if(validPassword){
                return "Usuário OK"
            }

        }
        else{
            return "Usuário/Senha inválidos"

        }
    }
}

export default ShowUserService