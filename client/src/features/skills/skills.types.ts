import type { IconType } from "react-icons";

export interface Skill {
  id: number;
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  id: number;
  title: string;
  icon: IconType;
  technologies: string[];
}