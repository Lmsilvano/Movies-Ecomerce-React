import React from 'react'
import Header from '../Components/Header'
import * as S from "./style";
function Layout({ children, full = false }) {
    return (
        <>
            <Header />
            {full ? <S.StyledMainCenter >{children}</S.StyledMainCenter>
                : <S.StyledMainFull >{children}</S.StyledMainFull>
            }

        </>
    )
}

export default Layout