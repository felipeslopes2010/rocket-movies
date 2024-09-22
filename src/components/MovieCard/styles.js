import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: rgba(255, 133, 155, 0.05);
    padding: 32px;
    border-radius: 16px;
    border: none;
    text-align: start;
    color: ${({theme}) => theme.COLORS.WHITE};
    cursor: pointer;

    .header {
        display: flex;
        justify-content: space-between;

        > button {
            border: none;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
            color: ${({theme}) => theme.COLORS.ROSE};
            padding: 12px 16px;
            border-radius: 8px;
        }
    }

     h2 {
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

     img {
        margin-bottom: 15px;
    }
    
    p {
        margin-bottom: 15px;
        max-height: 40px;
        line-height: 20px; 
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
