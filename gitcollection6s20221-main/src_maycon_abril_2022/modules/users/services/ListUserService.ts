import {getCustomRepository} from 'typeorm'
import UserRepository from '../typeorm/repositories/UserRepository'
import User from '../typeorm/entities/User'

class ListUserService {

    public async execute(): Promise<User[]> {
        // instancia o repositório de usuário
        let userRepository = getCustomRepository (UserRepository)
        // procura pelos usuários
        const users = userRepository.find()
        return users
    }
}

export default ListUserService