import styled from "styled-components";
import { breakPoint } from "../../utilities/mediaHelpers";

export const Container = styled.section`
  max-width: 1220px;
  margin: 100px auto;
  ${breakPoint.down("sm")} {
    margin: 50px auto;
  }
`;
