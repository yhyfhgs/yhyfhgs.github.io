import AcademicSite from "../../components/AcademicSite";
import JsonLd from "../../components/JsonLd";
import { researchJsonLd, researchMetadata } from "../../seo";

const slug = "eliciting-llm-propositional-beliefs" as const;

export const metadata = researchMetadata(slug, "en");

export default function BeliefResearch() {
  return (
    <>
      <JsonLd data={researchJsonLd(slug, "en")} />
      <AcademicSite page="research-beliefs" />
    </>
  );
}
