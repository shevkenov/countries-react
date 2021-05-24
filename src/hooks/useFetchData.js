import React from 'react'
import { getCountries } from 'utils/api-client';

export const useFetchData = () => {
    const [countries, setCountries] = React.useState([]);
    const [element, setElement] = React.useState(0);

    React.useEffect(() => {

        getCountries().then(response => {
            setCountries(response.slice(element, element+9));
            setElement(prev => prev + 9)
        });
    }, [])

    return countries
}