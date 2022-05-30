import 'reflect-metadata'
import express, {NextFunction, Request, Response} from 'express'
import 'express-async-errors'
import {errors} from 'celebrate'
import router from './routes'
import './typeorm' // chama conexão com o banco
import AppError from './errors/AppError'


let server = express()
server.use(express.json())
server.use(router)
server.use(errors()) // instancia um objeto da classe errors e pede para o servidor utilizar
server.use(
    (error:Error, request:Request, response:Response, next: NextFunction) => {
        // erro foi lançado pelo AppError
        if (error instanceof AppError){
            return response.status(error.statusCode).json({
                status:'error',
                message: error.message
            })
        }
        // erro não ter sido lançado pelo AppError
        return response.status(500).json({
            status: 'error',
            message: 'Erro interno do servidor'
        })
    }
)
server.listen(3333, () => {
    console.log('Servidor iniciado ')
})