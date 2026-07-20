import AcademicSite from "../../components/AcademicSite";
import { simplePageMetadata } from "../../seo";

export const metadata = simplePageMetadata("links", "zh");

export default function ChineseLinks() {
  return <AcademicSite page="links" initialLanguage="zh" />;
}
