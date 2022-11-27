import styled from "styled-components";
import screen_breakpoints from "../../theme/screen_breakpoints";
import SectionContainer from "../../theme/SectionContainer";

export const Wrapper = styled.div(
  ({ theme }) => `
  width: 100%;
  min-height: 100%;
  color: ${theme.currentTheme.fontColor};
  `
);

export const Container = styled(SectionContainer)(
  ({ theme }) => `
          padding-top: 5rem;
          min-height: 100%;
          display: grid;
          flex-wrap: wrap;
          grid-template-columns: repeat(1, 1fr);
          // grid-template-rows: minmax(10px, 60px);
          grid-gap: 1rem 2rem;
          ${screen_breakpoints.sm} {
            grid-template-columns: repeat(2, 1fr);
          }
          ${screen_breakpoints.lg} {
            grid-template-columns: repeat(4, 1fr);
          }
    `
);
