import React from 'react';
import { StyledDivCardsKart } from './style';
import { TbTrashX } from 'react-icons/tb';
export const KartCards = ({ img, title, price, id }) => {
    return (
        <StyledDivCardsKart id={id}>
            <img src={`${img}`} alt={`Movie ${title} thumbnail`} className="cardIMGMovie" />
            <p>{title}</p>
            <span>R$ {price}</span>
            <TbTrashX />
        </StyledDivCardsKart>
    )
}
