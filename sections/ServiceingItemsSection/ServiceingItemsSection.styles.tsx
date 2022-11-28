import styled from "styled-components";
import { prop } from "styled-tools";
import { breakPoint } from "../../utilities/mediaHelpers";

export const CardsContainer = styled.section`
  max-width: 1220px;
  margin: 100px auto;
  background: ${prop("theme.color.black")};
  ${breakPoint.down("md")} {
    max-width: 570px;
  }
  ${breakPoint.down("sm")} {
    margin: 50px auto 0;
    max-width: 327px;
  }
`;
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  ${breakPoint.down("sm")} {
    column-gap: 30px;
    row-gap: 20px;
  }
  ${breakPoint.down("md")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-transform: uppercase;
  color: ${prop("theme.color.white")};
  margin-bottom: 20px;

  ${breakPoint.down("sm")} {
    font-size: 28px;
    line-height: 38px;
  }
`;
