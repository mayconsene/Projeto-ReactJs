import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {api} from '../../services/api'
import logo from '../../assets/logo.svg'
import {Header, RepoInfo, Issue} from './styles'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'

// crias três interfaces - que na verdade são tipos de dados
interface RepositoryParams {
    repository: string;
}

interface GithubRepository {
    full_name: string;
    description: string;
    forks_count: number;
    open_issues_count: number;
    stargazers_count: number;
    owner:{
        login: string;
        avatar_url:string;
    }
}

interface GithubIssue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string
    }
}

export const Repository:React.FC = () => {

    const [repository, setRepository] = React.useState<GithubRepository | null>(null);
    const [issues, setIssues] = React.useState<GithubIssue[]>([])
    const {params} = useRouteMatch<RepositoryParams>()
    
    React.useEffect( () => {
        const config = {
            headers: { 
                Authorization: `Bearer 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` 
            }
        };
        // executado quando o repositório for alterado
        // consulta api do github para obter dados do repositório de interesse
        api
            .get<GithubRepository>(`repos/${params.repository}`)
            .then(response => setRepository(response.data))
        // consulta api do github para obter dados das issues do repositório de interesse
        api
            .get<GithubIssue[]>(`repos/${params.repository}/issues`)
            .then(response => setIssues(response.data))
        
    }, [params.repository])
    
    return (
        <>
            <Header>
                <img src={logo} alt="GitCollection"/>
                <Link to="/"> 
                    <FiChevronLeft /> Voltar
                </Link>
            </Header>

            {repository && (
                <RepoInfo>
                    <header>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                        <div>
                            <strong> {repository.full_name} </strong>
                            <p> {repository.description} </p>
                        </div>
                    </header>
                    <ul>
                        <li> 
                            <strong> {repository.stargazers_count} </strong> <span> Stars </span>
                        </li>
                        <li>
                            <strong> {repository.forks_count} </strong> <span> Forks </span>
                        </li>
                        <li>
                            <strong> {repository.open_issues_count} </strong> <span> Issues abertas </span>
                        </li>
                    </ul>
                </RepoInfo>
            )}

            <Issue>
                {issues.map(issue => (
                    <a href={issue.html_url} key={issue.id}>
                      <div>
                        <strong> {issue.title} </strong>
                        <p> {issue.user.login} </p>  
                      </div> 

                      <FiChevronRight size={20}/> 
                    </a> 
                ))}
            </Issue>
        </>
    )
}