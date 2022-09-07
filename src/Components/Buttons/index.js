import React from 'react'
import Button from 'react-bootstrap/Button';
import { MoviesShowList } from '../../Context/moviesContext';
export const PurchaseButton = ({ id }) => {
    const { localStorageAdd } = MoviesShowList()
    return (
        <Button id={id} variant="primary" size="lg" className='purchaseButton' onClick={(e) => localStorageAdd(e, 'kart')}>Comprar</Button>
    )
}
