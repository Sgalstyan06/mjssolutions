import styled from "styled-components";
import { prop } from "styled-tools";
import { breakPoint } from "../../utilities/mediaHelpers";

export const Container = styled.div`
  position: relative;
  padding: 50px 0 0 50px;
  margin: 0 auto;
  max-width: 850px;
  height: 400px;
  border-radius: 30px;
  background: ${prop("theme.color.codGray")};
  ${breakPoint.down("md")} {
    max-width: 570px;
    height: 300px;
    padding: 20px 0 0 20px;
    border-radius: 12px;
  }
  ${breakPoint.down("sm")} {
    max-width: 327px;
    height: 170px;
    padding: 20px 0 0 20px;
    border-radius: 12px;
  }
`;

export const Title = styled.h1`
  margin: 0 !important;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-transform: uppercase;
  color: ${prop("theme.color.white")};
  ${breakPoint.down("sm")} {
    font-size: 13px;
    line-height: 18px;
  }
`;

export const Description = styled.h2`
  max-width: 445px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin: 10px 0 20px;
  color: ${prop("theme.color.white")};
  ${breakPoint.down("sm")} {
    font-size: 12px;
    line-height: 1.2;
    margin: 5px 0 10px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 765px;
  height: 250px;
  bottom: 0;
  right: 0;
  z-index: 1;
  ${breakPoint.down("md")} {
    width: 568px;
    height: 185px;
  }
  ${breakPoint.down("sm")} {
    width: 325px;
    height: 108px;
  }
`;
export const ContactLink = styled.a`
  position: relative;
  z-index: 2;
`;
