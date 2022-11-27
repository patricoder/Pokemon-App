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
  // min-height: 31rem;
  height: 100%;
    ${screen_breakpoints.lg} {
    flex-direction: column;
  }
`
  );

export const Text: StyledComponent<"p", any, Type, never> = styled.p(
  ({ theme }) => `
  text-transform: uppercase;
  font-size: ${theme.font.font_22};
  line-height: 3.2rem;
  text-shadow: 1px 1px 2px black;
  ${screen_breakpoints.lg} {
    font-size: 3rem;
  }
`
);
export const DetailsContainer = styled.div`
  ${Text}:first-of-type {
    text-align: left;
  }
  ${screen_breakpoints.lg} {
    ${Text}:first-of-type {
      text-align: center;
    }
  }
`;
export const Image = styled.img`
  max-width: 12.5rem;
  width: 100%;
  max-height: 14rem;
  /* margin-right: 2rem; */
  ${screen_breakpoints.lg} {
    margin-right: 2rem;
  }
`;

export const Types = styled.div`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
