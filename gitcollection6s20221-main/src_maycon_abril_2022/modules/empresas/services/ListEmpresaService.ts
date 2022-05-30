import Empresa from '../typeorm/entities/Empresa'
import EmpresaRepository from '../typeorm/repositories/EmpresaRepository'
import {getCustomRepository} from 'typeorm'

class ListEmpresaService {
    public async execute(): Promise<Empresa[]>{

        const empresaRepository = getCustomRepository(EmpresaRepository)
        const empresas = await empresaRepository.find()
        return empresas
        
    }
}

export default ListEmpresaService