import styled from "styled-components";
import { breakPoint } from "../../utilities/mediaHelpers";

export const Container = styled.section`
  margin-top: 100px;
  ${breakPoint.down("sm")} {
    margin-top: 50px;
  }
`;
