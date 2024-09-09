import { theme } from "@/app/core/StyledComponents/theme";
import { styled } from "styled-components";
interface StyledComponentProps {
    index: number;  
}

export const Wrapper = styled.div`
    max-width: 1500px;
    margin:  40px auto;
    background: ${theme.bodyColor};
    box-shadow: 0 0 20px 0 #cfcfcf;
    border-radius: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
`;

export const InformationWrapper = styled.div<StyledComponentProps>`
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.75rem;
    gap: 8px;

    ${({ index }) => index % 2 === 0 ? ''
        : `border-left: 2px solid ${theme.palette.green}; 
        border-right: 2px solid ${theme.palette.green};`}
`;

export const TextWrapper = styled.div`
    display: flex;
    gap: 8px;
`;
export const Image = styled.img`
    max-width: 80px;
    width: 100%;
`;

export const MainText = styled.span`

`;

export const ColoredText = styled.span`
    color: ${theme.palette.green};
`;