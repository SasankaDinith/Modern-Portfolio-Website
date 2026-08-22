import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaMedium


} from "react-icons/fa";

export const contactInformation = {
  email: "sasankaranawaka0@gmail.com",
  phone: "+94 76 244 7606",
  location: "Colombo, Sri Lanka",
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sasankad101",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/your-github-username",
    icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:sasankaranawaka0@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/19CCjpbnP2/",
    icon: FaFacebook,
  },
    {
    label: "Medium",
    href: "https://medium.com/@sasankad101",
    icon: FaMedium,
  },
] as const;

export const footerNavigationLinks = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Services", sectionId: "services" },
  { label: "Projects", sectionId: "projects" },
  { label: "Contact", sectionId: "contact" },
] as const;

export const footerResourceLinks = [
  { label: "Blogs", sectionId: "blogs" },
  { label: "Skills", sectionId: "skills" },
  {
    label: "Professional Journey",
    sectionId: "journey",
  },
] as const;