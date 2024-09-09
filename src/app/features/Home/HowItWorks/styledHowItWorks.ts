import { theme } from "@/app/core/StyledComponents/theme";
import { css, styled } from "styled-components";


export const Wrapper = styled.section`
    margin-top: -140px;
    position: relative;
    display: grid;
`;

export const Wave = styled.img<{ rotate?: boolean }>`
    width: 100%;

    ${({ rotate }) => rotate && css`
        transform: rotate(180deg);
    `};
`;

export const Image = styled.img`
    max-width: 720px;
`;

export const Container = styled.div`
    background: ${theme.palette.green};
    padding: 96px;
`;

export const Content = styled.div`
    max-width: 1500px;
    margin: auto;
    display: flex;
    gap: 48px;
`;

export const TextSection = styled.div`
    display: grid;
    align-items: center;

`;

export const Title = styled.h2`
    font-size: ${theme.textSize.sectionTitle};
    color: white;
    font-weight: 400;
    text-align: center;
`;

export const SectionText = styled.p`
    font-size: ${theme.textSize.text};
    color: white;
    text-align: justify;
`;
