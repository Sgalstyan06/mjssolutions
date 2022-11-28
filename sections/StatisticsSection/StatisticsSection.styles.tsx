import styled from "styled-components";
import { prop } from "styled-tools";
import { breakPoint } from "../../utilities/mediaHelpers";

export const WhyChooseUsContainer = styled.section`
  max-width: 1220px;
  margin: auto;
  max-width: 1170px;
  background: ${prop("theme.color.black")};
  ${breakPoint.down("md")} {
    max-width: 570px;
  }
  ${breakPoint.down("sm")} {
    max-width: 327px;
    margin-top: 50px;
  }
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  justify-content: center;
  ${breakPoint.down("md")} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${breakPoint.down("sm")} {
    column-gap: 30px;
    row-gap: 20px;
  }
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: ${prop("theme.color.white")};
  ${breakPoint.down("sm")} {
    font-size: 28px;
    line-height: 38px;
  }
`;
export const Description = styled.p`
  max-width: 570px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin: 0 !important;
  color: ${prop("theme.color.white")};
  margin: 10px 0 50px;
  span {
    color: ${prop("theme.color.burgundyColorText")};
  }
  ${breakPoint.down("md")} {
    margin: 10px 0 15px 0 !important;
    font-size: 14px;
    line-height: 19px;
  }
`;

export const Header = styled.div``;
export const StatisticHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  ${breakPoint.down("md")} {
    display: block;
    margin-bottom: 35px;
  }
`;
export const StatisticButton = styled.div`
  align-self: end;
`;
