import Empresa from '../typeorm/entities/Empresa'
import EmpresaRepository from '../typeorm/repositories/EmpresaRepository'
import {getCustomRepository} from 'typeorm'
import AppError from '../../../errors/AppError'
// cria um tipo de dado
interface IRequest {
    id: string
    nome: string
    email: string
    cnpj: number
}
class UpdateEmpresaService {

    public async execute({id, nome, email, cnpj}: IRequest):Promise<Empresa> {
        const empresaRepository = getCustomRepository(EmpresaRepository)
        // verifica se a Empresa existe
        let empresaExists = await empresaRepository.findOne(id)
        if (!empresaExists){
            throw new AppError('Empresa não existe', 400)
        }
        // verifica se já existe Empresa com o mesmo nome
        let empresaName = await empresaRepository.findByName(nome)
        if (empresaName){
            throw new AppError('Empresa já existe', 400)
        }
        // vamos atualizar
        empresaExists.nome = nome
        empresaExists.email = email
        empresaExists.cnpj = cnpj
        await empresaRepository.save(empresaExists)
        return empresaExists
    }
}

export default UpdateEmpresaService