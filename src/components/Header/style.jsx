import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 4%;
    background-color: ${({theme}) => theme.colors.black};
`

export const LeftContainer = styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
`

export const RightContainer = styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
`