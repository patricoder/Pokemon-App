import styled from "styled-components";
import { StyledComponent } from "styled-components";
import screen_breakpoints from "../../theme/screen_breakpoints";
interface Type {
  color?: string;
}

interface WrapperTypes {
  types: string[];
}

export const Wrapper: StyledComponent<"div", any, WrapperTypes, never> =
  styled.div<WrapperTypes>(
    ({ types }) => `
  cursor: pointer;
  border-radius: 2rem;
  overflow: hidden;
  padding: 1.5rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  ${screen_breakpoints.lg} {
    flex-direction: column;
  }
`
  );

export const DetailsContainer = styled.div``;

export const Text: StyledComponent<"p", any, Type, never> = styled.p`
  text-transform: uppercase;
  font-size: 3rem;
  line-height: 3.2rem;
  text-shadow: 1px 1px 2px black;
`;

export const Image = styled.img`
  max-width: 12.5rem;
  height: 14rem;
  margin-right: 2rem;
  ${screen_breakpoints.lg} {
    margin-right: 0;
  }
`;

export const Types = styled.div`
  padding-top: 1.5rem;
  display: flex;
  gap: 1rem;

`;
