import React from 'react'
import { StyledDivCardsMovies } from './style'
function MoviesCards({ img, title, desc, genre, price }) {
    return (
        <StyledDivCardsMovies>
            <img src={`https://image.tmdb.org/t/p/w300${img}`} alt={`Movie ${title} thumbnail`} className="cardIMGMovie" />
            <div className="cardContentMovie">
                <h3>{title}</h3> <h4>{genre}</h4>
                <p>{desc}</p>
                <span>R$: {price}</span>
            </div>

        </StyledDivCardsMovies>
    )
}

export default MoviesCards