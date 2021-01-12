import styled from "styled-components";
import { animated } from "react-spring";

export const Light = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 0;
  pointer-events: none;
`;
