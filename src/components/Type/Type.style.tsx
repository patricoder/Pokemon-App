import styled, { StyledComponent } from "styled-components";
import screen_breakpoints from "../../theme/screen_breakpoints";

interface Image {
  src: string;
}

export const Wrapper = styled.div`
  display: flex;
  gap: 0.7rem;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px;
  padding: 0.5rem 1.2rem;
  border-radius: 0.4rem;
  margin: 0 0.5rem;
`;

export const Text = styled.p(
  ({ theme }) => `
  color: ${theme.colors.white};
  font-size: ${theme.font.font_14};
  ${screen_breakpoints.lg} {
    font-size: ${theme.font.font_18};
  }
`
);

export const Image: StyledComponent<
  "img",
  any,
  Image,
  never
> = styled.img<Image>`
  max-width: 1.8rem;
`;
