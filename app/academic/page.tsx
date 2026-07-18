import type { Metadata } from "next";
import AcademicSite from "../components/AcademicSite";

export const metadata: Metadata = {
  title: "Academic Index · Haoyang Ye",
  description: "Reserved academic sections for Haoyang Ye.",
  alternates: { canonical: "/academic/" },
  robots: { index: false, follow: true },
};

export default function AcademicIndex() {
  return <AcademicSite page="academic" />;
}
