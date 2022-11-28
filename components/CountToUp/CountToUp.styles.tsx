import styled from "styled-components";
import { prop } from "styled-tools";
import { breakPoint } from "../../utilities/mediaHelpers";

export const CountUpWrrapper = styled.div`
  color: ${prop("theme.color.white")};
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;

  ${breakPoint.down("sm")} {
    font-size: 17px;
    line-height: 23px;
  }
`;
