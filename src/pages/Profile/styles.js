import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;

        background-color: rgba(255, 133, 155, 0.05);

        display: flex;
        align-items: center;
    }
    
    .header-button {
        .controls {
            display: flex;
            align-items: center;

            margin: 64px 0px 64px 144px;
            
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.ROSE};

            cursor: pointer;
        }

        svg {
            font-size: 24px;
            margin-right: 8px;
        }

        span { 
            font-size: 20px;
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
    position: relative;
   
    width: 186px;
    margin-bottom: 64px;
    
    > img {
        height: 186px;
        height: 186px;
        margin-top: -93px;
        border-radius: 50%;
    }

    > label {
        position: absolute;
        bottom: 7px;
        right: 7px;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 48px;
        width: 48px;
        padding: 14px;

        background-color: ${({ theme }) => theme.COLORS.ROSE};
        border-radius: 50%;

        cursor: pointer;

        > input {
            display: none;
        }

        > svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }
`;