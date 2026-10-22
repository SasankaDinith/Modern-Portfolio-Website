import type { BlogArticle } from "./blogs.types";

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    title: "AWS Well-Architected Framework Explained: 6 Pillars and a Real-World Example",
    description:
      "In this article, I’ll share what I’ve learned about the six pillars, the AWS Well-Architected Tool, and how these principles can be applied to a practical online business architecture.",
    coverImage: "/blogs/WAF.webp",
    publishedDate: "October 2026",
    readingTime: "9 min read",
    tags: [
      "AWS Well-Architected Framework",
      "AWS",
      "Cloud Computing",
      "AWS Architecture",
      "Security Best Practices",
    ],
    articleUrl:
      "https://sasankad101.medium.com/aws-well-architected-framework-explained-6-pillars-and-a-real-world-example-9729bbb5fd3a?sharedUserId=sasankad101",
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