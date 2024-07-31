import styled from "styled-components";

export const Container = styled.section`
    width: 100%;

    > h2 {
        font-size: 20px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_400};
        
        margin-bottom: 20px;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;

        padding: 16px;

        background-color: ${({theme}) => theme.COLORS.BLACK_900};
        border-radius: 8px;
    }
`;