import React from 'react'
import Form from 'react-bootstrap/Form';

import { GiMagnifyingGlass } from 'react-icons/gi'


export const SearchInput = () => {
    return (
        <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Busque por um filme..."
            />
            <label htmlFor="floatingInputCustom"><GiMagnifyingGlass /></label>

        </Form.Floating>



    )
}


export default SearchInput
