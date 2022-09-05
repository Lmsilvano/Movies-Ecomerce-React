import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import SearchInputContainer from "./style";
import { GiMagnifyingGlass } from 'react-icons/gi'
import { MoviesShowList } from '../../Context/moviesContext'
export const SearchInput = () => {
    const [query, setQuery] = useState('')
    const { moviesListReq } = MoviesShowList()


    async function handleSearch(e) {
        moviesListReq(query)
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
                />
                <label htmlFor="floatingInputCustom" onClick={(e) => handleSearch(e.target.value)}><GiMagnifyingGlass /></label>

            </Form.Floating>
        </SearchInputContainer>



    )
}


export default SearchInput
