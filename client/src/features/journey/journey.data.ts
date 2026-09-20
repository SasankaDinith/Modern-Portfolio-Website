import {
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

import type {
  Certification,
  HonorRecognition,
  TimelineSection,
} from "./journey.types";

export const workExperience: TimelineSection = {
  title: "Work Experience",
  icon: BriefcaseBusiness,

  entries: [
    {
      period: "Feb 2026 – Present",
      title: "Intern DevOps & Cloud Engineer",
      organization: "Zulacart PVT Ltd",

      description: [
        "Deploying scalable cloud-native applications on AWS and containers.",
        "Automating infrastructure using Terraform and infrastructure as code.",
        "Monitoring systems and optimizing reliability, performance, and cost.",
      ],
    },

    {
      period: "May 2025 – Jan 2026",
      title: "Technical Writer & Blogger",
      organization: "CoDeKu DevOps Academy",

      description: [
        "Worked as a freelance technical writer for the CoDeKu DevOps Academy blogging platform.",
        "Wrote and published in-depth technical content on Linux, Docker, Kubernetes, Shell Scripting, CI/CD pipelines, Jenkins, and AWS.",
        "Researched AI tools, automation, and modern engineering practices for technical content and learning resources.",
      ],
    },

    {
      period: "Jan 2025 – Feb 2025",
      title: "Program and Event Team Member - Japura CryptX 1.0",
      organization: "University of Sri Jayewardenepura",

      description: [
        "Collaborated with industry professionals to organize CTF and Hackathon events and support smooth event execution.",
        "Contributed to event planning, technical coordination, and promotional activities under tight deadlines.",
        "Strengthened communication, teamwork, and problem-solving skills in a fast-paced collaborative environment.",
      ],
    },
  ],
};

export const education: TimelineSection = {
  title: "Education",
  icon: GraduationCap,

  entries: [
    {
      period: "2023 – 2027",
      title:
        "BICT (Hons) Information and Communication Technology (Undergraduate)",
      organization:
        "Faculty of Technology, University of Sri Jayewardenepura",

      tags: [
        "Current GPA: 3.71",
        "Final Year Undergraduate",
        "DevOps & Cloud Computing Focus",
      ],
    },

    {
      period: "2022",
      title: "Diploma in English",
      organization: "British Way English Academy",

      tags: [
        "Diploma in English",
        "English Literature",
        "Communication Skills",
        "Public Speaking",
        "Professional Presentation",
      ],
    },

    {
      period: "2019 – 2022",
      title: "G.C.E. Advanced Level Examination",
      organization: "Mahinda Rajapaksa College, Matara",

      tags: [
        "Engineering Technology Stream",
        "SFT - A",
        "ET - A",
        "ICT - A",
      ],
    },
  ],
};

export const certifications: Certification[] = [


   {
    id: 1,
    title: "Red Hat Certified System Administrator (EX200) Exam Preparation",
    issuer: "LinkedIn Learning",
    verificationUrl: "https://www.linkedin.com/learning/certificates/eb3615205d4991877dd4d14fca6879bd1bec123b163d17d736c6824a81a1b3d4?trk=share_certificate",
  },
  {
    id: 1,
    title: "Kubernetes and Cloud Native Associate (KCNA) Cert Preparation",
    issuer: "LinkedIn Learning",
    verificationUrl: "https://www.linkedin.com/learning/certificates/289a0eb73b1c495eb92a00ff0d7a4081217ba5c23ca5ce185c2935d6c2b7f83b?trk=share_certificate",
  },

  {
    id: 2,
    title: "Docker Certified Associate Certification",
    issuer: "Docker, Inc. | LinkedIn Learning",
    verificationUrl: "https://www.linkedin.com/learning/certificates/a01d16a06e87fd29cb847fc5a893b528ce638713b1b7a4bada5bf0c0f0317869?trk=share_certificate",
  },

  {
    id: 3,
    title: "HashiCorp Certified: Terraform Associate (003) Cert Preparation",
    issuer: "HashiCorp | LinkedIn Learning",
    verificationUrl: "https://www.linkedin.com/learning/certificates/6ea5100a9081b00565d6f74b46e6d812819042cc22afc737ca550eb7565da440?trk=share_certificate",
  },

  {
    id: 4,
    title: "DevOps Professional Certificate by PagerDuty and LinkedIn",
    issuer: "PagerDuty | LinkedIn Learning",
    verificationUrl: "https://www.linkedin.com/learning/certificates/cf70483d04c094225f7fb6275f3453810eff9760681d6fef520fdd036abcef84?trk=share_certificate",
  },

  {
    id: 5,
    title: "Kubernetes and Cloud-Native Associate (KCNA)",
    issuer: "KodeKloud",
    verificationUrl: "https://learn.kodekloud.com/learn/certificate/b6ed46bb-df11-474b-9711-94077abe2d6f",
  },

  {
    id: 6,
    title: "KodeKloud 100 Days of Cloud (Azure)",
    issuer: "KodeKloud",
    verificationUrl: "https://engineer.kodekloud.com/certificate-verification/dfc1b213-be20-430c-a9a5-a203d02dc1f7",
  },

  {
    id: 7,
    title: "KodeKloud 100 Days of Cloud (AWS)",
    issuer: "KodeKloud",
    verificationUrl: "https://engineer.kodekloud.com/certificate-verification/015a13af-e04c-4df3-b971-f35a80957762",
  },

  {
    id: 8,
    title: "KodeKloud Engineer Kubernetes Level-01",
    issuer: "KodeKloud",
    verificationUrl: "https://engineer.kodekloud.com/certificate-verification/f85bf960-02a6-4538-8338-27e5f76b9c33",
  },

  {
    id: 9,
    title: "KodeKloud Engineer - Jenkins(Level 1)",
    issuer: "KodeKloud",
    verificationUrl: "https://engineer.kodekloud.com/certificate-verification/67651b3c-22c3-41ae-a51f-2d3cb7aee402",
  },

  {
    id: 10,
    title: "Aviatrix Certified Multicloud Network Associate",
    issuer: "Aviatrix",
    verificationUrl: "https://www.credly.com/badges/8356d290-671a-4b31-bde4-cb72f4ac53fe/public_url",
  },

  {
    id: 11,
    title: "KodeKloud Engineer - Docker (Level 1)",
    issuer: "KodeKloud",
    verificationUrl: "https://engineer.kodekloud.com/certificate-verification/64f07986-6f7b-4c07-ad8e-6abef57caa16",
  },

  {
    id: 12,
    title: "Docker Training Course for the Absolute Beginner",
    issuer: "KodeKloud",
    verificationUrl: "https://learn.kodekloud.com/learn/certificate/15cadf48-df90-4ca6-8925-8069d409e6ce",
  },
   {
    id: 13,
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    verificationUrl: "https://www.credly.com/badges/6034de49-ad1f-42e1-b0a5-0c0acef5ff09/public_url",
  },
   {
    id: 14,
    title: "KodeKloud Engineer - Git (Level 1)",
    issuer: "KodeKloud",
    verificationUrl: "https://engineer.kodekloud.com/certificate-verification/30758a37-ec70-425a-9d1b-072fd4d883bb",
  },
   {
    id: 15,
    title: "KodeKloud Engineer - Linux (Level 1)",
    issuer: "KodeKloud",
    verificationUrl: "https://engineer.kodekloud.com/certificate-verification/8f84b3a1-b6fe-496c-8c2f-a87cfcf384bf",
  },
   {
    id: 16,
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "AWS Skill Builder",
    verificationUrl: "https://www.credly.com/badges/876abd11-31a9-4a3c-8f90-9d59865a3e9c/public_url",
  },
   {
    id: 17,
    title: "AWS Cloud Quest: Generative AI Practitioner",
    issuer: "AWS Skill Builder",
    verificationUrl: "https://www.credly.com/badges/8abe337c-9fe7-403b-801c-e9aff25e72bb/public_url",
  },
];

export const honorsRecognitions: HonorRecognition[] = [
  {
    id: 1,
    title: "4th Ranked Cloud & DevOps Engineering Creator in Sri Lanka",
    issuer: "Favikon",
    description:
      "Ranked #4 among Cloud & DevOps Engineering creators in Sri Lanka by Favikon's Top 200 Creators ranking. This recognition reflects my contributions to the professional community through sharing knowledge, insights, and content related to Cloud Computing, DevOps practices, Networking, and emerging technologies on LinkedIn.",
    image: "/Honours/Favikon.png",
    link: "https://www.favikon.com/",
  },
];