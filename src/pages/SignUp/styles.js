import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 190px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

   > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.ROSE};
    }

    > p {
        font-size: 14px;
        margin-bottom: 48px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > h2 {
        font-size: 24px;
        margin-bottom: 48px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > a {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 42px;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.ROSE};

        svg {
            margin-right: 8px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    min-width: 1100px;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;