import styled from "styled-components";
import { StyledComponent } from "styled-components";
interface Type {
  color?: string;
}

interface Types {
  types: string[];
}

export const Wrapper: StyledComponent<"div", any, Types, never> =
  styled.div<Types>(
    ({ types }) => `
  cursor: pointer;
  border-radius: 2rem;
  overflow: hidden;
  padding: 1.5rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
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
`;

export const Icon = styled.img``;

export const Types = styled.div`
  padding-top: 1.5rem;
  display: flex;
  gap: 1rem;
  p {
    font-size: 2rem;
    text-align: center;
    padding: 0.2rem 1.5rem;
    border-radius: .4rem;
    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px;
  }
`;
