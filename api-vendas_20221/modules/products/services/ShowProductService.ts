import Product from '../typeorm/entities/Product'
import ProductRepository from '../typeorm/repositories/ProductRepository'
import {getCustomRepository} from 'typeorm'
import AppError from '../../../errors/AppError'

class ShowProductService {
    public async execute(id: string): Promise<Product>{
        // retorna um única produto
        const productRepository = getCustomRepository(ProductRepository)
        const product = await productRepository.findOne(id)
        // verifica se o produto existe
        if (!product){
            throw new AppError('Produto não existe', 400);
        }
        return product
        
    }
}

export default ShowProductService