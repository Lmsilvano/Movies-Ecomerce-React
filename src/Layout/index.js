import React from 'react'
import Header from '../Components/Header'
import * as S from "./style";
function Layout({ children }) {
    return (
        <>
            <Header />
            <S.StyledMain >{children}</S.StyledMain>

        </>
    )
}

export default Layout