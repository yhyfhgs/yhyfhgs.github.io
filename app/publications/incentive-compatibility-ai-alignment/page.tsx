import AcademicSite from "../../components/AcademicSite";
import JsonLd from "../../components/JsonLd";
import { publicationJsonLd, publicationMetadata } from "../../seo";

const slug = "incentive-compatibility-ai-alignment" as const;

export const metadata = publicationMetadata(slug, "en");

export default function IcsapPublication() {
  return (
    <>
      <JsonLd data={publicationJsonLd(slug, "en")} />
      <AcademicSite page="publication-icsap" />
    </>
  );
}
