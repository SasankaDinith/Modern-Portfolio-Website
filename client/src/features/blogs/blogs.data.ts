import type { BlogArticle } from "./blogs.types";

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    title: "Infrastructure as Code (IaC) with Terraform & Configuration Management using Ansible: A Beginner’s Practical Guide",
    description:
      "This article provides a practical guide for beginners on using Terraform for Infrastructure as Code (IaC) and Ansible for configuration management, including step-by-step instructions and examples.",
    coverImage: "/blogs/Terraform & Ansible Artilcle.webp",
    publishedDate: "August 2026",
    readingTime: "15 min read",
    tags: [
      "Infrastructure as Code",
      "Terraform",
      "Configuration Management",
      "Ansible",
      "DevOps",
    ],
    articleUrl:
      "https://medium.com/@sasankad101/infrastructure-as-code-iac-with-terraform-configuration-management-using-ansible-a-beginners-c6e81082a3af?sharedUserId=sasankad101",
  },
  {
    id: 2,
    title: "Network Configuration in RHEL 9: nmcli, nmtui, Network Teaming & Port Forwarding",
    description:
      " Learn how to configure network settings in RHEL 9 using nmcli, nmtui, network teaming, and port forwarding techniques.",
    coverImage: "/blogs/network config.webp",
    publishedDate: "July 2026",
    readingTime: "12 min read",
    tags: ["Networking", "Linux", "RHEL9", "Network Teaming"],
    articleUrl:
      "https://medium.com/@sasankad101/network-configuration-in-rhel-9-nmcli-nmtui-network-teaming-port-forwarding-0ab551a68101?sharedUserId=sasankad101",
  },
  {
    id: 3,
    title:
      "Kubernetes Storage Explained: Persistent Volumes (PV), Persistent Volume Claims (PVC), and StorageClasses",
    description:
      "Understand how Kubernetes storage works with Persistent Volumes, Persistent Volume Claims, and StorageClasses.",
    coverImage: "/blogs/PV.webp",
    publishedDate: "July 2026",
    readingTime: "12 min read",
    tags: ["Kubernetes", "Storage", "Persistent Volumes", "Persistent Volume Claims", "StorageClasses"],
    articleUrl:
      "https://medium.com/devops-dev/kubernetes-storage-explained-persistent-volumes-pv-persistent-volume-claims-pvc-and-b2f51e9064d0?sharedUserId=sasankad101",
  },
];