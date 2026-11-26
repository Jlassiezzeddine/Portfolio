import { social } from "./contact";

export const site = {
  url: "https://www.jlassiezzeddine.com",
  name: "Ezzeddine Jlassi",
  jobTitle: "Fullstack Developer",
  title: "Ezzeddine Jlassi - Fullstack Developer",
  description:
    "Fullstack developer with 4+ years of experience and a strong focus on frontend development, seeking to use my technical proficiency and creativity to develop engaging user experiences.",
  avatar: "/avatar_250x250.png",
  sameAs: [social.github.url, social.linkedIn.url],
} as const;
