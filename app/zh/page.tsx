import AcademicSite from "../components/AcademicSite";
import JsonLd from "../components/JsonLd";
import { homeJsonLd, homeMetadata } from "../seo";

export const metadata = homeMetadata("zh");

export default function ChineseHome() {
  return (
    <>
      <JsonLd data={homeJsonLd("zh")} />
      <AcademicSite page="home" initialLanguage="zh" />
    </>
  );
}
