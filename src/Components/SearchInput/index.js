import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import SearchInputContainer from "./style";
import { GiMagnifyingGlass } from 'react-icons/gi'
import { optionsGen, getResponse } from '../../Services/tmbdbapi'

export const SearchInput = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState('')

    useEffect(() => console.log(movies), [movies])
    function handleSearch(e) {
        console.log(process.env.APIKEY)
        const options = optionsGen(query.toLowerCase())
        console.log(options)

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
