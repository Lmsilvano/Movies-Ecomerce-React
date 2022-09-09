import React from 'react';
import * as S from "./style";
import SideBar from '../SideBar';
import SearchInput from '../SearchInput';
import Logo from '../Logo';
import { Nav, Navbar } from "react-bootstrap";
const Header = ({ display }) => {
    return (
        <>

            <Navbar collapseOnSelect expand="lg">

                <Navbar.Brand >

                    <Logo
                        alt=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>

                <SearchInput />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <S.NavContainer>
                        <Nav>
                            <Nav.Link >
                                <SideBar placeholder='fav' />
                            </Nav.Link>
                            <Nav.Link eventKey={2}>
                                <SideBar placeholder='kart' />
                            </Nav.Link>
                        </Nav>
                    </S.NavContainer>

                </Navbar.Collapse>
            </Navbar>



        </>
    )
}

export default Header