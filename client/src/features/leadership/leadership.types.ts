export type LeadershipAccent =
  | "blue"
  | "purple"
  | "cyan";

export type LeadershipExperience = {
  id: number;

  title: string;

  organization: string;

  period: string;

  description: string;

  image: string;

  link?: string;
};