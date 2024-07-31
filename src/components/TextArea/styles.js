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
    overflow-x: hidden;
    word-break: break-word;

    overflow-y: auto;

    scrollbar-color: ${({ theme }) => theme.COLORS.ROSE} transparent;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;