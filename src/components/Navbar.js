import React from 'react'
import { SearchIcon } from 'style/Icons'
import { Input, Wrapper } from '../style/Navbar'

const Navbar = () => {
    return (
        <Wrapper>
            <Input>
                <input />
                <button><SearchIcon /></button>
            </Input>
        </Wrapper>
    )
}

export default Navbar