import { useFetchData } from 'hooks/useFetchData'
import React from 'react'
import { Container } from 'style/Container'
import { Heading } from './Heading'

function Home() {
    const countries = useFetchData();
    console.log(countries);
    return (
        <Container>
            <Heading />
            {
                countries ? countries.map(country => <div>{country.nam}</div>) : null
            }
        </Container>
    )
}

export default Home
