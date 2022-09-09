import React from 'react';
import { StyledDivCardsKart } from './style';
import { TbTrashX } from 'react-icons/tb';
import { MoviesShowList } from '../../Context/moviesContext';

export const KartCards = ({ img, title, price, id, to }) => {
    const { localStorageRemove } = MoviesShowList();
    return (
        <StyledDivCardsKart id={id}>
            <img src={`${img}`} alt={`Movie ${title} thumbnail`} className="cardIMGMovie" />
            <p>{title}</p>
            <span>R$ {price}</span>
            <TbTrashX id={id} onClick={(e) => localStorageRemove(e, to)} />
        </StyledDivCardsKart>
    )
}
