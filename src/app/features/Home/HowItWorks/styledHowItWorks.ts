import { theme } from "@/app/core/StyledComponents/theme";
import { css, styled } from "styled-components";


export const Wrapper = styled.section`
    margin-top: -140px;
    position: relative;
    display: grid;
`;

export const Image = styled.img<{ rotate?: boolean }>`
    width: 100%;

    ${({ rotate }) => rotate && css`
        transform: rotate(180deg);
    `};
`;

export const Container = styled.div`
    background: ${theme.palette.green};
    padding: 96px;
`;
