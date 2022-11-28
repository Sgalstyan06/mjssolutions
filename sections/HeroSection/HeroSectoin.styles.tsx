import styled from "styled-components";
import { prop } from "styled-tools";
import { breakPoint } from "../../utilities/mediaHelpers";

export const HeroContainer = styled.section`
  position: relative;
  max-width: 2200px;
  height: 500px;
  margin: 0 auto;
  width: 100%;
  ${breakPoint.down("sm")} {
    height: auto;
  }
`;
export const HeroSectionsInfoContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 54%;
  height: 420px;
  border-radius: 0px 30px 30px 0px;
  margin-top: 40px;
  padding-right: 100px;
  display: grid;
  justify-content: flex-end;
  align-content: center;
  background: linear-gradient(
    to right,
    transparent 0%,
    ${prop("theme.color.codGray")} 90%,
    ${prop("theme.color.codGray")} 100%
  );
  ${breakPoint.down("sm")} {
    position: static;
    background: ${prop("theme.color.codGray")};
    width: 100%;
    height: 320px;
    margin-top: 0;
    padding: 0 24px 46px;
    border-radius: 0 30px 0 0;
    display: grid;
    justify-content: center;
  }
`;

export const HeroSectionsInfo = styled.div`
  max-width: 370px;

  ${breakPoint.down("md")} {
    padding-left: 20px;
  }

  ${breakPoint.down("sm")} {
    margin: 0 auto;
    padding: 0;
  }
`;
export const HeroImageWrrapper = styled.div`
  width: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  ${breakPoint.down("sm")} {
    position: static;
    width: 100%;
  }
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  ${breakPoint.down("sm")} {
    height: 210px;
    span {
      border-radius: 0 0 30px 0;
    }
  }
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-transform: uppercase;
  margin: 0;
  color: ${prop("theme.color.white")};
  span {
    color: ${prop("theme.color.burgundyColorText")};
  }
  ${breakPoint.down("sm")} {
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
  }
`;
export const Description = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin: 10px 0 15px;
  color: ${prop("theme.color.white")};
  ${breakPoint.down("sm")} {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }
`;
