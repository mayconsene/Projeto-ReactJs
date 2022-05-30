import { getCustomRepository } from "typeorm";
import FornecedorRepository from "../typeorm/repositories/FornecedorRepository";
import AppError from "../../../errors/AppError";

class DeleteFornecedorService {
    public async execute(id: string) {
        const fornecedorRepository = getCustomRepository(FornecedorRepository)
        const fornecedorExist = await fornecedorRepository.findOne(id)
        // não podemos remover um Fornecedor que já exista
        if (!fornecedorExist){
            throw new AppError('Fornecedor não axiste', 400)
        }
        await fornecedorRepository.remove(fornecedorExist)
    }
}
export default DeleteFornecedorService