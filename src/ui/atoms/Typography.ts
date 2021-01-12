import styled, { css } from "styled-components";
import { animated } from "react-spring";

const textDefaults = css`
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => theme.colors.text.dark};
  font-weight: 300;
  user-select: none;
`;

export const Name = styled.h1`
  ${textDefaults};
  font-size: 2rem;
  font-weight: 500;
`;

export const AboutMe = styled.span`
  ${textDefaults};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Location = styled(AboutMe)`
  font-size: 0.875rem;

  svg {
    margin: 0 0.3rem;
  }
`;

export const Title = styled(animated.h2)`
  ${textDefaults};
  padding-left: 1.5rem;
  font-size: 2.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
    text-align: center;
  }
`;

export const Subtitle = styled.h4`
  ${textDefaults};
  font-size: 0.9rem;
  font-weight: 300;
  opacity: 0.4;
  color: ${({ theme }) => theme.colors.white};
`;

export const TextSkill = styled(animated.span)`
  ${textDefaults};
  margin: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  opacity: 0.6;
  color: ${({ theme }) => theme.colors.white};
`;
