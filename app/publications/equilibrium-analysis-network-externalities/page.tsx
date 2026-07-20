import AcademicSite from "../../components/AcademicSite";
import JsonLd from "../../components/JsonLd";
import { publicationJsonLd, publicationMetadata } from "../../seo";

const slug = "equilibrium-analysis-network-externalities" as const;

export const metadata = publicationMetadata(slug, "en");

export default function VotingPublication() {
  return (
    <>
      <JsonLd data={publicationJsonLd(slug, "en")} />
      <AcademicSite page="publication-voting" />
    </>
  );
}
