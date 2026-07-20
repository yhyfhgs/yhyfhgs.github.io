import AcademicSite from "../../../components/AcademicSite";
import JsonLd from "../../../components/JsonLd";
import { publicationJsonLd, publicationMetadata } from "../../../seo";

const slug = "equilibrium-analysis-network-externalities" as const;

export const metadata = publicationMetadata(slug, "zh");

export default function ChineseVotingPublication() {
  return (
    <>
      <JsonLd data={publicationJsonLd(slug, "zh")} />
      <AcademicSite page="publication-voting" initialLanguage="zh" />
    </>
  );
}
