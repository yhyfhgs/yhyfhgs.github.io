import AcademicSite from "../../../components/AcademicSite";
import JsonLd from "../../../components/JsonLd";
import { researchJsonLd, researchMetadata } from "../../../seo";

const slug = "eliciting-llm-propositional-beliefs" as const;

export const metadata = researchMetadata(slug, "zh");

export default function ChineseBeliefResearch() {
  return (
    <>
      <JsonLd data={researchJsonLd(slug, "zh")} />
      <AcademicSite page="research-beliefs" initialLanguage="zh" />
    </>
  );
}
