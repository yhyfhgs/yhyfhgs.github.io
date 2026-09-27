import AcademicSite from "../../../components/AcademicSite";
import JsonLd from "../../../components/JsonLd";
import { researchJsonLd, researchMetadata } from "../../../seo";

const slug = "linear-readability-writability" as const;

export const metadata = researchMetadata(slug, "zh");

export default function ChineseReadabilityResearch() {
  return (
    <>
      <JsonLd data={researchJsonLd(slug, "zh")} />
      <AcademicSite page="research-readability" initialLanguage="zh" />
    </>
  );
}
