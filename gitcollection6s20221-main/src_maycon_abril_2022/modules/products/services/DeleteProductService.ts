import { getCustomRepository } from "typeorm";
import ProductRepository from "../typeorm/repositories/ProductRepository";
import AppError from "../../../errors/AppError";

class DeleteProductService {
    public async execute(id: string) {
        const productRepository = getCustomRepository(ProductRepository)
        const productExist = await productRepository.findOne(id)
        // não podemos remover um produto que já exista
        if (!productExist){
            throw new AppError('Produto não axiste', 400)
        }
        await productRepository.remove(productExist)
    }
}
export default DeleteProductService