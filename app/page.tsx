import AcademicSite from "./components/AcademicSite";
import JsonLd from "./components/JsonLd";
import { homeJsonLd, homeMetadata } from "./seo";

export const metadata = homeMetadata("en");

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd("en")} />
      <AcademicSite page="home" />
    </>
  );
}
