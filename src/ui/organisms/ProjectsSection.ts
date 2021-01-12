import styled from "styled-components";

export const ProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem 2rem 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const ProjectDescription = styled.div`
  max-width: 20rem;
  display: grid;
  grid-template-rows: 2rem auto;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
`;

export const UsedSkills = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;
