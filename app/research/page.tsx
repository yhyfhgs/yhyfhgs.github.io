import AcademicSite from "../components/AcademicSite";
import JsonLd from "../components/JsonLd";
import { researchIndexMetadata, researchIndexJsonLd } from "../seo";

export const metadata = researchIndexMetadata("en");

export default function Research() {
  return <><JsonLd data={researchIndexJsonLd("en")} /><AcademicSite page="research" initialLanguage="en" /></>;
}
