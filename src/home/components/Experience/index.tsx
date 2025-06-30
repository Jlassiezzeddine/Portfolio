import { experiences } from "@/shared/data/experience";
import ExperienceBox from "./ExperienceBox";

function Experience() {
  return (
    <div className="w-full grid gap-6 py-12 px-4">
      {experiences.map((experience, idx) => (
        <ExperienceBox {...experience} key={idx} />
      ))}
    </div>
  );
}

export default Experience;
