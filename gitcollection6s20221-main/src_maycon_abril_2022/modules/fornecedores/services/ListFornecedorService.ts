import Fornecedor from '../typeorm/entities/Fornecedor'
import FornecedorRepository from '../typeorm/repositories/FornecedorRepository'
import {getCustomRepository} from 'typeorm'

class ListFornecedorService {
    public async execute(): Promise<Fornecedor[]>{

        const fornecedorRepository = getCustomRepository(FornecedorRepository)
        const fornecedores = await fornecedorRepository.find()
        return fornecedores
        
    }
}

export default ListFornecedorService