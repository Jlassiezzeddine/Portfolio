import { createElement } from "react";
import { ICONS_MAP } from "./iconsMap";
import { cn } from "@/shared/lib/utils";

export const iconSize = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-7 h-7",
  xl: "w-12 h-12",
  xxl: "w-20 h-20",
};

type CustomIconType = keyof typeof ICONS_MAP;

interface IIcon {
  icon: CustomIconType;
  className?: string;
  size?: keyof typeof iconSize;
}
export function Icon({ icon, className, size = "md" }: IIcon) {
  return (
    <>
      {createElement(ICONS_MAP[icon], {
        className: cn(iconSize[size], className),
      })}
    </>
  );
}
