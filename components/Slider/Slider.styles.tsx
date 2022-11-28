import styled from "styled-components";
import { breakPoint, breakPoints } from "../../utilities/mediaHelpers";
import { ifProp, prop } from 'styled-tools';

interface IEmbladot {
  selected: boolean;
}

export const Embla = styled.div`
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const EmblaContainer = styled.div`
  display: flex;
  gap: 30px;
  height: 400px;
  align-items: flex-end;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-left: -10px;
  ${breakPoint.down("md")} {
    height: 300px;
  }
  ${breakPoint.down("sm")} {
    height: 180px;
    gap: 10px;
  }
`;

export const EmblaSlide = styled.div`
  position: relative;
  min-width: 770px;
  ${breakPoint.down("md")} {
    min-width: 570px;
  }
  ${breakPoint.down("sm")} {
    min-width: 320px;
  }
`;

export const EmblaSlideInner = styled.div<IEmbladot>`
  position: relative;
  overflow: hidden;
  height: 350px;
  cursor: grab;
  ${(props) =>
    props.selected
      ? "opacity: 1; transform: translate(0, -50px); transition: 2s;"
      : "opacity: 0.4;"};

  ${breakPoint.down("md")} {
    height: 240px;
    ${(props) =>
      props.selected
        ? "opacity: 1; transform: translate(0, -40px); transition: 2s;"
        : "opacity: 0.4;"}
  }
  ${breakPoint.down("sm")} {
    height: 160px;
    border-radius: 10px;
    ${(props) =>
      props.selected
        ? "opacity: 1; transform: translate(0, -17px); transition: 2s;"
        : "opacity: 0.4;"}
  }
`;
export const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  min-width: 580px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  ${breakPoint.down("sm")} {
    min-width: auto;
    width: 90%;
  }
  ${breakPoint.down("xs")} {
    min-width: 200px;
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-size: 1.875rem;
  line-height: 2.375rem;
  color: ${prop("theme.color.white")};
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: ${prop("theme.color.white")};
`;

export const Button = styled.button`
  background-color: ${prop("theme.color.orangePeel")};
  letter-spacing: 3px;
  border-radius: 10px;
  color: ${prop("theme.color.white")};
  border: none;
`;

export const EmblaSlideImg = styled.div`
  border-bottom: 5px solid ${prop("theme.color.burgundyColor")};
  border-left: 30px solid ${prop("theme.color.codGray")};
  border-right: 30px solid ${prop("theme.color.codGray")};
  border-radius: 30px;
  background-color: ${prop("theme.color.codGray")};
  padding: 60px 20px 20px;
  position: relative;
  top: 50%;
  left: 50%;
  width: auto;
  min-height: 100%;
  min-width: 100%;
  max-width: none;
  transform: translate(-50%, -50%);
  ${breakPoint.down("md")} {
    border-left: 10px solid ${prop("theme.color.codGray")};
    border-right: 10px solid ${prop("theme.color.codGray")};
    border-bottom: 3px solid ${prop("theme.color.burgundyColor")};
    padding: 15px 5px;
    border-radius: 10px;
  }

  ${breakPoint.down("sm")} {
    border-left: 10px solid ${prop("theme.color.codGray")};
    border-right: 10px solid ${prop("theme.color.codGray")};
    border-bottom: 2.5px solid ${prop("theme.color.burgundyColor")};
    padding: 15px 5px;
    border-radius: 10px;
  }
`;
export const EmblaDots = styled.div`
  display: flex;
  list-style: none;
  justify-content: center;
  transform: translate(0, -10px);
  ${breakPoint.down("sm")} {
    transform: translateY(0);
  }
`;

export const EmblaDot = styled.div<IEmbladot>`
  background-color: transparent;
  cursor: pointer;
  position: relative;
  padding: 0;
  outline: 0;
  border: 0;
  width: 30px;
  height: 30px;
  margin-right: 7.5px;
  margin-left: 7.5px;
  display: flex;
  align-items: center;
  &:after {
    background-color: ${prop("theme.color.burgundyColor")};
    opacity: 0.5;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    content: "";
  }
  ${(props) =>
    props.selected
      ? `
        &:after {
          opacity: 1;
        }
      `
      : ""};
  ${breakPoint.down("sm")} {
    width: 15px;
    height: auto;
    margin-right: 1.5px;
    margin-left: 1.5px;
    &:after {
      height: 3px;
      border-radius: 9px;
    }
  }
`;

export const Name = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-transform: uppercase;
  align-self: center;
  color: ${prop("theme.color.white")};
  ${breakPoint.down("sm")} {
    font-size: 14px;
    line-height: 19px;
  }
`;

export const Comment = styled.h2`
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 3px;
    background: ${prop("theme.color.scrollbarColor")};
  }
  ::-webkit-scrollbar-thumb {
    background: ${prop("theme.color.scrollbarThumbColor")};
    border-radius: 3px;
  }
  margin-top: 30px;
  max-height: 154px;
  overflow-y: auto;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${prop("theme.color.white")};
  ${breakPoint.down("md")} {
    margin-top: 10px;
    font-size: ${prop("theme.fontSize.sm")};
    line-height: 19px;
  }
  ${breakPoint.down("sm")} {
    font-size: 12px;
    line-height: 1.2;
    max-height: 102px;
    padding-bottom: 1px;
  }
`;

export const TitleWrrapper = styled.div`
  position: relative;
  display: flex;
  gap: 50px;
  ${breakPoint.down("sm")} {
    gap: 15px;
  }
`;

export const IconWrapper = styled.div`
  ${breakPoint.down("md")} {
    width: 40px;
    height: 40px;
  }
  ${breakPoint.down("sm")} {
    width: 20px;
    height: 16px;
  }
`;
