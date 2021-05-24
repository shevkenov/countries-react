import axios from 'axios';

const client = axios.create({
    baseURL: "https://restcountries.eu/rest/v2"
});

export const getCountries = async() => {
    const {data} = await client.get('/all');
    return data;
}