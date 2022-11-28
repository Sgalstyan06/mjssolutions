import styled from "styled-components";
import { prop } from "styled-tools";
import { breakPoint } from "../../utilities/mediaHelpers";

export const Footer = styled.footer``;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1220px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  ${breakPoint.down("md")} {
    padding: 0 20px;
  }
  ${breakPoint.down("sm")} {
    height: 150px;
    display: grid;
    grid-template-columns: 150px 140px;
    justify-content: center;
    column-gap: 30px;
    row-gap: 20px;
  }
`;

export const Logo = styled.div`
  ${breakPoint.down("md")} {
    width: 150px;
    height: 40px;
  }
`;

export const ContactInfoWrapper = styled.address`
  font-style: normal;
  display: flex;
  gap: 25px;
  ${breakPoint.down("sm")} {
    flex-direction: column;
    gap: 0;
  }
`;

export const ContactLink = styled.a`
  color: ${prop("theme.color.white")};
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  ${breakPoint.down("sm")} {
    font-size: 13px;
    line-height: 18px;
  }
`;

export const PaymentIconsWrrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  ${breakPoint.down("sm")} {
    grid-column: 1/3;
  }
`;
export const Line = styled.div`
  border: 0.5px solid ${prop("theme.color.white")};
  background: ${prop("theme.color.white")};
  height: 1px;
`;

export const CopyRight = styled.div`
  color: ${prop("theme.color.white")};
  max-width: 1220px;
  height: 30px;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`;
