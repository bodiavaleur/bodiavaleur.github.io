export type ProjectKeys =
  | "food"
  | "notify"
  | "millionaire"
  | "imoovie"
  | "mntn";

export interface Project {
  [key: string]: {
    // TODO: fix any
    svg: any;
    skills: string[];
    links: { git: string; web: string };
  };
}

export interface ProjectLabel {
  key: ProjectKeys;
  label: string;
}
