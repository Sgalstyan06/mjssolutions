import styled from "styled-components";

interface IHeroContainer {
  lightBackground: boolean;
}

export const Container = styled.div`
  margin: 0 auto;
`;

export const Wrraper = styled.div<IHeroContainer>`
  ${(props) => (props.lightBackground ? "opacity: 0.5" : "")}
`;
