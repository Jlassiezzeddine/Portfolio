import { Badge } from "@/components/ui/badge";
import { Icon } from "@/shared/components/Icon";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { Experience } from "@/shared/data/experience";

import Image from "next/image";
import Link from "next/link";

function ExperienceBox({
  occupation,
  company,
  startDate,
  endDate,
  tools,
  responsibilities,
  stack,
  client,
}: Experience) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-sm tracking-wide ">
          {startDate} - {endDate}
        </h3>
        <div className="flex justify-between w-full">
          <div className="flex flex-col lg:flex-row gap-4 w-full  lg:items-end">
            <div className=" size-14  p-2 bg-accent dark:bg-accent-foreground rounded-md overflow-clip shrink-0">
              <div className="relative size-full">
                <Image
                  src={company.logo}
                  alt={`${company.name}'s logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex gap-8 items-end">
              <div>
                <h3 className=" font-semibold text-lg">{occupation}</h3>
                <div className="flex gap-1 items-center">
                  {company.url ? (
                    <Link
                      target="_blank"
                      href={company.url}
                      className="inline-flex items-center"
                    >
                      <span>{`@${company.name}`}</span>
                      <Icon icon="arrow-up-right" size="md" />
                    </Link>
                  ) : (
                    <span>{`@${company.name}`}</span>
                  )}
                </div>
              </div>
              {client && (
                <div className="flex  gap-4 items-center ">
                  <div className="p-2 bg-accent dark:bg-accent-foreground  aspect-square size-7 rounded-md overflow-clip">
                    <div className="relative size-full">
                      <Image
                        src={client.logo}
                        alt={`${client.name}'s logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-full flex gap-1 items-center flex-nowrap">
                    {client.url ? (
                      <Link
                        target="_blank"
                        href={client.url}
                        className="inline-flex items-center "
                      >
                        <span className="text-nowrap">{`@${client.name} `}</span>
                        <Icon icon="arrow-up-right" size="md" />
                      </Link>
                    ) : (
                      <span>{`@${client.name}`}</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <h3 className="text-sm">Key responsibilities:</h3>
        <div className="flex gap-1 flex-wrap">
          {responsibilities.map((el, idx) => (
            <Badge key={idx} variant="outline">
              {el}
            </Badge>
          ))}
        </div>

        <h4 className="text-sm">Stack & Tools:</h4>
        <div className="flex gap-1 flex-wrap">
          {[...stack, ...tools].map((el, idx) => (
            <Badge key={idx} variant="outline">
              {el}
            </Badge>
          ))}
        </div>
      </CardContent>
      {/* <CardFooter>
        <Button asChild >
          <Link href={`experience/${company.name}`}>
          
          Read more</Link>
          </Button>
      </CardFooter> */}
    </Card>
  );
}

export default ExperienceBox;
