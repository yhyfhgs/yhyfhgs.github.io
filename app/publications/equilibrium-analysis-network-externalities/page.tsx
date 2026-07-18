import type { Metadata } from "next";
import AcademicSite from "../../components/AcademicSite";

export const metadata: Metadata = {
  title: "Equilibrium Analysis of Simple Majority Voting · Haoyang Ye",
  description:
    "Publication details for Equilibrium Analysis of Simple Majority Voting under Network Externalities.",
  alternates: {
    canonical: "/publications/equilibrium-analysis-network-externalities/",
  },
};

export default function VotingPublication() {
  return <AcademicSite page="publication-voting" />;
}
