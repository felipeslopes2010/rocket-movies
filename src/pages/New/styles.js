import styled from "styled-components";

export const Container = styled.div`

    > main {
        padding: 40px 106px 83px 123px;
        max-width: 1137px;
        margin: 0px auto;
    }
`;

export const Form = styled.form`
    > header {
        > svg, span {
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.ROSE};
        }

        > h1 {
            margin: 20px 0px 20px;
            font-size: 36px;
            font-weight: 500;
        }
    }

    > .input-wrapper {
            display: flex;
            gap: 40px;
    }

    > .button-wrapper {
        display: flex;
        align-items: center;
        gap: 40px;
    }
`;