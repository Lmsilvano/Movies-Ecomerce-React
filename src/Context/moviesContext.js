import React, { createContext, useContext, useState } from 'react'
import {
    optionsGen,
    getResponse,
} from '../Services/tmbdbapi.js'
const MoviesContext = createContext()

function MoviesProvider({ children }) {
    const [responseApiMovies, setResponse] = useState()
    //const [waiting, setWaiting] = useState(false)

    async function moviesListReq(query) {
        //setWaiting(true)
        const options = optionsGen(query.toLowerCase())
        const response = await getResponse(options)
        //setWaiting(false)
        return setResponse(response.results)
    }

    return (
        <MoviesContext.Provider value={{ responseApiMovies, moviesListReq }}>
            {children}
        </MoviesContext.Provider>
    )
}

function MoviesShowList() {
    const context = useContext(MoviesContext)

    return context
}
export { MoviesProvider, MoviesShowList }