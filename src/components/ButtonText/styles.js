import styled from "styled-components";

export const Container = styled.button`
        background: none;
        border: none;
        font-size: 16px;
        line-height: 0px;
        color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.ROSE : theme.COLORS.GRAY_100};
`;