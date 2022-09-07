import React from 'react'
import * as S from "./style";
import SideBar from '../SideBar'
import SearchInput from '../SearchInput'
import Logo from '../Logo'
const Header = ({ display }) => {
    return (
        <S.StyledHeader display={display}>
            <S.LogoContainer>
                <Logo />
                <span>Movies</span>
            </S.LogoContainer>

            <SearchInput />

            <S.NavContainer>
                <SideBar placeholder='fav' />
                <SideBar placeholder='kart' />
            </S.NavContainer>
        </S.StyledHeader>
    )
}

export default Header