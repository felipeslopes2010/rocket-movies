import styled from "styled-components";


export const Container = styled.div`
    > main {
        padding: 30px 106px 83px 123px;
        max-width: 1137px;
        margin: 0px auto;
    }

    .back-container {
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.ROSE};
        cursor: pointer;
    }

    .back-container:hover {
        opacity: 0.8;
    }
`;

export const Form = styled.form`
    > h1 {
        margin: 20px 0px 20px;
        font-size: 36px;
        font-weight: 500;
    }

    > .input-wrapper {
        display: flex;
        gap: 40px;
    }
`;