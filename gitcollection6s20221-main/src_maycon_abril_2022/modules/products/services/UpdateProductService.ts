import Product from '../typeorm/entities/Product'
import ProductRepository from '../typeorm/repositories/ProductRepository'
import {getCustomRepository} from 'typeorm'
import AppError from '../../../errors/AppError'
// cria um tipo de dado
interface IRequest {
    id: string
    name: string
    price: number
    quantity: number
}
class UpdateProductService {

    public async execute({id, name, price, quantity}: IRequest):Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository)
        // verifica se o produto existe
        let productExists = await productRepository.findOne(id)
        if (!productExists){
            throw new AppError('Produto não existe', 400)
        }
        // verifica se já existe produto com o mesmo nome
        let productName = await productRepository.findByName(name)
        if (productName){
            throw new AppError('Produto já existe', 400)
        }
        // vamos atualizar
        productExists.name = name
        productExists.quantity = quantity
        productExists.price = price
        await productRepository.save(productExists)
        return productExists
    }
}

export default UpdateProductService