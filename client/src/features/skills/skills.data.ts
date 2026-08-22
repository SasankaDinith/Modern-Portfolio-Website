import {
  SiAnsible,
  SiDocker,

  SiGit,
  SiGithubactions,
  SiGrafana,
  SiJavascript,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNginx,

  SiPrometheus,
  SiPython,
  SiReact,
  SiTerraform,

} from "react-icons/si";

import {
  FaCloud,
  FaCode,
  FaDatabase,
  FaJava,
  FaAws,

} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

import type {
  Skill,
  SkillCategory,
} from "./skills.types";

export const skills: Skill[] = [
  {
    id: 1,
    name: "Linux",
    icon: SiLinux,
  },
  {
    id: 2,
    name: "Docker",
    icon: SiDocker,
  },
  {
    id: 3,
    name: "Kubernetes",
    icon: SiKubernetes,
  },
 
  {
    id: 5,
    name: "Azure",
    icon: VscAzure,
  },
   {
    id: 5,
    name: "AWS",
    icon: FaAws,
  },
  {
    id: 6,
    name: "Terraform",
    icon: SiTerraform,
  },
  {
    id: 7,
    name: "Ansible",
    icon: SiAnsible,
  },
  {
    id: 8,
    name: "Git",
    icon: SiGit,
  },
  {
    id: 9,
    name: "GitHub Actions",
    icon: SiGithubactions,
  },
  {
    id: 10,
    name: "Jenkins",
    icon: SiJenkins,
  },
  
  {
    id: 12,
    name: "Python",
    icon: SiPython,
  },
  {
    id: 13,
    name: "Java",
    icon: FaJava,
  },
  {
    id: 14,
    name: "JavaScript",
    icon: SiJavascript,
  },
 
  
  {
    id: 17,
    name: "React",
    icon: SiReact,
  },
 


  {
    id: 23,
    name: "MySQL",
    icon: SiMysql,
  },
  {
    id: 24,
    name: "MongoDB",
    icon: SiMongodb,
  },
 
  {
    id: 27,
    name: "Prometheus",
    icon: SiPrometheus,
  },
  {
    id: 28,
    name: "Grafana",
    icon: SiGrafana,
  },
  {
    id: 29,
    name: "Nginx",
    icon: SiNginx,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Programming Languages",
    icon: FaCode,
    technologies: [
      "Java",
      "Python",
      "JavaScript",
      "C++",
      "PHP",
      "Bash",
    ],
  },
  {
    id: 2,
    title: "Frameworks & Platforms",
    icon: SiReact,
    technologies: [
      "React",
      "Node.js",
      "Express",
      ".NET",
    
    ],
  },
  {
    id: 3,
    title: "DevOps & Cloud",
    icon: FaCloud,
    technologies: [
      "Linux",
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Terraform",
      "Ansible",
    ],
  },
  {
    id: 4,
    title: "CI/CD & Automation",
    icon: SiGithubactions,
    technologies: [
      "GitHub Actions",
      "Jenkins",
      "Git",
     
    ],
  },
  {
    id: 5,
    title: "Databases & Storage",
    icon: FaDatabase,
    technologies: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    
    ],
  },
  {
    id: 6,
    title: "Monitoring & Observability",
    icon: SiPrometheus,
    technologies: [
      "Prometheus",
      "Grafana",
      "Nginx",
      "ELK Stack",
    ],
  },
];


