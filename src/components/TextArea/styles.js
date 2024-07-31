import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    margin-bottom: 20px;
    padding: 16px 18px;
    border-radius: 10px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;