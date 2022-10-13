import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { MoviesShowList } from '../../Context/moviesContext';
import { StyledButton } from './style';
import { Link } from 'react-router-dom'
export const PurchaseButton = ({ id, to, from }) => {
    const { localStorageAdd } = MoviesShowList()
    return (
        <StyledButton>
            <Button id={id} variant="primary" size="lg"
                className='purchaseButton' onClick={(e) => localStorageAdd(e, to, from)}>Comprar</Button>
        </StyledButton>
    )
}

export const CheckoutButton = () => {
    return (
        <StyledButton>
            <Link to={`/checkout`}> <Button variant="primary" size="lg"
                className='checkOutButton'>Finalizar Compra</Button></Link>
        </StyledButton>)

}


export const FinishButton = ({ disabled }) => {
    useEffect(() => {

    }, [disabled])
    return (
        <StyledButton>
            <Button variant="primary" size="lg" disabled={false}
                className="checkOutButton" type="submit">Finalizar Compra</Button>
        </StyledButton>)

}
