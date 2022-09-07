import React, { createContext, useContext, useState } from 'react'
import {
    optionsGen,
    getResponse,
} from '../Services/tmbdbapi.js'
const MoviesContext = createContext()

function MoviesProvider({ children }) {
    const [responseApiMovies, setResponse] = useState();
    const [waiting, setWaiting] = useState(0);

    async function moviesListReq(query) {
        setWaiting(1)
        const options = optionsGen(query.toLowerCase())
        const response = await getResponse(options)
        setWaiting(0)
        return setResponse(response.results)
    }
    async function localStorageAdd(arg, to) {
        console.log("oi?")
        const movieToAdd = responseApiMovies.filter((movie) => {
            if (Number(movie.id) === Number(arg.target.id)) {
                return movie
            } else return false
        })
        const actualkart = JSON.parse(localStorage.getItem(`${to}`));
        if (!actualkart) {
            console.log("entrou aqui como se nao tivesse", actualkart)
            return localStorage.setItem(`${to}`, JSON.stringify(movieToAdd));
        } else {
            console.log("entrou aqui como se tivesse", actualkart)
            actualkart.push(movieToAdd)
            return localStorage.setItem(`${to}`, JSON.stringify(actualkart));
        }

    }

    return (
        <MoviesContext.Provider value={{ waiting, responseApiMovies, moviesListReq, localStorageAdd }}>
            {children}
        </MoviesContext.Provider>
    )
}

function MoviesShowList() {
    const context = useContext(MoviesContext)

    return context
}
export { MoviesProvider, MoviesShowList }