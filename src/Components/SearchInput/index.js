/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import SearchInputContainer from "./style";
import { GiMagnifyingGlass } from 'react-icons/gi'
import { MoviesShowList } from '../../Context/moviesContext'
export const SearchInput = () => {
    const [query, setQuery] = useState('')
    const { moviesListReq } = MoviesShowList()

    async function handleSearch(e) {

        if (e.type === 'keypress' && e.charCode === 13) {
            moviesListReq(query)
        } else if (e.type === 'click') {
            moviesListReq(query)
        } else return
    }


    return (

        <SearchInputContainer>
            <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Busque por um filme..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => handleSearch(e)}
                />
                <GiMagnifyingGlass onClick={(e) => handleSearch(e)} />

            </Form.Floating>
        </SearchInputContainer>



    )
}


export default SearchInput
