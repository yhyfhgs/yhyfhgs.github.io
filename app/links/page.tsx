import type { Metadata } from "next";
import AcademicSite from "../components/AcademicSite";

export const metadata: Metadata = {
  title: "Links · Haoyang Ye",
  description: "Links for Haoyang Ye.",
  alternates: { canonical: "/links/" },
};

export default function Links() {
  return <AcademicSite page="links" />;
}
