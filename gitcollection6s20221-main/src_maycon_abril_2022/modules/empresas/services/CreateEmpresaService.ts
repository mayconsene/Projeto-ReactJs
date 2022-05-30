import Empresa from "../typeorm/entities/Empresa";
import { getRepository, getCustomRepository } from "typeorm";
import EmpresaRepository from "../typeorm/repositories/EmpresaRepository";
import AppError from "../../../errors/AppError";

// vamos criar um tipo de dado -> interface
interface IRequest {
    nome: string;
    email: string;
    cnpj: number;
}

class CreateEmpresaService {
    // método assíncrono para inserir Empresa
    public async execute({nome, email, cnpj}: IRequest): Promise<Empresa>{
        // obter o repositório
        const empresaRepository = getCustomRepository(EmpresaRepository)
        const empresaExist = await empresaRepository.findByName(nome);
        // não pode criar Empresa com nome já existente
        if (empresaExist){
            throw new AppError('Já existe Empresa com este nome', 400)
        }
        // podemos criar
        const novo = empresaRepository.create({
            nome, email, cnpj
        })
        await empresaRepository.save(novo)
        return novo
    }
}

export default CreateEmpresaService