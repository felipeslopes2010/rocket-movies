import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: rgba(255, 133, 155, 0.05);
    padding: 32px;
    border-radius: 16px;

    > h2 {
        margin-bottom: 8px;
    }

    > img {
        margin-bottom: 15px;
    }
    
    > p {
        margin-bottom: 15px;
        max-height: 40px;
        line-height: 20px; 
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
