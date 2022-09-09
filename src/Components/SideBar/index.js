import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import * as S from './style';
import { MoviesShowList } from '../../Context/moviesContext';
import { KartCards } from '../KartCard'
function SideBar({ placeholder }) {
    const [show, setShow] = useState(false);
    const [numberOfItens, setNumberOfItens] = useState(0);
    const { displayNumberOfItens, renderNumberOfItens } = MoviesShowList();
    const [itensOfLocalStorage, setItens] = useState(0)

    useEffect(() => {
        console.log('Atualizou o numero de itens', numberOfItens)
        setNumberOfItens(displayNumberOfItens(placeholder))
        setItens(JSON.parse(localStorage.getItem(`${placeholder}`)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [renderNumberOfItens])

    const handleClose = () => setShow(false);
    const handleShow = () => show ? setShow(false) : setShow(true);
    if (placeholder === 'kart') {
        return (
            <>

                <S.DisplayNumber >
                    <AiOutlineShoppingCart onClick={handleShow} />
                    {numberOfItens ? <div className="showNumber">{numberOfItens}</div> : ''}
                </S.DisplayNumber >

                <Offcanvas show={show} onHide={handleClose} placement={'end'} name={'end'} scroll={true} backdrop={true}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title><h2>Carrinho</h2> <p>Esvaziar</p></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {itensOfLocalStorage ? itensOfLocalStorage.map((data) => {
                            console.log(data.title, data)
                            return (
                                <KartCards
                                    key={data.id}
                                    id={data.id}
                                    img={data.poster_path ? `https://image.tmdb.org/t/p/w300${data.poster_path}`
                                        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'}
                                    title={data.title}
                                    price={65.59}

                                />


                            )
                        }) : ''}
                        {itensOfLocalStorage ? <S.Total> <h3>Total: R$ {65.59 * itensOfLocalStorage.length}</h3></S.Total> : ''}
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    } else if (placeholder === 'fav') {
        return (
            <>
                <S.DisplayNumber >
                    <BiHeart onClick={handleShow} />
                    {numberOfItens ? <div className="showNumber">{numberOfItens}</div> : ''}
                </S.DisplayNumber>
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

