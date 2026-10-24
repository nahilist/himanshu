import { JsonLd } from "@/components/JsonLd";
import { NavsoulHome } from "@/components/NavsoulHome";
import { SITE, absoluteUrl } from "@/lib/site";

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${absoluteUrl("/")}#person`,
            name: SITE.personName,
            alternateName: SITE.name,
            url: absoluteUrl("/"),
            image: absoluteUrl("/pic-remove-background.webp"),
            jobTitle: SITE.role,
            email: `mailto:${SITE.email}`,
            sameAs: [SITE.github, SITE.linkedin, SITE.medium],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${absoluteUrl("/")}#website`,
            url: absoluteUrl("/"),
            name: SITE.name,
            description: SITE.description,
            inLanguage: "en",
            author: { "@id": `${absoluteUrl("/")}#person` },
          },
        ]}
      />
      <NavsoulHome />
    </>
  );
}
