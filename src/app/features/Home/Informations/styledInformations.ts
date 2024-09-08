import { theme } from "@/app/core/StyledComponents/theme";
import { styled } from "styled-components";

export const Wrapper = styled.div`
    padding: 16px;
`;

export const Container = styled.div`
    background: ${theme.bodyColor};
    box-shadow: 0 0 10px;
    border-radius: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

export const InformationWrapper = styled.div`
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.75rem;
`;

export const Image = styled.img`
    max-width: 80px; 
    width: 100%;
`;

export const MainText = styled.span`

`;

export const SecondText = styled.span`
    color: ${theme.palette.green};
`;