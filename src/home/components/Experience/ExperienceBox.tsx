import { Icon } from "@/shared/components/Icon";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { IExperience } from "@/shared/data/experience.type";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

function ExperienceBox({
  occupation,
  company,
  companyLogo,
  companyUrl,
  startDate,
  endDate,
  description,
}: IExperience) {
  return (
    <Card className="bg-transparent text-inherit border-none shadow-none py-6">
      <CardHeader className="pb-2 grid gap-2">
        <h3 className="text-sm tracking-wide ">
          {startDate} - {endDate}
        </h3>
        <div className="flex flex-col md:flex-row gap-4 w-full ">
          <div className=" w-14 aspect-square p-2 bg-blue-50 rounded-md overflow-clip shrink-0">
            <div className="relative size-full">
              <Image
                src={companyLogo}
                alt={`${company}'s logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full">
            <h3 className=" font-semibold text-lg">{occupation}</h3>
            <div className="flex gap-1 items-center">
              <p>
                {companyUrl ? (
                  <Link
                    target="_blank"
                    href={companyUrl}
                    className="inline-flex items-center"
                  >
                    <span>{`@${company}`}</span>
                    <Icon icon="arrow-up-right" size="md" />
                  </Link>
                ) : (
                  <span>{`@${company}`}</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="font-normal list-disc list-inside">
          {description.map((el, idx) => (
            <li key={idx} className="mt-1 text-sm">
              <span className="[&>a]:text-primary">{parse(el)}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default ExperienceBox;
