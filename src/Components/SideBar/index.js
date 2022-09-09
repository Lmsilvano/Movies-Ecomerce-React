import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import * as S from './style';
import { MoviesShowList } from '../../Context/moviesContext';
import { KartCards } from '../KartCard';
function SideBar({ placeholder }) {
    const [show, setShow] = useState(false);
    const [localComponentItens, setLocalC] = useState(false);
    const { displayNumberOfItens, renderNumberOfItens } = MoviesShowList();

    const handleRemove = (keyName) => {
        localStorage.removeItem(keyName);
        return setLocalC(0)
    }


    useEffect(() => {
        setLocalC(displayNumberOfItens(placeholder))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [renderNumberOfItens])

    const handleClose = () => setShow(false);
    const handleShow = () => show ? setShow(false) : setShow(true);
    if (placeholder === 'kart') {
        return (
            <>

                <S.DisplayNumber >
                    <AiOutlineShoppingCart onClick={handleShow} />
                    {localComponentItens ? localComponentItens.length > 0 ? <div className="showNumber" onClick={handleShow}>{localComponentItens.length}</div> : '' : ''}
                </S.DisplayNumber >

                <Offcanvas show={show} onHide={handleClose} placement={'end'} name={'end'} scroll={true} backdrop={true}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title><h2>Carrinho</h2>
                            <p onClick={(e) => handleRemove(placeholder)} >Esvaziar </p>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {localComponentItens ? localComponentItens.map((data) => {
                            console.log(localComponentItens)
                            return (
                                <KartCards
                                    key={data.id}
                                    id={data.id}
                                    img={data.poster_path ? `https://image.tmdb.org/t/p/w300${data.poster_path}`
                                        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'}
                                    title={data.title}
                                    price={65.59}
                                    to={'kart'}

                                />


                            )
                        }) : ''}
                        {localComponentItens ? <S.Total> <h3>Total: R$ {(65.59 * localComponentItens.length).toFixed(2)}</h3></S.Total> : ''}
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    } else if (placeholder === 'fav') {
        return (
            <>
                <S.DisplayNumber >
                    <BiHeart onClick={handleShow} />
                    {localComponentItens ? localComponentItens.length > 0 ? <div className="showNumber" onClick={handleShow}>{localComponentItens.length}</div> : '' : ''}
                </S.DisplayNumber>
                <Offcanvas show={show} onHide={handleClose} placement={'end'} name={'end'} scroll={true} backdrop={true}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Favoritos
                            <p onClick={(e) => handleRemove(placeholder)} >Esvaziar </p>
                        </Offcanvas.Title>
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

