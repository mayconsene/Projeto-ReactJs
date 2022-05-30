import { getCustomRepository } from "typeorm";
import EmpresaRepository from "../typeorm/repositories/EmpresaRepository";
import AppError from "../../../errors/AppError";

class DeleteEmpresaService {
    public async execute(id: string) {
        const empresaRepository = getCustomRepository(EmpresaRepository)
        const empresaExist = await empresaRepository.findOne(id)
        // não podemos remover uma Empresa que já exista
        if (!empresaExist){
            throw new AppError('Empresa não axiste', 400)
        }
        await empresaRepository.remove(empresaExist)
    }
}
export default DeleteEmpresaService