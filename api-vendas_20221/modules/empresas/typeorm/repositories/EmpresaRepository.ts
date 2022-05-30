import { Repository, EntityRepository } from "typeorm";
import Empresa from "../entities/Empresa";
// decorator EntityRepository
@EntityRepository(Empresa)
class EmpresaRepository extends Repository<Empresa>{
    // podemos adicionar novos métodos
    public async findByName(nome: string): Promise<Empresa | undefined>{
        let empresa = await this.findOne({
            where: {
                nome
            }
        })
        return empresa
    }
}
export default EmpresaRepository