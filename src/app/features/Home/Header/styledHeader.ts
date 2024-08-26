import styled from 'styled-components';
import background from '../../../common/Images/header.jpg';
import { theme } from '@/app/core/StyledComponents/theme';

export const Wrapper = styled.header`
    background-image: url(${background.src});
    background-position: center;
    background-size: cover;
    box-shadow: inset 1080px -184px 116px 5px #f7f7f7;
    min-height: 100vh;
`;

export const Title = styled.h1`
    font-size: ${theme.textSize.pageTitle};
    color: ${theme.palette.blue};
    font-weight: normal;
`;

export const TitleSpan = styled.span`
    color: ${theme.palette.green};
`;