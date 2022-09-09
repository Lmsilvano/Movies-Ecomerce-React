import React, { createContext, useContext, useState } from 'react'
import {
    optionsGen,
    getResponse,
} from '../Services/tmbdbapi.js'
const MoviesContext = createContext()

function MoviesProvider({ children }) {
    const [responseApiMovies, setResponse] = useState();
    const [renderNumberOfItens, setRendersNumberOfItens] = useState(0);
    const [waiting, setWaiting] = useState(0);

    async function moviesListReq(query) {
        setWaiting(1)
        const options = optionsGen(query.toLowerCase())
        const response = await getResponse(options)
        setWaiting(0)
        return setResponse(response.results)
    }
    async function localStorageAdd(arg, to) {
        const movieToAdd = responseApiMovies.filter((movie) => {
            if (Number(movie.id) === Number(arg.target.id)) {
                return movie
            } else return false
        })
        const actualkart = JSON.parse(localStorage.getItem(`${to}`));
        if (!actualkart) {
            setRendersNumberOfItens(1)
            return localStorage.setItem(`${to}`, JSON.stringify(movieToAdd));
        } else {
            actualkart.push({ ...movieToAdd[0] })
            setRendersNumberOfItens(actualkart.length)
            return localStorage.setItem(`${to}`, JSON.stringify(actualkart));
        }

    }
    function localStorageRemove(arg, to) {
        const actualkart = JSON.parse(localStorage.getItem(`${to}`));
        if (!actualkart) {
            return
        } else {
            const newKart = actualkart.filter((movie) => {
                if (Number(movie.id) === Number(arg.target.id)) {
                    return false
                } else return movie
            })
            setRendersNumberOfItens(newKart.length)
            return localStorage.setItem(`${to}`, JSON.stringify(newKart));
        }

    }
    function displayNumberOfItens(from) {
        const actualkart = JSON.parse(localStorage.getItem(`${from}`));
        if (!actualkart) {
            return 0;
        } else {
            return actualkart.length;
        }

    }

    return (
        <MoviesContext.Provider value={{ waiting, responseApiMovies, moviesListReq, localStorageAdd, displayNumberOfItens, renderNumberOfItens, localStorageRemove }}>
            {children}
        </MoviesContext.Provider>
    )
}

function MoviesShowList() {
    const context = useContext(MoviesContext)

    return context
}
export { MoviesProvider, MoviesShowList }