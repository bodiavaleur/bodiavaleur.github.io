import React, { useState } from "react";
import { Button, Desktop, Subtitle, TextSkill, Title } from "../../ui/atoms";
import {
  ProjectsSection,
  UsedSkills,
  ProjectDescription,
} from "../../ui/organisms";
import { SectionWrapper } from "../../ui/templates";
import { ButtonGroup, Links } from "../../ui/molecules";
import { IconLink } from "../atoms";
import { AiFillGithub } from "react-icons/ai";
import { projectsData, projectsLabels } from "../../projects";
import { GoLink } from "react-icons/go";
import { Trail } from "../molecules";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(projectsData.imoovie);
  const [activeKey, setActiveKey] = useState("imoovie");

  const handleSelect = (project: string) => {
    setSelectedProject(projectsData[project]);
    setActiveKey(project);
  };

  return (
    <SectionWrapper>
      <Title>Projects</Title>
      <ProjectsSection>
        <ButtonGroup>
          {projectsLabels.map((project, idx) => (
            <Button
              key={idx}
              onClick={() => handleSelect(project.key)}
              active={project.key === activeKey}
            >
              {project.label}
            </Button>
          ))}
        </ButtonGroup>
        <Desktop src={selectedProject.svg} />

        <ProjectDescription>
          <Subtitle>Technologies:</Subtitle>

          <UsedSkills>
            <Trail>
              {selectedProject.skills.map((skill, idx) => (
                <TextSkill key={idx}>{skill}</TextSkill>
              ))}
            </Trail>
          </UsedSkills>
          <Links>
            <IconLink
              white
              to={selectedProject.links.git}
              icon={<AiFillGithub />}
            />
            <IconLink white to={selectedProject.links.web} icon={<GoLink />} />
          </Links>
        </ProjectDescription>
      </ProjectsSection>
    </SectionWrapper>
  );
}
