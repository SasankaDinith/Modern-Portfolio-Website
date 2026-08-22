import type { LucideIcon } from "lucide-react";

export interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  description?: string[];
  tags?: string[];
}

export interface TimelineSection {
  title: string;
  icon: LucideIcon;
  entries: TimelineEntry[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  verificationUrl: string;
}

export interface HonorRecognition {
  id: number;
  title: string;
  issuer: string;
  description: string;
  image?: string;
  link?: string;
}