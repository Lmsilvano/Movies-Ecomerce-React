import React from 'react'
import { StyledDivCardsMovies } from './style'
import { AiFillStar } from 'react-icons/ai';
import { FavHearth } from '../../Assets/index'
import { PurchaseButton } from '../Buttons/index'
function MoviesCards({ img, title, desc, genre, price, rate }) {
    return (
        <StyledDivCardsMovies>
            <img src={`${img}`} alt={`Movie ${title} thumbnail`} className="cardIMGMovie" />
            <FavHearth className='favHeart' />
            <div className="cardContentMovie">
                <h3>{title}</h3>
                <div className="cardContentBody">
                    <div className="cardContentUpperBody">
                        <AiFillStar /><p>{rate}</p><h4>{genre}</h4>
                    </div>
                    <div className="cardContentLowerBody">
                        <p>{desc}</p>


                    </div>
                </div>
            </div>
            <span>R$: 65,59</span>
            <PurchaseButton />
        </StyledDivCardsMovies>
    )
}

export default MoviesCards