import styled from "styled-components";
import { animated } from "react-spring";

export const LaptopScreen = styled(animated.div)`
  width: 90%;
  height: 75%;
  max-width: 30rem;
  display: grid;
  grid-template-rows: repeat(auto-fill, 2rem);
  grid-template-columns: repeat(auto-fill, 2rem);
  grid-gap: 0.3rem;
  align-items: center;
  padding-left: 4.5rem;
  position: absolute;
  overflow: hidden;
`;
