import {Request, Response} from 'express'
import CreateProductService from '../services/CreateProductService'
import DeleteProductService from '../services/DeleteProductService'
import ListProductService from '../services/ListProductService'
import ShowProductService from '../services/ShowProductService'
import UpdateProductService from '../services/UpdateProductService'

class ProductController {
    // não trataremos de regra de negócio por aqui
    public async create(request: Request, response: Response):Promise<Response>{
        // obter os dados do produto
        let {name, quantity, price} = request.body
        const objeto = new CreateProductService();
        const newProduct = await objeto.execute({ name, quantity, price })
        return response.json(newProduct)
    }
    public async delete(request: Request, response: Response):Promise<Response>{
        // obter o id do produto
        const {id} = request.params
        const objeto = new DeleteProductService()
        await objeto.execute(id)
        return response.json([])

    }
    public async index(request: Request, response: Response):Promise<Response>{
        const objeto = new ListProductService()
        const products = await objeto.execute()
        return response.json(products)
    }
    public async show(request: Request, response: Response):Promise<Response>{
        const {id} = request.params
        const objeto = new ShowProductService()
        const product = await objeto.execute(id)
        return response.json(product)
    }
    public async update(request: Request, response: Response):Promise<Response>{
        const {id} = request.params
        const {name, quantity, price} = request.body
        const objeto = new UpdateProductService()
        const product = await objeto.execute({id, name, quantity, price})
        return response.json(product)
    }

}

export default ProductController