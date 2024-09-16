import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 100vh;
    overflow: hidden;
`;

export const Content = styled.div`
    padding: 0 106px 60px 123px;
`;

export const Section = styled.div`
    display: flex;
    align-items: center;
    margin-top: 24px;
    
    &[title="Menu"] {
        justify-content: space-between;
        padding: 30px 106px 37.5px 123px;
    }
    
    &[title="Meus Filmes"] {
        display: flex;
        flex-direction: column;
        gap: 18px;

        height: calc(100vh - 320px);
        overflow-y: auto;

        scrollbar-color: ${({ theme }) => theme.COLORS.ROSE} transparent;
    }
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NewMovie = styled(Link)`
    width: 208px;
    padding: 32px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
    gap: 3px;
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    height: 56px;
    border: none;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 500;
    
    cursor: pointer;
`;