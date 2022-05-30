import {Request, Response} from 'express'
import CreateFornecedorService from '../services/CreateFornecedorService'
import DeleteFornecedorService from '../services/DeleteFornecedorService'
import ListFornecedorService from '../services/ListFornecedorService'
import ShowFornecedorService from '../services/ShowFornecedorService'
import UpdateFornecedorService from '../services/UpdateFornecedorService'

class FornecedorController {
    // não trataremos de regra de negócio por aqui
    public async create(request: Request, response: Response):Promise<Response>{
        // obter os dados do fornecedor
        let {name, quantity, price} = request.body
        const objeto = new CreateFornecedorService();
        const newFornecedor = await objeto.execute({ name, quantity, price })
        return response.json(newFornecedor)
    }
    public async delete(request: Request, response: Response):Promise<Response>{
        // obter o id do fornecedor
        const {id} = request.params
        const objeto = new DeleteFornecedorService()
        await objeto.execute(id)
        return response.json([])

    }
    public async index(request: Request, response: Response):Promise<Response>{
        const objeto = new ListFornecedorService()
        const Fornecedors = await objeto.execute()
        return response.json(Fornecedors)
    }
    public async show(request: Request, response: Response):Promise<Response>{
        const {id} = request.params
        const objeto = new ShowFornecedorService()
        const Fornecedor = await objeto.execute(id)
        return response.json(Fornecedor)
    }
    public async update(request: Request, response: Response):Promise<Response>{
        const {id} = request.params
        const {name, quantity, price} = request.body
        const objeto = new UpdateFornecedorService()
        const Fornecedor = await objeto.execute({id, name, quantity, price})
        return response.json(Fornecedor)
    }

}

export default FornecedorController