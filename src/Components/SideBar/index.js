import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi'

function SideBar({ placeholder }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    if (placeholder === 'kart') {
        return (
            <>

                <AiOutlineShoppingCart onClick={handleShow} />
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

                <BiHeart onClick={handleShow} />
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

