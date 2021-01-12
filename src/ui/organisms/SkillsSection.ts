import styled from "styled-components";

export const SkillsSection = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 10rem auto;
  align-items: center;
  justify-content: center;
`;

export const SkillList = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, 1.25rem);
  grid-gap: 1rem;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
`;

export const SkillsPreviewScreen = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
