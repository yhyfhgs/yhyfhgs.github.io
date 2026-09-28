import AcademicSite from "../../components/AcademicSite";
import JsonLd from "../../components/JsonLd";
import { researchIndexMetadata, researchIndexJsonLd } from "../../seo";

export const metadata = researchIndexMetadata("zh");

export default function Research() {
  return <><JsonLd data={researchIndexJsonLd("zh")} /><AcademicSite page="research" initialLanguage="zh" /></>;
}
