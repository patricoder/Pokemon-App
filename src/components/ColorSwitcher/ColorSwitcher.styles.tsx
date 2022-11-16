import styled, { StyledComponent } from "styled-components";
import { ArrayDestructuringAssignment } from "typescript";

interface Props {
    className?: string;
    toggle?: string;
}
interface Image {
    src: string;
}
export const Label = styled.label`
  border-radius: 25px;
  background-color: white;
  width: 50px;
  height: 25px;
  perspective: 1000px;
`;

export const Input = styled.input`
  display: none;
`;

export const Span = styled.div`
`;

export const Div: StyledComponent<"div", any, Props, never> = styled.div<Props>(
  ({toggle}) => `
  &.switch {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s ease-in;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    padding: 0 0.3rem;
    transform: ${toggle === "light" ? "none" : "rotateY(180deg)"};
  }
  &.switch-front,
  &.switch-back {
    background-color: transparent;
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    cursor: pointer;
  }

  &.switch-front {
    color: black;
  }
  &.switch-back {
    color: white;
    transform: rotateY(180deg);
  }
`);

export const Image: StyledComponent<'img', any, Image, never> = styled.img<Image>``;
