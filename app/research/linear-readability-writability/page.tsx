import AcademicSite from "../../components/AcademicSite";
import JsonLd from "../../components/JsonLd";
import { researchJsonLd, researchMetadata } from "../../seo";

const slug = "linear-readability-writability" as const;

export const metadata = researchMetadata(slug, "en");

export default function ReadabilityResearch() {
  return (
    <>
      <JsonLd data={researchJsonLd(slug, "en")} />
      <AcademicSite page="research-readability" />
    </>
  );
}
