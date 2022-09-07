import React, { useEffect } from 'react';
import Layout from '../../Layout';
import { MoviesShowList } from '../../Context/moviesContext';
import MoviesCards from '../../Components/MoviesCards';
import genreConversor from '../../Utils/genreConversor';


const MainPage = () => {
    const { responseApiMovies, waiting } = MoviesShowList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => console.log(responseApiMovies), [responseApiMovies])


    if (typeof responseApiMovies === 'undefined') {
        return (
            <Layout >
                <p className='warning'>Experimente buscar por um filme...</p>
            </Layout >
        )
    } else if (waiting) {

        return (

            <Layout >

                <p p className='warning'>Carregando...</p>

            </Layout >
        )


    } else if (responseApiMovies.length > 0) {
        return (
            <Layout >
                {responseApiMovies.map((data) => {
                    return (
                        <MoviesCards
                            key={data.id}
                            id={data.id}
                            img={data.poster_path ? `https://image.tmdb.org/t/p/w300${data.poster_path}`
                                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'}
                            title={data.title}
                            genre={data.genre_ids.length > 0 ? genreConversor(data.genre_ids)[0] : '.'}
                            rate={data.vote_average}
                            desc={data.overview ? data.overview : '.'}
                        />
                    )
                })}
            </Layout >
        )
    } else if (responseApiMovies.length === 0) {
        return (
            <Layout >
                <p className='warning'>Infelizmente não há resultados para essa busca...</p>
            </Layout >)

    } else return null
}

export default MainPage