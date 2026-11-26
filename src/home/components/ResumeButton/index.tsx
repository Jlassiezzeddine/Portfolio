/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@/shared/components/Icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../shared/components/ui/button";
const IS_EN_ONLY = true;
function ResumeButton() {
  const event = ({ action, category, label, value }: any) => {
    (window as any).gtag?.("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };
  const downloadResume = (lang: "FR" | "EN") => {
    event({
      action: `download_resume_${lang}`,
      category: "files",
      label: "Resume downloaded",
      value: lang,
    });
  };
  if (IS_EN_ONLY) {
    return (
      <Button asChild>
        <Link
          download
          href={"/pdfs/EN_Ezzeddine_Jlassi_CV.pdf"}
          onClick={() => downloadResume("EN")}
          target="_blank"
          className="flex gap-2 items-center"
        >
          Resume
          <Icon icon="download" size="sm" />
        </Link>
      </Button>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-fit ">
        <Button>
          <Icon icon="download" size="sm" />
          <span className="pr-2">Resume</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link
            href={"/pdfs/EN_Ezzeddine_Jlassi_CV.pdf"}
            download
            onClick={() => downloadResume("EN")}
            target="_blank"
            className="flex gap-4 items-center"
          >
            <div className="relative w-4 aspect-square bg-red-500 rounded-full overflow-clip">
              <Image
                src="/flags/GB.svg"
                alt="english"
                fill
                className="object-cover"
              />
            </div>
            English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={"/pdfs/FR_Ezzeddine_Jlassi_CV.pdf"}
            download
            onClick={() => downloadResume("FR")}
            target="_blank"
            className="flex gap-4 items-center"
          >
            <div className="relative w-4 aspect-square bg-red-500 rounded-full overflow-clip">
              <Image
                src="/flags/FR.svg"
                alt="french"
                fill
                className="object-cover"
              />
            </div>
            French
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ResumeButton;
