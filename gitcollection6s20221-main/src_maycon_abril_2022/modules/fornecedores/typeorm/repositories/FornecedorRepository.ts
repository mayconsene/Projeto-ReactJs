import { Repository, EntityRepository } from "typeorm";
import Fornecedor from "../entities/Fornecedor";
// decorator EntityRepository
@EntityRepository(Fornecedor)
class FornecedorRepository extends Repository<Fornecedor>{
    // podemos adicionar novos métodos
    public async findByName(name: string): Promise<Fornecedor | undefined>{
        let fornecedor = await this.findOne({
            where: {
                name
            }
        })
        return fornecedor
    }
}
export default FornecedorRepository