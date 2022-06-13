import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Dashboard} from '../pages/Dashboard/index'
import {Repository} from '../pages/Repository/index'
import {Sobre} from '../pages/Sobre/index'
import {Login} from '../pages/Login/index'
import { Filme } from '../pages/Filme'
import { FilmeRepo } from '../pages/FilmeRepo'

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route component={Login} path="/" exact/>
            <Route component={Dashboard} path="/dashboard" exact/>
            <Route component={Sobre} path="/sobre" />
            <Route component={Repository} path="/repositories/:repository+" />
            <Route component={Filme} path="/filme" />
            <Route component={FilmeRepo} path="/filmes/:filme+" />
        </Switch>
    )
} 

