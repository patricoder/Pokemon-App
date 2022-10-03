import styled from "styled-components";
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
          min-height: 100%;
    `
);
