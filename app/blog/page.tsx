import AcademicSite from "../components/AcademicSite";
import { simplePageMetadata } from "../seo";

export const metadata = simplePageMetadata("blog", "en");

export default function Blog() {
  return <AcademicSite page="blog" />;
}
