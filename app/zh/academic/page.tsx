import AcademicSite from "../../components/AcademicSite";
import { simplePageMetadata } from "../../seo";

export const metadata = simplePageMetadata("academic", "zh");

export default function ChineseAcademicIndex() {
  return <AcademicSite page="academic" initialLanguage="zh" />;
}
