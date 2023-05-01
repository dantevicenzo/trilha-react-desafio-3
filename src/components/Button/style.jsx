import styled from 'styled-components'

export const Button = styled.button`
    width: 120px;
    padding: 3px 0;
    background-color: ${({theme}) => theme.colors.grey};
    border-radius: 27px;
    border: none;
    font-size: ${({theme}) => theme.fontSizes.default};

    &:hover {
        opacity: 0.8;
        cursor: pointer;
        transform: scale(1.02);
    }
    
    &:active {
        opacity: 0.8;
        cursor: pointer;
        transform: scale(1.05);
    }
`