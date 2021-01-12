import styled from "styled-components";

interface ButtonProps {
  active?: boolean;
}

export const Button = styled.button<ButtonProps>`
  min-width: 4rem;
  margin: 0.5rem;
  padding: 0.2rem 0.4rem;
  border: 1px solid rgba(199, 199, 214, 0.5);
  border-radius: 0.3rem;
  outline: none;
  font-size: 0.9rem;
  background: rgba(199, 199, 214, 0.1);
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    border: 1px solid rgba(199, 199, 214, 0.5);
    background: rgba(199, 199, 214, 0.7);
    opacity: 1;
  `};
`;
