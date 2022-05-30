import Product from "../typeorm/entities/Product";
import { getRepository, getCustomRepository } from "typeorm";
import ProductRepository from "../typeorm/repositories/ProductRepository";
import AppError from "../../../errors/AppError";

// vamos criar um tipo de dado -> interface
interface IRequest {
    name: string;
    quantity: number;
    price: number;
}

class CreateProductService {
    // método assíncrono para inserir produto
    public async execute({name, quantity, price}: IRequest): Promise<Product>{
        // obter o repositório
        const productRepository = getCustomRepository(ProductRepository)
        const productExist = await productRepository.findByName(name);
        // não pode criar produto com nome já existente
        if (productExist){
            throw new AppError('Já existe produto com este nome', 400)
        }
        // podemos criar
        const novo = productRepository.create({
            name, quantity, price
        })
        await productRepository.save(novo)
        return novo
    }
}

export default CreateProductService