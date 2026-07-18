import type { Metadata } from "next";
import AcademicSite from "../../components/AcademicSite";

export const metadata: Metadata = {
  title: "Incentive Compatibility for AI Alignment · Haoyang Ye",
  description:
    "Publication details for Roadmap on Incentive Compatibility for AI Alignment and Governance in Sociotechnical Systems.",
  alternates: {
    canonical: "/publications/incentive-compatibility-ai-alignment/",
  },
};

export default function IcsapPublication() {
  return <AcademicSite page="publication-icsap" />;
}
