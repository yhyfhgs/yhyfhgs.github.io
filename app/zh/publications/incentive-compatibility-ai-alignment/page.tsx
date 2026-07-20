import AcademicSite from "../../../components/AcademicSite";
import JsonLd from "../../../components/JsonLd";
import { publicationJsonLd, publicationMetadata } from "../../../seo";

const slug = "incentive-compatibility-ai-alignment" as const;

export const metadata = publicationMetadata(slug, "zh");

export default function ChineseIcsapPublication() {
  return (
    <>
      <JsonLd data={publicationJsonLd(slug, "zh")} />
      <AcademicSite page="publication-icsap" initialLanguage="zh" />
    </>
  );
}
