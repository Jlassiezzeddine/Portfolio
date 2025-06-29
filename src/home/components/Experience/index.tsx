import { experiences } from "@/shared/data/experience";
import ExperienceBox from "./ExperienceBox";
import CurrentBox from "./CurrentBox";

function Experience() {
  return (
    <div className="p-6 md:p-12 self-start w-full grid gap-6">
      <div className="grid gap-4">
        {experiences.current.map((experience, idx) => (
          <CurrentBox key={idx} experience={experience} />
        ))}
      </div>
      <div className="grid gap-4">
        {experiences.previous.map((experience, idx) => (
          <ExperienceBox {...experience} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
