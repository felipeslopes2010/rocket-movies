import styled from "styled-components";

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.WHITE_300};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_850};
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 14px;
    width: fit-content;
`;