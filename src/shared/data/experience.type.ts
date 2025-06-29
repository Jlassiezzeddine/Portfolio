export interface IExperience {
  occupation: string;
  company: string;
  companyLogo: string;
  companyUrl?: string;
  startDate: string;
  remote: string;
  endDate?: string;
  description: string[];
}

export type IExperienceList = Record<"current" | "previous", IExperience[]>;
