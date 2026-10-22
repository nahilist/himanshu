export const SITE = {
  name: "Nahilist",
  personName: "Himanshu Kumar",
  role: "AI/ML & Frontend Developer",
  description:
    "Explore Himanshu Kumar's AI/ML and frontend development portfolio, featuring selected projects, technical skills, project case studies, and contact details.",
  origin: "https://nahilist.vercel.app",
  email: "himanshukx64@gmail.com",
  github: "https://github.com/nahilist",
  linkedin: "https://linkedin.com/in/himanshux64",
  medium: "https://medium.com/@himanshux64",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, SITE.origin).toString();

