import type { Metadata } from "next";
import AcademicSite from "../components/AcademicSite";

export const metadata: Metadata = {
  title: "Blog · Haoyang Ye",
  description: "Blog by Haoyang Ye.",
  alternates: { canonical: "/blog/" },
  robots: { index: false, follow: true },
};

export default function Blog() {
  return <AcademicSite page="blog" />;
}
