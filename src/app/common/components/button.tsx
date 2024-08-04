import React from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  background: string;
  padding?: string;
  margin?: string;
  hoverColor?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  background: ${({ background }) => background};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  padding: ${({ padding }) => padding || '10px'};
  margin: ${({ margin }) => margin || '5px'};

  &:hover {
    background: ${({ hoverColor }) => hoverColor || 'darken(background, 10%)'};
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
      padding={padding}
      margin={margin}
      background={background}
      hoverColor={hoverColor}
      {...props}
    >
      {text}
    </StyledButton>
  );
};
