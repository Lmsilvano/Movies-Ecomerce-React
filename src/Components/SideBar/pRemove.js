import React from 'react'
import { MoviesShowList } from '../../Context/moviesContext';
export const PRemove = ({ placeholder }) => {
    const handleRemove = (keyName) => {
        console.log(keyName, 'aaaaaaaaaaaaaqui', placeholder)
        localStorage.removeItem(keyName);
        return
    }
    return (
        <p onClick={(e) => handleRemove(placeholder)}>Esvaziar</p>
    )
}
