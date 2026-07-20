import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://yhyfhgs.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Haoyang Ye · Academic Profile",
    template: "%s",
  },
  description:
    "Academic profile of Haoyang Ye. Research interests: Reinforcement Learning, LLM post training, and Agentic RL.",
  applicationName: "Haoyang Ye Academic Profile",
  authors: [{ name: "Haoyang Ye", url: `${siteUrl}/` }],
  creator: "Haoyang Ye",
  publisher: "Haoyang Ye",
  keywords: [
    "Haoyang Ye",
    "Peking University",
    "reinforcement learning",
    "LLM post-training",
    "agentic RL",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  manifest: "/site.webmanifest",
  formatDetection: { telephone: false },
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
