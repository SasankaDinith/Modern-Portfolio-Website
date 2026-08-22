import {
  Activity,
  Boxes,
  CloudCog,
  FileCode2,
  GitBranch,
  Workflow,
} from "lucide-react";

import type { Service } from "./services.types";

export const services: Service[] = [
  {
    id: 1,
    title: "Cloud Infrastructure Setup",
    description:
      "Designing secure, scalable, and cost-efficient cloud environments for modern applications and engineering teams.",
    features: [
      "Cloud architecture planning",
      "AWS and cloud-native environments",
      "Security and access configuration",
      "Performance and cost optimization",
    ],
    icon: CloudCog,
  },
  {
    id: 2,
    title: "CI/CD Pipeline Automation",
    description:
      "Building reliable delivery pipelines that automate testing, integration, deployment, and release workflows.",
    features: [
      "GitHub Actions workflows",
      "Automated testing and builds",
      "Deployment pipelines",
      "Release workflow optimization",
    ],
    icon: Workflow,
  },
  {
    id: 3,
    title: "Containerization & Deployment",
    description:
      "Containerizing applications and preparing deployment environments using modern container technologies.",
    features: [
      "Docker configuration",
      "Container optimization",
      "Kubernetes deployment support",
      "Environment consistency",
    ],
    icon: Boxes,
  },
  {
    id: 4,
    title: "Infrastructure as Code",
    description:
      "Automating infrastructure provisioning using reusable, version-controlled, and maintainable configuration.",
    features: [
      "Terraform implementation",
      "Reusable infrastructure modules",
      "Environment provisioning",
      "Infrastructure version control",
    ],
    icon: FileCode2,
  },
  {
    id: 5,
    title: "Monitoring & Observability",
    description:
      "Improving system visibility through monitoring, logging, metrics, dashboards, and alerting solutions.",
    features: [
      "Prometheus monitoring",
      "Grafana dashboards",
      "Centralized logging",
      "Alerting and incident visibility",
    ],
    icon: Activity,
  },
  {
    id: 6,
    title: "Technical Writing & Documentation",
    description:
      "Creating clear technical content that makes complex engineering systems easier to understand and use.",
    features: [
      "Technical articles",
      "Developer documentation",
      "Architecture documentation",
      "DevOps guides and tutorials",
    ],
    icon: GitBranch,
  },
];