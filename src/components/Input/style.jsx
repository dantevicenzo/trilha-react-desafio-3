import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #3B3450;

    &+button{
        margin-top: 30px;
    }
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    width: 100%;
    background-color: transparent;
    margin: 12px 0;
    font-size: ${({theme}) => theme.fontSizes.default};
    padding: 6px;
    height: 30px;
    border: none;
`