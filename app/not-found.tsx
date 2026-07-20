import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found · Haoyang Ye",
  description: "The requested page could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="top" className="subpage narrow-page not-found-page">
      <p className="kicker">404</p>
      <h1>Page not found</h1>
      <p>The requested page may have moved or does not exist.</p>
      <Link className="text-link" href="/">
        Return home →
      </Link>
    </main>
  );
}
