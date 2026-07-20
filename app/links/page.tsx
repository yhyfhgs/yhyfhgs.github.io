import AcademicSite from "../components/AcademicSite";
import { simplePageMetadata } from "../seo";

export const metadata = simplePageMetadata("links", "en");

export default function Links() {
  return <AcademicSite page="links" />;
}
