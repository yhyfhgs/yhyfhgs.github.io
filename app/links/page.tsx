import type { Metadata } from "next";
import AcademicSite from "../components/AcademicSite";

export const metadata: Metadata = {
  title: "Links · Haoyang Ye",
  description: "Friend links for Haoyang Ye.",
  alternates: { canonical: "/links/" },
};

export default function Links() {
  return <AcademicSite page="links" />;
}
