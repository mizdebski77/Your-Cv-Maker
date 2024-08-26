import { theme } from '@/app/core/StyledComponents/theme';
import React from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  background: string;
  padding?: string;
  margin?: string;
  hoverColor?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  background: ${({ background }) => background === 'green' ? theme.palette.green : theme.palette.blue};  
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  padding: 12px 32px;
  margin: ${({ margin }) => margin || '5px'};
  transition: 0.3s;
  font-weight: semiBold;
  
  &:hover {
    background: ${({ hoverColor }) => hoverColor === 'lightGreen' ? theme.palette.lightGreen : theme.palette.lightBlue};  
  }
`;


interface JDProps {
  text: string;
  onClick: () => void;
  padding?: string;
  margin?: string;
  background: string;
  hoverColor?: string;
}

export const Button: React.FC<JDProps> = ({ text, onClick, padding, margin, background, hoverColor, ...props }) => {
  return (
    <StyledButton
      onClick={onClick}
      background={background}
      hoverColor={hoverColor}

    >
      {text}
    </StyledButton>
  );
};
