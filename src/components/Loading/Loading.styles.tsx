import styled, { keyframes } from "styled-components";

// interface Image {

// }

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`;

export const Image = styled.img`
  animation: ${rotate} 3s linear infinite;
`;
