export type Education = {
  title: string;
  institution: string;
  location: string;
  /** Free-form, e.g. "Jun 2023" or "Sep 2014 - Jun 2017". */
  date: string;
};

/** Education and certifications, most recent first. */
export const education: Education[] = [
  {
    title: "Certificate of Professional Competence - Software developer",
    institution: "Ministry of Vocational Training and Employment",
    location: "Tunis, Tunisia",
    date: "Jun 2023",
  },
  {
    title: "Fullstack JS Bootcamp (MERN)",
    institution: "GoMyCode",
    location: "Tunis, Tunisia",
    date: "Jul 2021",
  },
  {
    title: "Bachelor in Marketing",
    institution: "IHEC Carthage",
    location: "Tunis, Tunisia",
    date: "Sep 2014 - Jun 2017",
  },
  {
    title: "Baccalaureate in Mathematics",
    institution: "Lycée Carthage Byrsa",
    location: "Tunis, Tunisia",
    date: "Sep 2008 - Jun 2012",
  },
];
