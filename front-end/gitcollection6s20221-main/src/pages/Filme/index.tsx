import React from 'react'
import logo from '../../assets/logo.svg'
import {Title, Formulario, Repo} from './styles'

import {apiFilme} from '../../services/api'


import {Link} from 'react-router-dom'


export const Filme:React.FC = () => {
    // vamos criar interface (tipo de dado) contendo campos de 
    // interesse do repositório
    interface FilmeRepository {
        Title: string;
        Genre: string;
        Poster: string;
    }
    // criar um estado que representa um novo repositório e inicia com vazio
    const [novoRepo, setNovoRepo] = React.useState('')
    // criar um estado que representa o vetor de repositórios buscados
    // inicia com vazio - tipo do vetor é de IFilmeRepository
    const [repos, setRepos] = React.useState<FilmeRepository[]>([])
    
    // o que for digitado no input vai para a variávei novoRepo
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setNovoRepo(event.target.value)
    }
    
    // vai na api do Omdb e traz as info do repo
    async function handleAddRepo(event: React.FormEvent<HTMLFormElement>, ): Promise<void>{
        // não atualiza a página
        event.preventDefault()
        // tenta chamar a api

        /*const config = {
            headers: { 
                Authorization: `Bearer 3d07a49e&` 
            }
        };*/

        try {
            const resposta = await apiFilme.get<FilmeRepository>(`?apikey=3d07a49e&t=${novoRepo}`)
            const aux = resposta.data // acessa os dados do resultado
            // adiciona o resultado no vetor repos
            setRepos([...repos, aux])
        }
        catch {
            console.log(`Repositório não encontrado`)
        }
    }
    return (
        <> 
            <img src={logo} alt="Filme collection"/>
            <Title> Catálogo de Filmes do OMDb </Title>
            <Formulario onSubmit={handleAddRepo}>
                <input placeholder="Informe o título do filme" onChange={handleInputChange}/>
                <button type="submit"> Buscar </button> 
            </Formulario>

            <Repo>
                { // percorrer o vetor repos
                repos.map((item, indice) => (
                    <Link 
                        to={`/repositories/${item.Title}`}
                        key={item.Genre + indice}    >
                        <img src={item.Poster} alt={item.Title}/>
                        <div>
                            <strong> {item.Title} </strong>
                            <p> {item.Genre} </p> 
                        </div>
                    </Link>
                )

                )

                }
            </Repo>    
        </>
    )
}

