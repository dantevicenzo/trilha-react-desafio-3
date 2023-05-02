import styled, {css} from "styled-components";

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4%;
    flex: 1;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 369px;
`
export const Title = styled.h1`
    ${({color}) => color == "pink" && css`
        color: ${({theme}) => theme.colors.pink};
    `}

    &+p{
        margin-top:15px;
    }
`
