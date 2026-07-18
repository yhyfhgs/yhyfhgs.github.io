import type { Metadata } from "next";
import AcademicSite from "../components/AcademicSite";

export const metadata: Metadata = {
  title: "Publications · Haoyang Ye",
  description: "Publications by Haoyang Ye.",
  alternates: { canonical: "/publications/" },
};

export default function Publications() {
  return <AcademicSite page="publications" />;
}
