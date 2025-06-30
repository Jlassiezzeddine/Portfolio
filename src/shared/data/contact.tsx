import { FaDiscord, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export const social = {
  github: {
    url: "https://github.com/Jlassiezzeddine",
    label: "GitHub",
    icon: <FaGithub />,
  },
  linkedIn: {
    url: "https://www.linkedin.com/in/jlassiezzeddine/",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  discord: {
    url: "https://discordapp.com/users/ezdeen#5391",
    label: "Discord",
    icon: <FaDiscord />,
  },
  whatsApp: {
    url: "https://wa.me/0021629850696",
    label: "WhatsApp",
    icon: <FaWhatsapp />,
  },
} as const;
export const contacts = {
  phone: "00216 29 85 06 96",
  email: "jlassiezzeddine@gmail.com",
} as const;
