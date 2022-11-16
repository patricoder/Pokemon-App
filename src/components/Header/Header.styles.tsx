import styled, { StyledComponent } from "styled-components";
import SectionContainer from "../../theme/SectionContainer";

interface ImageInterface {
    src: string;
    alt: string;
}

export const Wrapper = styled.div(
    ({theme }) => `
        // position: relative;
        // left: -50%;
        background-color: ${theme.currentTheme.mainColor};
        // border-bottom-left-radius: 100%;
        // border-bottom-right-radius: 100%;
        // width: 200%;
        transition: background-color .3s ease-in;
    `
);

export const Container = styled(SectionContainer)`
   display: grid;
   grid-template-columns: repeat(3,1fr);
   grid-template-rows: repeat(2, auto);
   justify-content: center;
   padding-top: 1rem;
  
`;


export const Image: StyledComponent<'img', any, ImageInterface, never>  = styled.img<ImageInterface>`
    max-width: 30rem;
    margin: 0 auto;
`;