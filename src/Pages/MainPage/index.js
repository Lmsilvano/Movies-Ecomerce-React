import React, { useEffect } from 'react'
import Layout from '../../Layout'
import { MoviesShowList } from '../../Context/moviesContext'
import MoviesCards from '../../Components/MoviesCards'
import genreConversor from '../../Utils/genreConversor'
const MainPage = () => {
    const { responseApiMovies } = MoviesShowList()
    useEffect(() => console.log(responseApiMovies), [responseApiMovies])


    if (typeof responseApiMovies === 'undefined') {
        return (
            <Layout >
                <p>Experimente Buscar um filme...</p>
            </Layout >
        )
    } else if (responseApiMovies.length > 0) {
        return (
            <Layout >
                {responseApiMovies.map((data) => {
                    return (
                        <MoviesCards
                            img={data.poster_path}
                            title={data.title}
                            genre={data.genre_ids.length > 0 ? genreConversor(data.genre_ids) : 'Sorry... No Data.'}
                        />
                    )
                })}
            </Layout >
        )
    }
}

export default MainPage