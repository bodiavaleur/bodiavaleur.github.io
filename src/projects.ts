import { Project, ProjectLabel } from "./types/ProjectsTypes";

import desktopImoovie from "./assets/desktopImoovie.svg";
import desktopNotify from "./assets/desktopNotify.svg";
import desktopMillionaire from "./assets/desktopMillionaire.svg";
import desktopFood from "./assets/desktopFood.svg";
import desktopMntn from "./assets/desktopMntn.svg";

export const projectsData: Project = {
  food: {
    svg: desktopFood,
    skills: [
      "HTML",
      "CSS",
      "React.js",
      "JavaScript",
      "TypeScript",
      "Styled-Components",
      "React Router",
      "Axios",
    ],
    links: {
      git: "https://github.com/bodiavaleur/food",
      web: "https://bodiavaleur.github.io/food/",
    },
  },
  notify: {
    svg: desktopNotify,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Redux",
      "Styled-Components",
    ],
    links: {
      git: "https://github.com/bodiavaleur/notify",
      web: "https://bodiavaleur.github.io/notify",
    },
  },
  millionaire: {
    svg: desktopMillionaire,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Styled-Components",
      "Redux",
      "React Router ",
    ],
    links: {
      git: "https://github.com/bodiavaleur/genesis-test",
      web: "https://bodiavaleur.github.io/genesis-test/",
    },
  },
  imoovie: {
    svg: desktopImoovie,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Styled-Components",
      "Redux",
      "Formik",
      "Axios",
      "Firebase",
      "React Router ",
    ],
    links: {
      git: "https://github.com/bodiavaleur/imoovie",
      web: "http://i-moovie.web.app/",
    },
  },
  mntn: {
    svg: desktopMntn,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Styled-Components"],
    links: {
      git: "https://github.com/bodiavaleur/mntn",
      web: "https://bodiavaleur.github.io/mntn/",
    },
  },
};

export const projectsLabels: ProjectLabel[] = [
  { key: "imoovie", label: "Imoovie" },
  { key: "millionaire", label: "Millionaire" },
  { key: "food", label: "Food" },
  { key: "notify", label: "Notify" },
  { key: "mntn", label: "MNTN" },
];
