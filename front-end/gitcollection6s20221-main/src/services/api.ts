import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.github.com'
})

export const apiLocal = axios.create({
    baseURL: `http://localhost:3333`
})

export const apiFilme = axios.create({
    baseURL: `https://www.omdbapi.com`
})