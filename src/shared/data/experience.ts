export const experiences: Experience[] = [
  {
    occupation: "Frontend developer",
    company: {
      name: "SESAMm",
      logo: "/logos/sesamm.jpeg",
      url: "https://www.sesamm.com/",
    },

    remote: "Hybrid",
    startDate: "Sep 2025",
    endDate: "Today",
    description: [
      "Using my technical proficiency and creativity to develop and maintain cool user experiences <a href='https://www.sesamm.com/' target='_blank'><u>@SESAMm</u></a>.",
    ],
    responsabilities: ["Feature implementations", "Code reviews"],
    stack: ["Typescript", "ReactJS", "MUI", "Mobx"],
    tools: ["Amplitude", "Figma", "Jira"],
  },
  {
    occupation: "Frontend developer",
    company: {
      name: "Dune Technology Ltd.",
      logo: "/logos/dunetech.svg",
      url: "https://www.dunetech.co.uk/",
    },
    client: {
      name: "Obrizum",
      logo: "/logos/obrizum.svg",
      url: "https://obrizum.com/",
    },
    remote: "Full remote",
    startDate: "Sep 2024",
    endDate: "Juin 2025",
    description: [
      "Using my technical proficiency and creativity to develop and maintain cool user experiences <a href='https://obrizum.com/' target='_blank'><u>@Obrizum</u></a>.",
    ],
    responsabilities: [
      "I18n",
      "A11y",
      "Feature & POCs implementations",
      "Performance optimization",
      "Code reviews",
    ],
    stack: [
      "Typescript",
      "NextJS",
      "Shadcn",
      "TailwindCSS",
      "Storybook",
      "Zustand",
      "AWS",
      "i18next",
      "Playwright",
      "Axe-core",
    ],
    tools: ["Posthog", "Sentry", "Figma", "Jira"],
  },
  {
    occupation: "Frontend developer",
    company: {
      name: "Obeyaka",
      logo: "/logos/obeyaka.jpeg",
      url: "https://www.obeyaka.com",
    },
    startDate: "Oct 2023",
    endDate: "May 2024",
    remote: "Full remote",
    description: [
      "Built an internal UI library as an npm package using React, Shadcn/ui and Storybook.",
      "Build Obeyaka's <a href='https://www.obeyaka.com' target='_blank'><u>landing page</u></a>.",
      "Built 10+ features based on micro-frontends architecture using Next JS.",
    ],
    responsabilities: [
      "MVP",
      "Project foundation",
      "UI Library",
      "User experience",
    ],
    stack: ["Typescript", "NextJS", "Shadcn", "TailwindCSS"],
    tools: ["Jira", "Figma"],
  },
  {
    occupation: "Frontend developer",
    company: {
      name: "WeCraftBytes",
      logo: "/logos/wecraftbytes.svg",
    },
    startDate: "Sep 2022",
    endDate: "Oct 2023",
    remote: "Full remote",
    description: [
      "Built 8+ chart components using Fusion Charts, Chart.JS and D3.",
      "Built 10+ forms using React Hook Form",
    ],
    responsabilities: ["Feature integrations", "User experience"],
    stack: [
      "Typescript",
      "ReactJS",
      "MaterialUI",
      "React-query",
      "React-table",
      "Chart.js",
      "D3.js",
      "Fusion Charts",
      "React-hook-form",
    ],
    tools: ["Sketch", "Postman"],
  },
  {
    occupation: "Fullstack developer",
    company: {
      name: "Chambi Eagle Technology",
      logo: "/logos/chambieagle.svg",
      url: "https://www.chambieagle.com/",
    },
    startDate: "Oct 2021",
    endDate: "Sep 2022",
    remote: "On site",
    description: [
      "Deployed the first version of <a href='https://galdermatn.phalcon-crm.com' target='_blank'><u>Phalcon CRM</u></a>.",
      "Reduced server’s memory consumption by 30% which reduced the api response time by up to 400ms, by writing 14+ SQL views and implementing best practices to improve Entity Framework performance.",
      "Built 20+ React components for forms, data grids and charts.",
    ],
    responsabilities: [
      "MVP",
      "Project foundation",
      "Frontend Dashboard",
      "UI Design",
      "User experience",
      "Code quality",
      "Database design",
      "API & Database optimization",
    ],
    stack: [
      "Typescript",
      "ReactJS",
      "React-suite",
      "Fusion Charts",
      "React-hook-form",
      ".NET 6",
      "Entity Framework",
      "Postgresql",
    ],
    tools: ["Jira", "Slack", "Adobe XD", "Postman"],
  },
  {
    occupation: "Frontend developer",
    company: {
      name: "Intuitiv Interactive",
      logo: "/logos/intuitiv.svg",
      url: "https://www.intuitiv-interactive.com/",
    },
    startDate: "Jun 2021",
    endDate: "Oct 2021",
    remote: "Hybrid",
    description: [
      "Develop a pixel perfect and responsive user interfaces.",
      "Create reusable components with TWIG engine",
      "Integrated the totality of the UI for <a href='https://institutcochin.fr/' target='_blank'><u>www.institutcochin.fr</u> </a>",
    ],
    responsabilities: ["UI integration", "TWIG Blocks"],
    stack: ["HTML", "SCSS", "Javascript", "Webpack", "TWIG", "Drupal"],
    tools: ["Redmine", "Slack", "Sketch"],
  },
];

export type Experience = {
  occupation: string;
  company: {
    name: string;
    logo: string;
    url?: string;
  };
  client?: {
    name: string;
    logo: string;
    url?: string;
  };
  startDate: string;
  endDate: string;
  remote: "Hybrid" | "On site" | "Full remote";
  description: string[];
  responsabilities: string[];
  stack: string[];
  tools: string[];
};
