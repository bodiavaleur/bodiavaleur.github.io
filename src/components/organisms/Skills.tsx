import React from "react";
import { Laptop, TextSkill, Title } from "../../ui/atoms";
import { LaptopScreen } from "../../ui/molecules";
import {
  SkillsSection,
  SkillsPreviewScreen,
  SkillList,
} from "../../ui/organisms";
import { SectionWrapper } from "../../ui/templates";
import laptopSvg from "../../assets/laptop.svg";
import { SiTypescript } from "react-icons/si";
import { ScreenSkill } from "../atoms/";
import { AiFillHtml5, AiFillApi } from "react-icons/ai";
import { DiCss3, DiSass } from "react-icons/di";
import { SiJavascript, SiRedux, SiStyledComponents } from "react-icons/si";
import { FaReact, FaGitSquare } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { Trail } from "../molecules";

export function Skills() {
  return (
    <SectionWrapper>
      <Title>Skills</Title>
      <SkillsSection>
        <SkillList>
          <Trail>
            <TextSkill>HTML</TextSkill>
            <TextSkill>CSS</TextSkill>
            <TextSkill>SCSS</TextSkill>
            <TextSkill>JavaScript</TextSkill>
            <TextSkill>TypeScript</TextSkill>
            <TextSkill>React.js</TextSkill>
            <TextSkill>Redux</TextSkill>
            <TextSkill>Styled Components</TextSkill>
            <TextSkill>Figma</TextSkill>
            <TextSkill>Git</TextSkill>
            <TextSkill>Rest API</TextSkill>
          </Trail>
        </SkillList>
        <SkillsPreviewScreen>
          <Laptop src={laptopSvg} />

          <LaptopScreen>
            <Trail>
              <ScreenSkill icon={<AiFillHtml5 />} color="red" />
              <ScreenSkill icon={<DiCss3 />} color="blue" />
              <ScreenSkill icon={<DiSass />} color="pink" />
              <ScreenSkill icon={<SiJavascript />} color="yellow" />
              <ScreenSkill icon={<SiTypescript />} color="blue" />
              <ScreenSkill icon={<FaReact />} color="teal" />
              <ScreenSkill icon={<SiRedux />} color="indigo" />
              <ScreenSkill icon={<SiStyledComponents />} color="pink" />
              <ScreenSkill icon={<FiFigma />} color="purple" />
              <ScreenSkill icon={<FaGitSquare />} color="orange" />
              <ScreenSkill icon={<AiFillApi />} color="green" />
            </Trail>
          </LaptopScreen>
        </SkillsPreviewScreen>
      </SkillsSection>
    </SectionWrapper>
  );
}
