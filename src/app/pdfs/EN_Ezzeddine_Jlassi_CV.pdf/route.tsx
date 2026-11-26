import { renderToBuffer } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { CvDocument } from "@/cv/CvDocument";
import { site } from "@/shared/data/site";

// Rendered once at build time, so every deploy ships a CV matching the site data.
export const dynamic = "force-static";

export async function GET() {
  const qr = await QRCode.toDataURL(site.url, { margin: 0, width: 256 });
  const pdf = await renderToBuffer(<CvDocument qr={qr} />);
  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="EN_Ezzeddine_Jlassi_CV.pdf"',
    },
  });
}
