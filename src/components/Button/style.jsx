import styled, {css}  from 'styled-components';

export const Button = styled.button`
    width: 120px;
    padding: 3px 0;
    background-color: ${({theme}) => theme.colors.grey};
    border-radius: 27px;
    border: none;
    font-size: ${({theme}) => theme.fontSizes.default};

    ${({btnStyle}) => btnStyle?.includes("pink") && css`
        width: auto;
        padding: 6px 18px;
        background-color: ${({theme}) => theme.colors.pink};

        outline: 2px solid ${({theme}) => theme.colors.pink};
        outline-offset: 6px;
    `}

    ${({btnStyle}) => btnStyle?.includes("w100") && css`
        width: 100%;
    `}

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