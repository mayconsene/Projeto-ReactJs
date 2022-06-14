import React from 'react'
import {apiFilme} from '../../services/api'
import {useRouteMatch} from 'react-router-dom'
import filme from '../../assets/filme.svg'
import {Header, RepoInfo} from './styles'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'

// crias três interfaces - que na verdade são tipos de dados
interface FilmeRepoParams {
    nome: string;
}

interface FilmeRepository {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  }



export const FilmeRepo:React.FC = () => {

    const [reposfilme, setRepository] = React.useState<FilmeRepository | null>(null);
    const {params} = useRouteMatch<FilmeRepoParams>()
    
    React.useEffect( () => {
              
        apiFilme
            .get<FilmeRepository>(`?apikey=3d07a49e&t=${params.nome}`)
            .then(response => setRepository(response.data))
     
        
    }, [params.nome])
    
    return (
        <>
            <Header>
                <img src={filme} alt="FilmeCollection"/>
                <Link to="/"> 
                    <FiChevronLeft /> Voltar
                </Link>
            </Header>

            {reposfilme && (
                <RepoInfo>
                    <header>
                        <img src={reposfilme.Poster} alt={reposfilme.Poster}/>
                        <div>
                            <strong> {reposfilme.Title} </strong>
                            <p> {reposfilme.Year} </p>
                        </div>
                    </header>

                    <div>
                    <ul>
                        <li> 
                            <strong> {reposfilme.Rated} </strong> <span> Rated </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Released} </strong> <span> Released </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Runtime} </strong> <span> Runtime </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Genre} </strong> <span> Genre </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Director} </strong> <span> Director </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Writer} </strong> <span> Writer </span>
                        </li>
                        </ul>

                    </div>

                    <div>
                    <ul>
                        <li>
                            <strong> {reposfilme.Actors} </strong> <span> Actors </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Plot} </strong> <span> Plot </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Language} </strong> <span> Language </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Country} </strong> <span> Country </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Awards} </strong> <span> Awards </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Country} </strong> <span> Country </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Poster} </strong> <span> Poster </span>
                        </li>
                        </ul>

                    </div>

                        <div>
                        <ul>
                        <li>
                            <strong>  </strong> <span> Ratings </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Metascore} </strong> <span> Metascore </span>
                        </li>
                        <li>
                            <strong> {reposfilme.imdbRating} </strong> <span> imdbRating </span>
                        </li>
                        <li>
                            <strong> {reposfilme.imdbVotes} </strong> <span> imdbVotes </span>
                        </li>
                        <li>
                            <strong> {reposfilme.imdbID} </strong> <span> imdbID </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Type} </strong> <span> Type </span>
                        </li>
                        <li>
                            <strong> {reposfilme.BoxOffice} </strong> <span> BoxOffice </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Production} </strong> <span> Production </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Website} </strong> <span> Website </span>
                        </li>
                        <li>
                            <strong> {reposfilme.Response} </strong> <span> Response </span>
                        </li>
                    </ul>
                        </div>
                       
                       
                </RepoInfo>
            )}

        
        </>
    )
}

