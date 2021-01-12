import styled from "styled-components";

export const MyInfoSection = styled.section`
  height: 100%;
  display: grid;
  grid-template-rows: 10rem 2rem 1rem 1rem 4rem;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  grid-gap: 0.5rem;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
`;
