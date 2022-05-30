import Fornecedor from '../typeorm/entities/Fornecedor'
import FornecedorRepository from '../typeorm/repositories/FornecedorRepository'
import {getCustomRepository} from 'typeorm'
import AppError from '../../../errors/AppError'

class ShowFornecedorService {
    public async execute(id: string): Promise<Fornecedor>{
        // retorna um única Fornecedor
        const fornecedorRepository = getCustomRepository(FornecedorRepository)
        const fornecedor = await fornecedorRepository.findOne(id)
        // verifica se o Fornecedor existe
        if (!fornecedor){
            throw new AppError('Fornecedor não existe', 400);
        }
        return fornecedor
        
    }
}

export default ShowFornecedorService