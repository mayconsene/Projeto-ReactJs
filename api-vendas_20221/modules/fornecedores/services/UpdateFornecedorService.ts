import Fornecedor from '../typeorm/entities/Fornecedor'
import FornecedorRepository from '../typeorm/repositories/FornecedorRepository'
import {getCustomRepository} from 'typeorm'
import AppError from '../../../errors/AppError'
// cria um tipo de dado
interface IRequest {
    id: string
    name: string
    price: number
    quantity: number
}
class UpdateFornecedorService {

    public async execute({id, name, price, quantity}: IRequest):Promise<Fornecedor> {
        const fornecedorRepository = getCustomRepository(FornecedorRepository)
        // verifica se o Fornecedor existe
        let fornecedorExists = await fornecedorRepository.findOne(id)
        if (!fornecedorExists){
            throw new AppError('Fornecedor não existe', 400)
        }
        // verifica se já existe Fornecedor com o mesmo nome
        let fornecedorName = await fornecedorRepository.findByName(name)
        if (fornecedorName){
            throw new AppError('Fornecedor já existe', 400)
        }
        // vamos atualizar
        fornecedorExists.name = name
        fornecedorExists.quantity = quantity
        fornecedorExists.price = price
        await fornecedorRepository.save(fornecedorExists)
        return fornecedorExists
    }
}

export default UpdateFornecedorService