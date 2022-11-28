import styled from "styled-components";
import { prop } from "styled-tools";
import { AnimationFadeIn } from "../../styles/animations";
import { breakPoint } from "../../utilities/mediaHelpers";

interface IImageWrrapperProps {
  dimensions: boolean | undefined;
}

export const Card = styled.div<IImageWrrapperProps>`
  max-width: ${(props) => (props.dimensions ? "370px" : "270px")};
  min-height: ${(props) => (props.dimensions ? "240px" : "270px")};
  background: ${prop("theme.color.codGray")};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  padding: ${(props) => (props.dimensions ? "25px 0;" : "0 0 25px;")};
  ${breakPoint.down("md")} {
    ${(props) =>
      props.dimensions
        ? "border-radius:12px; padding: 25px 70px;"
        : "border-radius:16px; padding: 20px 33px;"};
    min-height: 220px;
  }
  ${breakPoint.down("sm")} {
    ${(props) =>
      props.dimensions
        ? "border-radius:12px; padding: 10px 35px;"
        : "border-radius:16px; padding: 20px 33px;"};
    min-height: ${(props) => (props.dimensions ? "135px" : "165px")};
  } ;
`;
export const Title = styled.h2`
  color: ${prop("theme.color.white")};
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  transition: all ease-in-out;
  text-align: center;
  animation: ${AnimationFadeIn} 3s;
  ${breakPoint.down("md")} {
    font-size: ${prop("theme.fontSize.sm")};
    line-height: 19px;
  }
  ${breakPoint.down("sm")} {
    font-size: ${prop("theme.fontSize.xs")};
    line-height: 14px;
  }
`;
export const Children = styled.div<IImageWrrapperProps>`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 15px;
  color: ${prop("theme.color.white")};
  ${breakPoint.down("sm")} {
    font-size: 17px;
    line-height: 23px;
    margin-bottom: ${(props) => (props.dimensions ? "2px;" : "8px;")};
  }
`;

export const ImageWrrapper = styled.div<IImageWrrapperProps>`
  ${(props) => (props.dimensions ? `` : "margin: 40px 0 20px;")}
  animation: ${AnimationFadeIn} 3s;
  transition: all 0.5s ease-in-out;
  ${breakPoint.down("md")} {
    ${(props) => (props.dimensions ? "" : "padding: 0 10px; margin: 0;")}
  }
`;

export const Description = styled.h3`
  transition: all ease-in-out;
  animation: ${AnimationFadeIn} 3s;
`;
