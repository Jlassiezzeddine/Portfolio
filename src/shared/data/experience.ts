import { IExperienceList } from "./experience.type";

export const experiences: IExperienceList = {
  current: [
    {
      occupation: "Fullstack NextJS developer",
      company: "Obrizum",
      companyLogo: "/logos/obrizum.svg",
      companyUrl: "https://obrizum.com/",
      startDate: "Sep 2024",
      endDate: "Today",
      remote: "Full remote",
      description: [
        "Contributed in the internationalization of <a href='https://obrizum.com/' target='_blank'><u>Obrizum learning platform.</u></a>",
        "Built a custom type-safe useTranslation hook and Translate component (on top of i18next and react-i18next) and implemented eslint rules to provide seamless developer experience while dealing with internationalization.",
        "Implemented accessibility standards to meet WCAG AA 2.0 using Axe-core and Playwright tests.",
        "Enhanced app’s data flow and hydration by leveraging NextJS’s middleware and SSR.",
      ],
    },
    {
      occupation: "Frontend developer",
      company: "Dune Technology Ltd.",
      companyLogo: "/logos/dunetech.svg",
      companyUrl: "https://www.dunetech.co.uk/",
      remote: "Full remote",
      startDate: "Sep 2024",
      description: [
        "Using my technical proficiency and creativity to develop and maintain cool user experiences <a href='https://obrizum.com/' target='_blank'><u>@Obrizum</u></a>.",
      ],
    },
  ],
  previous: [
    {
      occupation: "Frontend developer",
      company: "Obeyaka",
      companyLogo: "/logos/obeyaka.jpeg",
      companyUrl: "https://www.obeyaka.com",
      startDate: "Oct 2023",
      endDate: "May 2024",
      remote: "Full remote",
      description: [
        "Built an internal UI library as an npm package using React, Shadcn/ui and Storybook.",
        "Build Obeyaka's <a href='https://www.obeyaka.com' target='_blank'><u>landing page</u></a>.",
        "Built 10+ features based on micro-frontends architecture using Next JS.",
      ],
    },
    {
      occupation: "Frontend developer",
      company: "WeCraftBytes",
      companyLogo: "/logos/wecraftbytes.svg",
      startDate: "Sep 2022",
      endDate: "Oct 2023",
      remote: "Full remote",
      description: [
        "Built 8+ chart components using Fusion Charts, Chart.JS and D3.",
        "Built 10+ forms using React Hook Form",
      ],
    },
    {
      occupation: "Fullstack developer",
      company: "Chambi Eagle Technology",
      companyLogo: "/logos/chambieagle.svg",
      companyUrl: "https://www.chambieagle.com/",
      startDate: "Oct 2021",
      endDate: "Sep 2022",
      remote: "On site",
      description: [
        "Deployed the first version of <a href='https://galdermatn.phalcon-crm.com' target='_blank'><u>Phalcon CRM</u></a>.",
        "Reduced server’s memory consumption by 30% which reduced the api response time by up to 400ms, by writing 14+ SQL views and implementing best practices to improve Entity Framework performance.",
        "Built 20+ React components for forms, data grids and charts.",
      ],
    },
    {
      occupation: "Frontend developer",
      company: "Intuitiv Interactive",
      companyLogo: "/logos/intuitiv.svg",
      companyUrl: "https://www.intuitiv-interactive.com/",
      startDate: "Jun 2021",
      endDate: "Oct 2021",
      remote: "Hybrid",
      description: [
        "Develop a pixel perfect and responsive user interfaces.",
        "Create reusable components with TWIG engine",
        "Integrated the totality of the UI for <a href='https://institutcochin.fr/' target='_blank'><u>www.institutcochin.fr</u> </a>",
      ],
    },
  ],
};
