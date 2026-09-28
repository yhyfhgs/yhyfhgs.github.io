import type { Metadata, Viewport } from "next";
import "./globals.css";

// Run synchronously before the body is parsed, including on static Pages loads.
const themeBootstrap = `(function(){var theme;try{theme=localStorage.getItem("hy-theme")}catch(e){}if(theme!=="light"&&theme!=="dark"){theme=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme})()`;

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
      <head>
        <script id="theme-bootstrap" dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
