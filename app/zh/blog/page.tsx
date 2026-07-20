import AcademicSite from "../../components/AcademicSite";
import { simplePageMetadata } from "../../seo";

export const metadata = simplePageMetadata("blog", "zh");

export default function ChineseBlog() {
  return <AcademicSite page="blog" initialLanguage="zh" />;
}
