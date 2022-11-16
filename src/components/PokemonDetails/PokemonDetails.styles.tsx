import styled, { StyledComponent } from "styled-components";
import SectionContainer from "../../theme/SectionContainer";

interface Image {
  src?: string;
}

interface Wrapper {
  style?: string;
}

interface ProgressBar {
  width: number;
}
export const Container = styled(SectionContainer)`
  &.main {
    display: grid;
    gap: 2rem;
  }
`;

export const Wrapper: StyledComponent<"div", any, Image, never> = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
  }
  .arrow-image {
    font-size: 4rem;
    color: white;
    line-height: 7rem;
  }
  margin-bottom: 1rem;
`;
export const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PokeBasicCol = styled(Col)`
  gap: 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Bold = styled.p(
  ({ theme }) => `
  min-width: 10rem;
  font-family: sans-serif;
  font-weight: ${theme.weight.semiBold};
  font-size: ${theme.font.font_14}
`
);

export const Text = styled.p(
  ({ theme }) => `
        text-transform: uppercase;
        color: ${theme.currentTheme.fontColor};
        font-size: ${theme.font.font_30};
    `
);

export const StatTitle = styled(Bold)(
  ({ theme }) => `
   text-transform: uppercase;
   min-width: 12rem;
 `
);
export const StatDesc = styled.div(
  ({ theme }) => `
  display: flex;
  align-items: center;
  width: 100%;
  `
);

export const StatDescContent = styled.div(
  ({ theme }) => `
    position: relative;
    font-size: ${theme.font.font_18};  
    min-width: 3rem;
  `
);

export const ProgressContainer = styled.div(
  ({ theme }) => `
    width: 100%;
    background-color: ${theme.colors.gray};
    height: .9rem;
    border-radius: 10px;
    overflow: hidden;
  `
);

export const ProgressBar: StyledComponent<"div", any, ProgressBar, never> =
  styled.div<ProgressBar>(
    ({ theme, width }) => `
    width: ${width}%;
    background-color: ${theme.colors.psychic};
    height: .9rem;
    border-radius: 10px;
  `
  );

export const Image: StyledComponent<
  "img",
  any,
  Image,
  never
> = styled.img<Image>`
  max-width: 22rem;
  width: 100%;
  margin: 0 auto;
`;
