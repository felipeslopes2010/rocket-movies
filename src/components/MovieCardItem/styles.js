import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    max-width: 300px;
    padding: 16px;
    border-radius: 10px;

    > input {
        width: auto;
        max-width: 300px;
        box-sizing: border-box;

        color: ${({ theme }) => theme.COLORS.WHITE_900};

        background: transparent;
        border: none;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    ${({ isNew, theme }) => 
            isNew && `
                background-color: transparent;
                border: 2px dashed ${theme.COLORS.GRAY_300};
            `
        }

    > button {
        background: transparent;
        border: none;

        > svg {
            font-size: 24px;
            color: ${({ theme }) => theme.COLORS.ROSE}; 
        }
    }
`;
