import { Repository, EntityRepository } from "typeorm";
import Product from "../entities/Product";
// decorator EntityRepository
@EntityRepository(Product)
class ProductRepository extends Repository<Product>{
    // podemos adicionar novos métodos
    public async findByName(name: string): Promise<Product | undefined>{
        let product = await this.findOne({
            where: {
                name
            }
        })
        return product
    }
}
export default ProductRepository