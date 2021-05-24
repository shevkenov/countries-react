import styled from "styled-components";

export const Container = styled.div`
    margin: 60px 10px 10px 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    h2{
        grid-column: 1 / -1;
        text-align: center;
    }
`;