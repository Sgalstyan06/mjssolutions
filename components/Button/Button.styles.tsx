import styled from "styled-components";
import { prop } from "styled-tools";
import { IButtonProps } from "./Button";
import { ButtonSize } from "../../constants/sizes";

type IButtonStyles = {
  width: string;
  height: string;
  fontSize: string;
  lineHeight: string;
};

const ButtonStyles: { [Key: number]: IButtonStyles } = {
  [ButtonSize.XS]: {
    width: "70px",
    height: "30px",
    fontSize: "14px",
    lineHeight: "19px",
  },
  [ButtonSize.SM]: {
    width: "70px",
    height: "40px",
    fontSize: "14px",
    lineHeight: "19px",
  },
  [ButtonSize.MD]: {
    width: "120px",
    height: "50px",
    fontSize: "16px",
    lineHeight: "22px",
  },
  [ButtonSize.LG]: {
    width: "155px",
    height: "50px",
    fontSize: "16px",
    lineHeight: "22px",
  },
  [ButtonSize.XXL]: {
    width: "200px",
    height: "40px",
    fontSize: "14px",
    lineHeight: "19px",
  },
  [ButtonSize.XXXL]: {
    width: "240px",
    height: "50px",
    fontSize: "16px",
    lineHeight: "22px",
  },
};

export const Button = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${(props) => ButtonStyles[props.size].width};
  height: ${(props) => ButtonStyles[props.size].height};
  font-weight: 700;
  font-size: ${(props) => ButtonStyles[props.size].fontSize};
  line-height: ${(props) => ButtonStyles[props.size].lineHeight};
  border: none;
  text-transform: uppercase;
  background: ${prop("theme.color.orangePeel")};
  border-radius: 100px;
  cursor: pointer;
  &:hover {
    background: ${prop("theme.color.yellowOrange")};
  }
`;
