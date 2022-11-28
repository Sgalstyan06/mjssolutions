import styled from "styled-components";
import { prop } from "styled-tools";
import { breakPoint, breakPoints } from "../../utilities/mediaHelpers";

export const Container = styled.section`
  max-width: 2200px;
  margin: auto;
  position: relative;
  width: 100%;
  height: 600px;
  ${breakPoint.down("sm")} {
    height: auto;
  }
`;

export const FormImageWrraper = styled.div`
  position: absolute;
  width: 50%;
  left: 0;
  ${breakPoint.down("sm")} {
    position: static;
    width: 100%;
    height: 210px;
  }
`;

export const ImageWrrapper = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  ${breakPoint.down("sm")} {
    height: 210px;
    &:after {
      content: " ";
      display: block;
      height: 20px;
      background: ${prop("theme.color.codGray")};
      position: relative;
      top: calc(100% - 20px);
      border-radius: 0 30px 0 0;
    }
  }
`;

export const FormContainer = styled.div`
  background: linear-gradient(
    to left,
    transparent 0%,
    ${prop("theme.color.codGray")} 90%,
    ${prop("theme.color.codGray")} 100%
  );
  margin-top: 28px;
  width: 55%;
  height: 550px;
  position: absolute;
  right: 0;
  border-radius: 30px 0px 0px 30px;
  padding: 26px 0 26px 100px;
  ${breakPoint.down("sm")} {
    position: static;
    background: ${prop("theme.color.codGray")};
    width: 100%;
    border-radius: 0 0 30px 0;
    padding: 0;
    margin: 0;
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-transform: uppercase;
  color: ${prop("theme.color.white")};
  span {
    color: ${prop("theme.color.burgundyColorText")};
  }

  ${breakPoint.down("sm")} {
    font-size: 28px;
    line-height: 38px;
    max-width: 327px;
    margin: auto;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 22px;
  max-width: 470px;
  color: ${prop("theme.color.white")};
  ${breakPoint.down("sm")} {
    font-size: 14px;
    line-height: 19px;
    max-width: 327px;
    margin: 10px auto 10px;
  }
`;
