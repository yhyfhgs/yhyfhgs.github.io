import AcademicSite from "../components/AcademicSite";
import JsonLd from "../components/JsonLd";
import { publicationsJsonLd, publicationsMetadata } from "../seo";

export const metadata = publicationsMetadata("en");

export default function Publications() {
  return (
    <>
      <JsonLd data={publicationsJsonLd("en")} />
      <AcademicSite page="publications" />
    </>
  );
}
