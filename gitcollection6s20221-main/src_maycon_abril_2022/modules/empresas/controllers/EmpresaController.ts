import {Request, Response} from 'express'
import CreateEmpresaService from '../services/CreateEmpresaService'
import DeleteEmpresaService from '../services/DeleteEmpresaService'
import ListEmpresaService from '../services/ListEmpresaService'
import ShowEmpresaService from '../services/ShowEmpresaService'
import UpdateEmpresaService from '../services/UpdateEmpresaService'

class EmpresaController {
    // não trataremos de regra de negócio por aqui
    public async create(request: Request, response: Response):Promise<Response>{
        // obter os dados da empresa
        let {nome, email, cnpj} = request.body
        const objeto = new CreateEmpresaService();
        const newEmpresa = await objeto.execute({ nome, email, cnpj })
        return response.json(newEmpresa)
    }
    public async delete(request: Request, response: Response):Promise<Response>{
        // obter o id da empresa
        const {id} = request.params
        const objeto = new DeleteEmpresaService()
        await objeto.execute(id)
        return response.json([])

    }
    public async index(request: Request, response: Response):Promise<Response>{
        const objeto = new ListEmpresaService()
        const empresas = await objeto.execute()
        return response.json(empresas)
    }
    public async show(request: Request, response: Response):Promise<Response>{
        const {id} = request.params
        const objeto = new ShowEmpresaService()
        const empresa = await objeto.execute(id)
        return response.json(empresa)
    }
    public async update(request: Request, response: Response):Promise<Response>{
        const {id} = request.params
        const {nome, email, cnpj} = request.body
        const objeto = new UpdateEmpresaService()
        const empresa = await objeto.execute({id, nome, email, cnpj})
        return response.json(empresa)
    }

}

export default EmpresaController