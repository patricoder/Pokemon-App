import styled, { StyledComponent } from "styled-components";
import SectionContainer from "../../theme/SectionContainer";

interface ImageInterface {
    src: string;
    alt: string;
}

export const Wrapper = styled.div(
    ({theme }) => `
        position: relative;
        left: -50%;
        background-color: ${theme.currentTheme.mainColor};
        border-bottom-left-radius: 100%;
        border-bottom-right-radius: 100%;
        width: 200%;
        transition: background-color .3s ease-in;
    `
);

export const Container = styled(SectionContainer)`
   position: relative;
   display: flex;
   justify-content: center;
   padding-top: 1rem;
   .toggle-switch {
    position: absolute;
    top: 20px;
    left: 0;
   }
`;

export const Image: StyledComponent<'img', any, ImageInterface, never>  = styled.img<ImageInterface>`
    max-width: 30rem;
`;