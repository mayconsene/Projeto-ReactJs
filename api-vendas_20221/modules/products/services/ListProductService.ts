import Product from '../typeorm/entities/Product'
import ProductRepository from '../typeorm/repositories/ProductRepository'
import {getCustomRepository} from 'typeorm'

class ListProductService {
    public async execute(): Promise<Product[]>{

        const productRepository = getCustomRepository(ProductRepository)
        const products = await productRepository.find()
        return products
        
    }
}

export default ListProductService