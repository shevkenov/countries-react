import styled from "styled-components";

export const Wrapper = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${props => props.theme.blue};
`;

export const Input = styled.div`
    margin: 10px auto;
    max-width: 300px;
    display: flex;

    input{
        width: 100%;
        background-color: transparent;
        color: white;
        letter-spacing: 1.2px;
        padding: 0.4rem;
        margin-right: 0.5rem;
    }

    button {
        width: 60px;
        background-color: black;
        
    }

    button svg{
        display: block;
        color: fff;
        width: 100%;
        height: 24px;
    }
`