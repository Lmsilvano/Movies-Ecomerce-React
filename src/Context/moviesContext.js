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

        const options = optionsGen(query.toLowerCase())
        const response = await getResponse(options)
        return setResponse(response.results)
    }
    function handdleWaiting(on = false) {
        if (on) {
            return setWaiting(1);
        } else return setWaiting(0);
    }

    return (
        <MoviesContext.Provider value={{ waiting, responseApiMovies, moviesListReq, handdleWaiting }}>
            {children}
        </MoviesContext.Provider>
    )
}

function MoviesShowList() {
    const context = useContext(MoviesContext)

    return context
}
export { MoviesProvider, MoviesShowList }