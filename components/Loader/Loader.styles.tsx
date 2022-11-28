import styled, { keyframes } from "styled-components";
import { AnimationLoader } from "../../styles/animations";
import { prop } from "styled-tools";

export const LoaderBlock = styled.div``;

export const Loader = styled.div`
  width: 30px;
  height: 30px;
  &: after {
    content: " ";
    display: block;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 3px solid ${prop("theme.color.orangePeel")};
    border-color: ${prop("theme.color.orangePeel")} transparent;
    animation: ${AnimationLoader} 0.8s linear infinite;
  }
`;
