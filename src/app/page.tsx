import { site } from "@/shared/data/site";
import Template from "../home/components";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.jobTitle,
  url: site.url,
  image: `${site.url}${site.avatar}`,
  sameAs: site.sameAs,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\u003c"),
        }}
      />
      <Template />
    </>
  );
}
