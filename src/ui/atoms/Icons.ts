import styled from "styled-components";

interface SkillIconProps {
  color: string;
}

interface ContactIconProps {
  white?: boolean;
}

export const ContactIcon = styled.a<ContactIconProps>`
  height: 2rem;
  font-size: 2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.dark};

  ${({ theme, white }) =>
    white &&
    `
    color: ${theme.colors.white};
    opacity: 0.5;
  `};
`;

export const SkillIcon = styled.span<SkillIconProps>`
  font-size: 1.5rem;
  text-align: center;
  opacity: 0.85;
  color: ${({ theme, color }) => theme.colors[color]};
`;
