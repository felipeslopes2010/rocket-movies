import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.width || '100%'};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};
    margin: ${props => props.margin || '0 64px 0 64px'};
    border-radius: 10px;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    > input {
        height: 56px;
        width: 100%;
        padding: 16px 18px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;




        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
    
    > svg {
        margin-left: 16px;
    }
`;