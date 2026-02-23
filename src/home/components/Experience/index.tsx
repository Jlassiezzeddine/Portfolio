import { experiences } from "@/shared/data/experience";
import ExperienceBox from "./ExperienceBox";

function Experience() {
  return (
    <div className="w-full grid gap-6 py-12 px-4">
      <h2 className="text-sm">
        <span className="relative inline-flex size-3 rounded-full bg-emerald-500 mr-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        </span>
        Open for collaborations on ambitious projects.
      </h2>
      {experiences.map((experience, idx) => (
        <ExperienceBox {...experience} key={idx} />
      ))}
    </div>
  );
}

export default Experience;
