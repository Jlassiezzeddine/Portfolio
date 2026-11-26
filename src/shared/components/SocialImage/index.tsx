import { site } from "@/shared/data/site";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const socialImageSize = { width: 1200, height: 630 };
export const socialImageAlt = site.title;

// Rendered once at build time and served as a static PNG.
export async function renderSocialImage() {
  const avatar = await readFile(join(process.cwd(), "public", site.avatar));
  const avatarSrc = `data:image/png;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: 96,
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarSrc}
          alt=""
          width={240}
          height={240}
          style={{ borderRadius: 9999, objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 700 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: "#a3a3a3" }}>{site.jobTitle}</div>
          <div style={{ fontSize: 28, color: "#737373", marginTop: 24 }}>
            jlassiezzeddine.com
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
