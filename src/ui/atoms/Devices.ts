import styled from "styled-components";
import { animated } from "react-spring";

export const Laptop = styled(animated.img)`
  width: 35rem;
  position: relative;
  z-index: -1;
`;

export const Desktop = styled(animated.img)`
  width: 100%;
  max-width: 20rem;
  display: block;
  margin: 0 auto;
`;
