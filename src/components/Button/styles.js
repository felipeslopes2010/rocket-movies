import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${( {theme }) => theme.COLORS.ROSE};
    color: ${( {theme }) => theme.COLORS.BACKGROUND_800};

    height: 56px;
    border: none;
    padding: 0 16px;
    border-radius: 10px;
    margin-top: 24px;
    font-weight: 500;
    
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
`;