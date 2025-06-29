import { Icon } from "@/shared/components/Icon";
import { contacts } from "@/shared/data/contact";
import Link from "next/link";

export default function Presentation() {
  return (
    <div className="md:sticky top-0 p-6 md:p-12 self-start flex items-end md:items-center w-full h-svh">
      <div className="max-h-[450px] h-full flex flex-col justify-end gap-8 md:justify-between">
        <div className="grid gap-4">
          <h1 className="font-bold text-5xl md:text-4xl">Ezzeddine Jlassi</h1>
          <h2 className="text-base tracking-wide">
            Fullstack developer with 4+ years of experience.
            <br /> Based in Tunisia.
          </h2>
        </div>
        <div className="grid gap-16">
          <div className="mt-8 grid gap-2 ">
            <Link
              href={`tel:${contacts.phone.replace(" ", "")}`}
              className="flex gap-4 items-center"
            >
              <Icon icon="phone" size="md" />
              {contacts.phone}
            </Link>
            <Link
              href={`mailto:${contacts.email}`}
              className="flex gap-4 items-center"
            >
              <Icon icon="email" size="md" />
              {contacts.email}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
