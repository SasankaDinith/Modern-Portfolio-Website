import {
  BrainCircuit,
  CloudCog,
  Infinity,
  ServerCog,
} from "lucide-react";

export const expertiseItems = [
  {
    title: "Cloud Infrastructure & Architecture",
    description:
      "Designing scalable and resilient cloud infrastructure with AWS, focusing on secure architectures, networking, high availability, disaster recovery, multi-region strategies, and cost-conscious deployments.",
   
    icon: CloudCog,
  },
  {
    title: "DevOps & Automation",
    description:
      "Automating software delivery and infrastructure workflows through CI/CD, Git, Docker, Jenkins, GitHub Actions, and Terraform. Focused on reducing manual effort, improving deployment consistency, and building repeatable workflows across development and infrastructure environments.",
  
    icon: Infinity,
  },
  {
    title: "Kubernetes & Cloud-Native Engineering",
    description:
      "Working with Kubernetes to deploy, manage, and troubleshoot containerized workloads while exploring cloud-native architecture, Helm, GitOps, service networking, and scalable application platforms. Hands-on experience with Minikube and Kubernetes-based monitoring environments.",
    
    icon: ServerCog,
  },
  {
    title: "Site Reliability & Observability",
    description:
      "Building monitoring and observability solutions around the three pillars of metrics, logs, and traces. Hands-on experience with Prometheus, Grafana, Alertmanager, Node Exporter, kube-state-metrics, PromQL, and Kubernetes monitoring to understand system health, detect issues, and improve reliability.",
  
    icon: BrainCircuit,
  },
  {
    title: "Linux & Infrastructure Engineering",
    description:
      "Managing Linux-based infrastructure across Ubuntu and RHEL, with practical experience in system administration, networking, storage, package management, LVM, network configuration, troubleshooting, port forwarding, and service management. Focused on understanding systems from the operating-system level upward.",
    
    icon: ServerCog,
  },
  {
    title: "AI-Enhanced Engineering",
    description:
      "Exploring how AI can enhance infrastructure engineering, automation, monitoring, troubleshooting, and operational decision-making. Developing concepts around AI-driven predictive monitoring and automated remediation for cloud-native environments while experimenting with AI-assisted engineering workflows.",
  
    icon: BrainCircuit,
  }
] as const;