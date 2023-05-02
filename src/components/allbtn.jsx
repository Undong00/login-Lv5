import React from "react";
import styled from "styled-components";
// 만능 버튼
const StyledButton = styled.button`
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #333333;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #333333;
    color: #ffffff;
  }
`;

const Button = ({ onClick, disabled, children }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
