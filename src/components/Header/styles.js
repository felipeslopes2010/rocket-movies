import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding: 24px 124px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;

    > h1 {
        color: ${({ theme }) => theme.COLORS.ROSE};
    }

    .header-input {
        max-width: 630px;
    }

    .user-infos {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;

        strong {
            width: fit-content;
        }

        img {
            height: 64px;
            width: 64px;
            border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;

        span {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > strong {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            cursor: pointer;
        }
    }
}
`;