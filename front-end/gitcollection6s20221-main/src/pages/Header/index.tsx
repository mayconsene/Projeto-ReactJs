import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navegacao} from './styles'
export const Header:React.FC = () => {
    return (
       <Navegacao>
            <ul>
                <li> <NavLink to="/dashboard"> DashBoard </NavLink> </li>
                <li> <NavLink to="/repositories"> Repositório </NavLink> </li>
                <li> <NavLink to="/sobre"> Sobre </NavLink> </li> 
                <li> <NavLink to="/filme"> Filmes </NavLink> </li> 
            </ul>
        </Navegacao>
    )
}