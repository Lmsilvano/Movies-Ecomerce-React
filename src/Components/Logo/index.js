import React from 'react'
import LogoPNG from '../../Assets/Png/logo.png'
import { ImgContainer } from './style'
const Logo = () => {
    return (
        <ImgContainer>
            <img src={LogoPNG} alt='logo marca' />
            <h4>Movies</h4>
        </ImgContainer>
    )
}

export default Logo