import AcademicSite from "../components/AcademicSite";
import { simplePageMetadata } from "../seo";

export const metadata = simplePageMetadata("academic", "en");

export default function AcademicIndex() {
  return <AcademicSite page="academic" />;
}
