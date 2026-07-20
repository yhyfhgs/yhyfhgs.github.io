import AcademicSite from "../../components/AcademicSite";
import JsonLd from "../../components/JsonLd";
import { publicationsJsonLd, publicationsMetadata } from "../../seo";

export const metadata = publicationsMetadata("zh");

export default function ChinesePublications() {
  return (
    <>
      <JsonLd data={publicationsJsonLd("zh")} />
      <AcademicSite page="publications" initialLanguage="zh" />
    </>
  );
}
