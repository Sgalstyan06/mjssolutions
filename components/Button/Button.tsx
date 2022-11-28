import React from "react";
import * as Styled from "./Button.styles";

export interface IButtonProps {
  child?: string;
  size: number;
  disabled?: boolean;
}
const Button: React.FC<IButtonProps> = ({ child, size, disabled = false }) => {
  return (
    <Styled.Button size={size} disabled={disabled}>
      {child}
    </Styled.Button>
  );
};

export default Button;
