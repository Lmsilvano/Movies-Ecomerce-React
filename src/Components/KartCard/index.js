import React from 'react';
import { StyledDivCardsKart } from './style';
import { TbTrashX } from 'react-icons/tb';
import { MoviesShowList } from '../../Context/moviesContext';
import { PurchaseButton } from '../Buttons/index'
export const KartCards = ({ img, title, price, id, to }) => {
    const { localStorageRemove } = MoviesShowList();
    if (to === 'kart') {
        return (
            <StyledDivCardsKart id={id}>
                <img src={`${img}`} alt={`Movie ${title} thumbnail`} className="cardIMGMovie" />
                <p>{title}</p>
                <span>R$ {price}</span>
                <TbTrashX id={id} onClick={(e) => localStorageRemove(e, to)} />
            </StyledDivCardsKart>
        )
    } else if (to === 'fav') {

        return (
            <StyledDivCardsKart id={id}>
                <img src={`${img}`} alt={`Movie ${title} thumbnail`} className="cardIMGMovie" />
                <p>{title}</p>
                <span>R$ {price}</span>
                <TbTrashX id={id} onClick={(e) => localStorageRemove(e, to)} />
                <PurchaseButton id={id} to={'kart'} from={to} />
            </StyledDivCardsKart>
        )


    }
}
