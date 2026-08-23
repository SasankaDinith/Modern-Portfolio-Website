import type { Project } from "./projects.types";

export const projects: Project[] = [
  {
    id: 1,
    slug: "Automated CI/CD Pipeline with Jenkins, SonarQube, Docker and AWS",
    title: "Automated CI/CD Pipeline with Jenkins, SonarQube, Docker and AWS",
    description:
      "A fully automated CI/CD pipeline that integrates Jenkins, SonarQube, Docker, and AWS for seamless application deployment.",
    image: "/Projects/Jenkins Project.png",
    technologies: ["Jenkins", "AWS", "Docker", "Linux", "SonarQube", "GitHub Webhooks"],
    category: "DevOps",
    githubUrl: "https://github.com/SasankaDinith/Automated-Jenkins-CI-CD-Pipeline-with-Sonarqube-Docker-Github-Webhooks-and-AWS",
    liveUrl: "https://your-portfolio-domain.com",
    featured: true,
  },
  {
    id: 2,
    slug: "Cross-Cloud Site-to-Site VPN Between AWS and Microsoft Azure",
    title: "Cross-Cloud Site-to-Site VPN Between AWS and Microsoft Azure",
    description:
      "A secure and reliable site-to-site VPN solution connecting AWS and Microsoft Azure environments.",
    image: "/Projects/AWS & Azure S2S.png",
    technologies: [
      "AWS",
      "EC2",
      "NAT gateway",
      "Azure",
      "VPC"
    ],
    category: "Cloud",
    githubUrl: "https://github.com/SasankaDinith/Site-to-Site-VPN-Connectivity-between-AWS-and-Microsoft-Azure",
    liveUrl: "https://your-portfolio-domain.com",
    featured: true,
  },
  {
    id: 3,
    slug: "MoodMirror – A Real-Time Mental Health Companion",
    title: "MoodMirror – A Real-Time Mental Health Companion",
    description:
      "MoodMirror is an AI-powered real-time mental health companion that detects emotions through facial expressions, speech tone, and body language and provides personalized wellness feedback.",
    image: "/Projects/Moodmirror.png",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "OpenCV",
      "Pytorch",
      "GitHub"
    ],
    category: "University Group Project",
    githubUrl: "https://github.com/SasankaDinith/MOODMIRROR-ICTProject",
    liveUrl: "https://your-portfolio-domain.com",
    featured: true,
  },
  {
    id: 4,
    slug: "Automated Car Parking System",
    title: "Automated Car Parking System",
    description:
      "Developed a fully automated smart car parking system that enhances efficiency and reduces the need for human intervention in parking management. This system integrates hardware components, microcontrollers, sensors, and a web-based interface to provide a seamless and intelligent parking experience.",
    image: "/Projects/Car parking system.jpeg",
    technologies: [
      "Arduino Uno",
      "ESP32 Microcontroller",
      "L298N Motor Shield",
      "LED",
    ],
    category: "University Group Project",
    githubUrl: "https://github.com/SasankaDinith/Automated-car-parking-system",
    liveUrl: "https://your-portfolio-domain.com",
    featured: true,
  },
  {
    id: 5,
    slug: "ai-model-deployment-platform",
    title: "AI Model Deployment Platform",
    description:
      "A scalable platform for serving machine learning models using FastAPI, Docker, AWS, and automated deployment pipelines.",
    image: "/projects/ai-deployment.webp",
    technologies: ["Python", "FastAPI", "Docker", "AWS", "MLflow"],
    category: "AI / ML",
    githubUrl: "https://github.com/your-username",
    liveUrl: "https://your-portfolio-domain.com",
    featured: true,
  },
  {
    id: 6,
    slug: "devops-portfolio-platform",
    title: "DevOps Portfolio Platform",
    description:
      "A production-ready personal portfolio platform built with React, TypeScript, Tailwind CSS, Node.js, and MongoDB.",
    image: "/projects/portfolio-platform.webp",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    category: "Full Stack",
    githubUrl: "https://github.com/your-username",
    liveUrl: "https://your-portfolio-domain.com",
    featured: true,
  },
  {
    id: 7,
    slug: "kubernetes-deployment-platform",
    title: "Kubernetes Deployment Platform",
    description:
      "A reusable Kubernetes deployment system supporting autoscaling, ingress, secrets, and environment-based configurations.",
    image: "/projects/kubernetes-platform.webp",
    technologies: ["Kubernetes", "Helm", "Docker", "NGINX"],
    category: "DevOps & Cloud",
    githubUrl: "https://github.com/your-username",
    liveUrl: "https://your-portfolio-domain.com",
    featured: false,
  },
  {
    id: 8,
    slug: "centralized-log-analysis",
    title: "Centralized Log Analysis Platform",
    description:
      "A centralized observability platform for collecting, searching, visualizing, and alerting on distributed application logs.",
    image: "/projects/log-analysis.webp",
    technologies: ["Loki", "Grafana", "Promtail", "Docker"],
    category: "Monitoring",
    githubUrl: "https://github.com/your-username",
    liveUrl: "https://your-portfolio-domain.com",
    featured: false,
  },
  {
    id: 9,
    slug: "cloud-cost-dashboard",
    title: "Cloud Cost Optimization Dashboard",
    description:
      "A dashboard for tracking cloud expenditure, resource utilization, cost anomalies, and optimization opportunities.",
    image: "/projects/cloud-cost-dashboard.webp",
    technologies: ["AWS", "Python", "React", "CloudWatch"],
    category: "DevOps & Cloud",
    githubUrl: "https://github.com/your-username",
    liveUrl: "https://your-portfolio-domain.com",
    featured: false,
  },
 
];