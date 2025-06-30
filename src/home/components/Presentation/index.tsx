import { Separator } from "@/components/ui/separator";
import { Icon } from "@/shared/components/Icon";
import { Button } from "@/shared/components/ui/button";
import { contacts, social } from "@/shared/data/contact";
import Image from "next/image";
import Link from "next/link";
import ResumeButton from "../ResumeButton";
export default function Presentation() {
  return (
    <div className="lg:sticky top-0 self-start flex items-end lg:items-center w-full  h-dvh">
      <div className="py-12 h-fit lg:h-dvh px-4  flex flex-col   gap-8 lg:justify-between">
        <div className="grid gap-4">
          <div className="relative size-32 rounded-full overflow-clip shadow">
            <Image
              src={"/avatar_250x250.png"}
              alt={`Ezzeddine Jlassi avatar`}
              fill
              className="object-cover scale-125 translate-y-2 object-top"
            />
          </div>
          <h1 className="font-bold text-2xl mt-8">
            Ezzeddine Jlassi - Fullstack Developer
          </h1>
          <p className="text-base tracking-wide">
            TypeScript, ReactJS, NextJS, ExpressJS, C#, .NET
          </p>
          <h2 className="text-base tracking-wide">
            Fullstack developer with 4+ years of experience building scalable
            web applications using modern frontend and backend technologies with
            a strong focus on clean, efficient code and user-centric solutions.
          </h2>
          <p>Based in Tunisia 🇹🇳</p>
          <div className="flex items-center gap-4 h-9 mt-4">
            <Button asChild className="cursor-pointer" variant="outline">
              <Link
                href="https://www.linkedin.com/in/jlassiezzeddine/details/recommendations"
                target="_blank"
              >
                Testimonials <Icon icon="arrow-up-right" size="sm" />
              </Link>
            </Button>
            <ResumeButton />
          </div>
        </div>
        <div className="space-y-4">
          <h3>Checkout my latest project:</h3>
          <Button variant="outline" className="w-fit" asChild>
            <Link href="https://buzzerbeatermusic.com" target="_blank">
            Buzzerbeater Music <Icon icon="arrow-up-right" size="sm" />
            </Link>
          </Button>
        </div>

        <div>
          <Separator className="max-w-24" />

          <div className="mt-8 flex gap-2 flex-wrap">
            {Object.entries(social).map(([slug, { url, icon, label }]) => (
              <Button asChild key={slug} variant="outline" size="icon">
                <Link href={url} aria-label={label} target="_blank">
                  {icon}
                </Link>
              </Button>
            ))}
            <Button asChild variant="outline" className="w-fit">
              <Link
                href={`tel:${contacts.phone.trim()}`}
                className="flex gap-2 items-center"
              >
                <Icon icon="phone" size="md" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-fit">
              <Link
                href={`mailto:${contacts.email}`}
                className="flex gap-2 items-center"
              >
                <Icon icon="email" size="md" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
