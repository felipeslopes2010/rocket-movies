import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: hidden;

    > main {
        max-width: 1137px;
        margin: 0 auto;
        > header {
            > a {
                width: fit-content;
                
                display: flex;
                align-items: center;
                gap: 8px;
        
                font-size: 16px;
                margin: 40px 0px 20px;

                cursor: pointer;
            }
            
            svg {
                color: ${({ theme }) => theme.COLORS.ROSE};
            }

            span {
                color: ${({ theme }) => theme.COLORS.ROSE};
            }
        }
    }
`;

export const Content = styled.div`
    overflow-x: auto;
    max-height: 600px;
    word-break: break-word;

    overflow-y: auto;

    scrollbar-color: ${({ theme }) => theme.COLORS.ROSE} transparent;

    > .title-wrapper {
                display: flex;
                align-items: center;
                gap: 20px;
                margin-bottom: 20px;
        
                > .rate-wrapper {
                    display: flex;
                    align-items: center;
                    > img {
                        height: 20px;
                        width: 20px;
                    }
                }
           }

        > h1 {
            font-size: 36px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    
        > .information {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 40px;
    
            > img {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
            }
    
            > svg {
                width: 16px;
                height: 16px;
                color: ${({ theme }) => theme.COLORS.ROSE};
            }
    
            > span {
                font-size: 16px;
                font-weight: 400;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }
        }
    
        > .tags-wrapper {
            display: flex;
            align-items: center;
            gap: 8px;
    
            margin-bottom: 40px;
        }

        > p {
            word-break: break-word;
        }
`;