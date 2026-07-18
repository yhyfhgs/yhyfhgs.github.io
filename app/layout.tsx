import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";
const siteUrl = process.env.PAGES_BASE_URL ?? "https://yhyfhgs.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Haoyang Ye · Academic Profile",
  description:
    "Academic profile of Haoyang Ye. Research interests: Reinforcement Learning, LLM post training, and Agentic RL.",
  applicationName: "Haoyang Ye Academic Profile",
  authors: [{ name: "Haoyang Ye" }],
  keywords: [
    "Haoyang Ye",
    "Peking University",
    "reinforcement learning",
    "LLM post-training",
    "agentic RL",
  ],
  icons: {
    icon: `${basePath}/icon.svg`,
    shortcut: `${basePath}/icon.svg`,
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: "Haoyang Ye · Academic Profile",
    description:
      "Research interests: Reinforcement Learning, LLM post training, and Agentic RL.",
    siteName: "Haoyang Ye",
    images: [
      {
        url: `${basePath}/og.png`,
        width: 1734,
        height: 907,
        alt: "Haoyang Ye academic profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haoyang Ye · Academic Profile",
    description:
      "Research interests: Reinforcement Learning, LLM post training, and Agentic RL.",
    images: [`${basePath}/og.png`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Haoyang Ye",
    alternateName: "叶昊洋",
    url: "https://yhyfhgs.github.io/",
    email: "mailto:2501112105@stu.pku.edu.cn",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Peking University",
      url: "https://www.pku.edu.cn/",
    },
    sameAs: [
      "https://github.com/yhyfhgs",
      "https://orcid.org/0009-0009-3215-2811",
      "https://x.com/2FH5GS",
    ],
    knowsAbout: [
      "Reinforcement Learning",
      "LLM post-training",
      "Agentic RL",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
