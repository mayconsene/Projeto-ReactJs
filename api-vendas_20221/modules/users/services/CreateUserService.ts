import User from '../typeorm/entities/User'
import UserRepository from '../typeorm/repositories/UserRepository'
import {getCustomRepository} from 'typeorm'
import AppError from '../../../errors/AppError'
import { hash } from 'bcryptjs'

// cria um tipo de dado para receber info do usuário
interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({name, email, password}: IRequest) {
        // instancia um repositório de usuário
        let userRepository = getCustomRepository(UserRepository)
        // regra de negócio - verifica se já temos usuário com email cadastrado
        let emailExist = await userRepository.findByEmail(email)
        if (emailExist){
            throw new AppError('Email já cadastrado', 400)
        }
        // email não existe
        // criptografamos a senha do usuário
        let newPassword = await hash(password, 8) // 
        let newUser = userRepository.create({
            name, 
            email, 
            password: newPassword
        })
        // salvo no BD
        userRepository.save(newUser)
        return newUser
    } 
}

export default CreateUserService