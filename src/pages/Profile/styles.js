import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    header {
        height: 144px;
        background-color: rgba(255, 133, 155, 0.05);

        > div {
            width: fit-content;
            display: flex;
            align-items: center;
            margin: 64px 0px 64px 144px;
            color: ${({ theme }) => theme.COLORS.ROSE};
            font-size: 16px;
            cursor: pointer;

            svg {
                font-size: 20px;
                margin-right: 8px;
            }

            > span { 
                font-size: 20px;
            }
        }
    }
`;

export const Form = styled.form`
    width: 340px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const Avatar = styled.div`
    width: 186px;

    margin-bottom: 64px;
    position: relative;
    
    > img {
        height: 186px;
        margin-top: -93px;
        border-radius: 50%;
    }

    > label {
        position: absolute;
        bottom: 0;
        right: 10px;
        padding: 14px;
        background-color: ${({ theme }) => theme.COLORS.ROSE};
        color: ${( {theme }) => theme.COLORS.BACKGROUND_800};
        border-radius: 50%;
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
        }
    }
`;