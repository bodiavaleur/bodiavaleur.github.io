import styled from "styled-components";

export const ButtonGroup = styled.div`
  width: 100%;
  max-width: 30rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: auto;
    flex-flow: column nowrap;
  }
`;
