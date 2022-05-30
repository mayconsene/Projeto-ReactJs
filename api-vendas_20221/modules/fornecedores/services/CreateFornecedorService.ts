import Fornecedor from "../typeorm/entities/Fornecedor";
import { getRepository, getCustomRepository } from "typeorm";
import FornecedorRepository from "../typeorm/repositories/FornecedorRepository";
import AppError from "../../../errors/AppError";

// vamos criar um tipo de dado -> interface
interface IRequest {
    name: string;
    quantity: number;
    price: number;
}

class CreateFornecedorService {
    // método assíncrono para inserir fornecedor
    public async execute({name, quantity, price}: IRequest): Promise<Fornecedor>{
        // obter o repositório
        const fornecedorRepository = getCustomRepository(FornecedorRepository)
        const fornecedorExist = await fornecedorRepository.findByName(name);
        // não pode criar fornecedor com nome já existente
        if (fornecedorExist){
            throw new AppError('Já existe fornecedor com este nome', 400)
        }
        // podemos criar
        const novo = fornecedorRepository.create({
            name, quantity, price
        })
        await fornecedorRepository.save(novo)
        return novo
    }
}

export default CreateFornecedorService