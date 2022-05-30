import Empresa from '../typeorm/entities/Empresa'
import EmpresaRepository from '../typeorm/repositories/EmpresaRepository'
import {getCustomRepository} from 'typeorm'
import AppError from '../../../errors/AppError'

class ShowEmpresaService {
    public async execute(id: string): Promise<Empresa>{
        // retorna uma única Empresa
        const empresaRepository = getCustomRepository(EmpresaRepository)
        const empresa = await empresaRepository.findOne(id)
        // verifica se a Empresa existe
        if (!empresa){
            throw new AppError('Empresa não existe', 400);
        }
        return empresa
        
    }
}

export default ShowEmpresaService