import React from 'react'
import * as S from "./style";
import { BiHeart } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import SearchInput from '../SearchInput'
import Logo from '../Logo'
const Header = ({ display }) => {
    return (
        <S.StyledHeader display={display}>
            <S.LogoContainer>
                <Logo />
                <span>Movies</span>
            </S.LogoContainer>
            <S.SearchInputContainer>
                <SearchInput />
            </S.SearchInputContainer>
            <S.NavContainer>
                <BiHeart />
                <AiOutlineShoppingCart />
            </S.NavContainer>
        </S.StyledHeader>
    )
}

export default Header