import styled from 'styled-components';
import background from '../../../common/Images/header.jpg';
import { theme } from '@/app/core/StyledComponents/theme';

export const Wrapper = styled.header`
    background-image: url(${background.src});
    background-position: center;
    background-size: cover;
    box-shadow: inset 1080px -184px 116px 5px #f7f7f7;
    max-width: 1920px;
    min-height: 540px;
    padding: 56px 48px;
    margin: auto;

    @media (max-width: ${theme.mediaQuery.lg}) {
        padding: 40px 20px;
        min-height: 360px;
    }
`;

export const Content = styled.div`
    max-width: 990px;
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;

export const Title = styled.h1`
    font-size: ${theme.textSize.pageTitle};
    color: ${theme.palette.blue};
    font-weight: normal;
    text-align: center;

    @media (max-width: ${theme.mediaQuery.lg}) {
        font-size: ${theme.textSize.mediaPageTitle};
    };
`;

export const TitleSpan = styled.span`
    color: ${theme.palette.green};
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: ${theme.mediaQuery.lg}) {
        flex-direction: column;
        gap: 8px;
    };
`;