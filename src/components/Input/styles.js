import styled from "styled-components";

export const Container = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};
    margin: 0 64px;
    margin-bottom: 8px;
    border-radius: 10px;

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