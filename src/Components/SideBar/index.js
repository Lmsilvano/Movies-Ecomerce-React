import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { DisplayNumber } from './style';
import { MoviesShowList } from '../../Context/moviesContext'
function SideBar({ placeholder }) {
    const [show, setShow] = useState(false);
    const [numberOfItens, setNumberOfItens] = useState(false);
    const { displayNumberOfItens, renderNumberOfItens } = MoviesShowList();

    useEffect(() => {
        console.log('Atualizou o numero de itens', numberOfItens)
        setNumberOfItens(displayNumberOfItens(placeholder))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [renderNumberOfItens])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    if (placeholder === 'kart') {
        return (
            <>

                <DisplayNumber >
                    <AiOutlineShoppingCart onClick={handleShow} />
                    {numberOfItens}
                </DisplayNumber >

                <Offcanvas show={show} onHide={handleClose} placement={'end'} name={'end'} scroll={true} backdrop={true}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Carrinho</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    } else if (placeholder === 'fav') {
        return (
            <>
                <DisplayNumber >
                    <BiHeart onClick={handleShow} />
                    {numberOfItens}
                </DisplayNumber>
                <Offcanvas show={show} onHide={handleClose} placement={'end'} name={'end'} scroll={true} backdrop={true}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Favoritos</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );

    }
}

export default SideBar

