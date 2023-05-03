import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15% 0 4%;
    flex: 1;
    gap: 12px;
`

export const Column = styled.div`
    display: flex;
    align-items: column;
    gap: 15px;
    flex-direction: column;
    min-width: ${({minWidth}) => minWidth};
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    justify-content: space-between;
`

export const Link = styled.a`
    text-decoration: none;
    color: ${({color}) => color};

`