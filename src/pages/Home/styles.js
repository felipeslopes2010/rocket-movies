import styled from "styled-components";

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
    justify-content: space-between;
    
    &[title="Menu"] {
        padding: 30px 106px 37.5px 123px;
    }
    
    &[title="Meus Filmes"] {
        display: flex;
        flex-direction: column;
        gap: 24px;

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