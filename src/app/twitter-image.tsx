import {
  renderSocialImage,
  socialImageAlt,
  socialImageSize,
} from "@/shared/components/SocialImage";

export const alt = socialImageAlt;
export const size = socialImageSize;
export const contentType = "image/png";

export default function Image() {
  return renderSocialImage();
}
