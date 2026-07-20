import type { Metadata } from "next";
import type { JsonLdValue } from "./components/JsonLd";

export type SiteLanguage = "en" | "zh";
export type PublicationSlug =
  | "equilibrium-analysis-network-externalities"
  | "incentive-compatibility-ai-alignment";

export const SITE_URL = "https://yhyfhgs.github.io";

const OG_IMAGE_URL = `${SITE_URL}/og.png`;
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const EMAIL = "2501112105@stu.pku.edu.cn";
const GITHUB_URL = "https://github.com/yhyfhgs";
const ORCID_URL = "https://orcid.org/0009-0009-3215-2811";
const X_URL = "https://x.com/FHGSYHY";

type LocalizedText = { en: string; zh: string };

type PageMetadataOptions = {
  language: SiteLanguage;
  title: string;
  description: string;
  enPath: string;
  zhPath: string;
  type?: "website" | "profile" | "article";
  index?: boolean;
  keywords?: string[];
  authors?: string[];
  publishedTime?: string;
  other?: NonNullable<Metadata["other"]>;
};

type PublicationSeoRecord = {
  slug: PublicationSlug;
  title: LocalizedText;
  alternateTitle?: LocalizedText;
  description: LocalizedText;
  abstract: LocalizedText;
  authors: Array<{ name: string; alternateName?: string }>;
  datePublished: string;
  citationDate: string;
  onlineDate?: string;
  publicationLanguage: string;
  keywords: LocalizedText & { values: string[] };
  doi: string;
  pages: { first: string; last: string };
  sameAs: string[];
  highwire: Record<string, string | string[]>;
  isPartOf: JsonLdValue;
  publisher?: JsonLdValue;
  identifiers?: JsonLdValue[];
};

function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

function localizedPage(language: SiteLanguage, enPath: string, zhPath: string) {
  return absoluteUrl(language === "zh" ? zhPath : enPath);
}

export function createPageMetadata({
  language,
  title,
  description,
  enPath,
  zhPath,
  type = "website",
  index = true,
  keywords,
  authors = ["Haoyang Ye"],
  publishedTime,
  other,
}: PageMetadataOptions): Metadata {
  const url = localizedPage(language, enPath, zhPath);
  const isChinese = language === "zh";
  const openGraphBase = {
    title,
    description,
    url,
    siteName: isChinese ? "叶昊洋学术主页" : "Haoyang Ye Academic Profile",
    locale: isChinese ? "zh_CN" : "en_US",
    alternateLocale: isChinese ? ["en_US"] : ["zh_CN"],
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: isChinese ? "叶昊洋学术主页" : "Haoyang Ye academic profile",
      },
    ],
  };
  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          ...openGraphBase,
          type: "article",
          publishedTime,
        }
      : type === "profile"
        ? {
            ...openGraphBase,
            type: "profile",
            firstName: "Haoyang",
            lastName: "Ye",
            username: "FHGSYHY",
          }
        : { ...openGraphBase, type: "website" };

  return {
    title,
    description,
    authors: authors.map((name) => ({ name })),
    keywords,
    alternates: {
      canonical: url,
      languages: {
        en: absoluteUrl(enPath),
        "zh-Hans": absoluteUrl(zhPath),
        "x-default": absoluteUrl(enPath),
      },
    },
    robots: index
      ? {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : {
          index: false,
          follow: true,
          googleBot: { index: false, follow: true },
        },
    openGraph,
    twitter: {
      card: "summary_large_image",
      creator: "@FHGSYHY",
      site: "@FHGSYHY",
      title,
      description,
      images: [OG_IMAGE_URL],
    },
    other,
  };
}

const publicationRecords: Record<PublicationSlug, PublicationSeoRecord> = {
  "equilibrium-analysis-network-externalities": {
    slug: "equilibrium-analysis-network-externalities",
    title: {
      en: "Equilibrium Analysis of Simple Majority Voting under Network Externalities",
      zh: "网络外部性下简单多数投票的均衡分析",
    },
    alternateTitle: {
      en: "网络外部性下简单多数投票的均衡分析",
      zh: "Equilibrium Analysis of Simple Majority Voting under Network Externalities",
    },
    description: {
      en: "A study of equilibrium existence, two-threshold voting strategies, and network structure in costly simple-majority voting with interdependent values.",
      zh: "研究存在投票成本与相依价值时简单多数投票的均衡存在性、双阈值策略结构，以及社会网络结构对投票均衡的影响。",
    },
    abstract: {
      en: "In practice, voting often involves participation costs, and voters’ decisions are determined not only by their private interests but also by others’ values within their social networks. This paper investigates the equilibrium characteristics of simple majority voting in a general model featuring costly voting and interdependent values. First, this paper proves the existence of voting equilibria and characterizes the two-threshold strategy structure adopted by voters in any equilibrium. Second, under the assumptions of linear network externalities and symmetric expected payoffs, this paper examines how network structure affects voting equilibria. The theoretical analysis reveals that if the social network is an irregular graph, only asymmetric equilibria exist. In contrast, symmetric equilibria always exist in regular graphs and are unique when network externalities are relatively weak. Numerical simulations further show that voters’ participation rates (i.e., the probabilities of voting rather than abstaining) decrease with increasing strength of network externalities or greater network connectivity.",
      zh: "现实中投票往往存在参与成本，且个体的投票决策不仅取决于自身利益，也受到社会网络中其他人的影响。本文在一般的投票成本与相依价值模型框架下，研究简单多数投票的均衡特征。首先，我们证明了投票博弈均衡的存在性，并进一步刻画了所有均衡所遵循的二阈值策略结构。其次，在线性网络外部性与期望收益对称性的假设下，我们考察了网络结构对投票均衡的影响机制。理论分析表明：当社会网络为非正则图结构时，投票博弈仅存在非对称均衡；相对应地，在正则图结构的社会网络中，对称均衡一定存在，且当网络外部性较弱时，该均衡具有唯一性。数值模拟结果进一步表明：选民的投票参与度（即选择投票而非弃权的概率）会随着网络外部性强度的增加或网络连接程度的增强而下降。",
    },
    authors: [
      { name: "Haoyang Ye", alternateName: "叶昊洋" },
      { name: "Jingyang Huang", alternateName: "黄婧扬" },
      { name: "Fanqi Shi", alternateName: "石凡奇" },
    ],
    datePublished: "2025-10-20",
    citationDate: "2025/10/20",
    publicationLanguage: "zh-Hans",
    keywords: {
      en: "network externalities, simple majority voting, voting cost, two-threshold strategy, symmetric equilibrium",
      zh: "网络外部性、简单多数投票、投票成本、双阈值策略、对称均衡",
      values: [
        "network externalities",
        "simple majority voting",
        "voting cost",
        "two-threshold strategy",
        "symmetric equilibrium",
      ],
    },
    doi: "10.12088/PKU.jjkx.2025.05.06",
    pages: { first: "119", last: "137" },
    sameAs: [
      "https://ccj.pku.edu.cn/article/info?aid=749989351395397",
    ],
    highwire: {
      citation_title: "网络外部性下简单多数投票的均衡分析",
      citation_author: ["Haoyang Ye", "Jingyang Huang", "Fanqi Shi"],
      citation_publication_date: "2025/10/20",
      citation_journal_title: "Economic Science",
      citation_volume: "47",
      citation_issue: "5",
      citation_firstpage: "119",
      citation_lastpage: "137",
      citation_doi: "10.12088/PKU.jjkx.2025.05.06",
      citation_language: "zh",
    },
    isPartOf: {
      "@type": "PublicationIssue",
      issueNumber: "5",
      isPartOf: {
        "@type": "PublicationVolume",
        volumeNumber: "47",
        isPartOf: {
          "@type": "Periodical",
          name: "Economic Science",
          alternateName: "经济科学",
        },
      },
    },
  },
  "incentive-compatibility-ai-alignment": {
    slug: "incentive-compatibility-ai-alignment",
    title: {
      en: "Roadmap on Incentive Compatibility for AI Alignment and Governance in Sociotechnical Systems",
      zh: "Roadmap on Incentive Compatibility for AI Alignment and Governance in Sociotechnical Systems",
    },
    description: {
      en: "A roadmap for incentive-compatible sociotechnical AI alignment through mechanism design, contract theory, and Bayesian persuasion.",
      zh: "围绕机制设计、契约理论与贝叶斯劝说，提出激励相容的社会技术系统 AI 对齐研究路线。",
    },
    abstract: {
      en: "The burgeoning integration of artificial intelligence (AI) into human society brings forth significant implications for societal governance and safety. While considerable strides have been made in addressing AI alignment challenges, existing methodologies primarily focus on technical facets, often neglecting the intricate sociotechnical nature of AI systems, which can lead to a misalignment between the development and deployment contexts. To this end, we posit a new problem worth exploring: Incentive Compatibility Sociotechnical Alignment Problem (ICSAP). We hope this can call for more researchers to explore how to leverage the principles of Incentive Compatibility (IC) from game theory to bridge the gap between technical and societal components to maintain AI consensus with human societies in different contexts. We further discuss three classical game problems for achieving IC: mechanism design, contract theory, and Bayesian persuasion, in addressing the perspectives, potentials, and challenges of solving ICSAP, and provide preliminary implementation conceptions.",
      zh: "The burgeoning integration of artificial intelligence (AI) into human society brings forth significant implications for societal governance and safety. While considerable strides have been made in addressing AI alignment challenges, existing methodologies primarily focus on technical facets, often neglecting the intricate sociotechnical nature of AI systems, which can lead to a misalignment between the development and deployment contexts. To this end, we posit a new problem worth exploring: Incentive Compatibility Sociotechnical Alignment Problem (ICSAP). We hope this can call for more researchers to explore how to leverage the principles of Incentive Compatibility (IC) from game theory to bridge the gap between technical and societal components to maintain AI consensus with human societies in different contexts. We further discuss three classical game problems for achieving IC: mechanism design, contract theory, and Bayesian persuasion, in addressing the perspectives, potentials, and challenges of solving ICSAP, and provide preliminary implementation conceptions.",
    },
    authors: [
      { name: "Zhaowei Zhang" },
      { name: "Fengshuo Bai" },
      { name: "Mingzhi Wang" },
      { name: "Haoyang Ye", alternateName: "叶昊洋" },
      { name: "Chengdong Ma" },
      { name: "Yaodong Yang" },
    ],
    datePublished: "2025-08-07",
    citationDate: "2026",
    onlineDate: "2025/08/07",
    publicationLanguage: "en",
    keywords: {
      en: "incentive compatibility, collaborative intelligence, AI alignment, sociotechnical systems",
      zh: "激励相容、协作智能、AI 对齐、社会技术系统",
      values: [
        "incentive compatibility",
        "collaborative intelligence",
        "AI alignment",
        "sociotechnical systems",
      ],
    },
    doi: "10.1007/978-3-032-00800-8_33",
    pages: { first: "370", last: "380" },
    sameAs: [
      "https://doi.org/10.1007/978-3-032-00800-8_33",
      "https://link.springer.com/chapter/10.1007/978-3-032-00800-8_33",
      "https://dl.acm.org/doi/10.1007/978-3-032-00800-8_33",
    ],
    highwire: {
      citation_title:
        "Roadmap on Incentive Compatibility for AI Alignment and Governance in Sociotechnical Systems",
      citation_author: [
        "Zhaowei Zhang",
        "Fengshuo Bai",
        "Mingzhi Wang",
        "Haoyang Ye",
        "Chengdong Ma",
        "Yaodong Yang",
      ],
      citation_publication_date: "2026",
      citation_online_date: "2025/08/07",
      citation_conference_title:
        "18th International Conference on Artificial General Intelligence (AGI 2025)",
      citation_book_title: "Artificial General Intelligence: AGI 2025",
      citation_volume: "16058",
      citation_firstpage: "370",
      citation_lastpage: "380",
      citation_isbn: ["978-3-032-00799-5", "978-3-032-00800-8"],
      citation_publisher: "Springer, Cham",
      citation_doi: "10.1007/978-3-032-00800-8_33",
      citation_language: "en",
    },
    isPartOf: {
      "@type": "PublicationVolume",
      name: "Artificial General Intelligence: AGI 2025",
      volumeNumber: "16058",
      isPartOf: {
        "@type": "CreativeWorkSeries",
        name: "Lecture Notes in Computer Science",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Springer, Cham",
      url: "https://link.springer.com/",
    },
    identifiers: [
      {
        "@type": "PropertyValue",
        propertyID: "ISBN",
        value: "978-3-032-00799-5",
      },
      {
        "@type": "PropertyValue",
        propertyID: "eISBN",
        value: "978-3-032-00800-8",
      },
    ],
  },
};

const homeText = {
  en: {
    title: "Haoyang Ye (叶昊洋) · Academic Profile",
    description:
      "Academic profile of Haoyang Ye at Peking University, featuring research in reinforcement learning, LLM post-training and agentic RL, publications, education and honors.",
  },
  zh: {
    title: "叶昊洋（Haoyang Ye）· 学术主页",
    description:
      "叶昊洋的学术主页，展示在北京大学的科研经历、强化学习与大语言模型后训练研究方向、发表论文、教育背景和荣誉奖项。",
  },
} as const;

export function homeMetadata(language: SiteLanguage): Metadata {
  const text = homeText[language];
  return createPageMetadata({
    language,
    title: text.title,
    description: text.description,
    enPath: "/",
    zhPath: "/zh/",
    type: "profile",
    keywords: [
      "Haoyang Ye",
      "叶昊洋",
      "Peking University",
      "reinforcement learning",
      "LLM post-training",
      "agentic RL",
    ],
  });
}

export function homeJsonLd(language: SiteLanguage): JsonLdValue {
  const isChinese = language === "zh";
  const pageUrl = language === "zh" ? `${SITE_URL}/zh/` : `${SITE_URL}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: "Haoyang Ye Academic Profile",
        alternateName: "叶昊洋学术主页",
        inLanguage: ["en", "zh-Hans"],
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profile-page`,
        url: pageUrl,
        name: homeText[language].title,
        description: homeText[language].description,
        inLanguage: isChinese ? "zh-Hans" : "en",
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Haoyang Ye",
        alternateName: "叶昊洋",
        url: `${SITE_URL}/`,
        email: `mailto:${EMAIL}`,
        affiliation: {
          "@type": "CollegeOrUniversity",
          name: "Peking University",
          alternateName: "北京大学",
          url: "https://www.pku.edu.cn/",
        },
        sameAs: [GITHUB_URL, ORCID_URL, X_URL],
        identifier: {
          "@type": "PropertyValue",
          propertyID: "ORCID",
          value: "0009-0009-3215-2811",
          url: ORCID_URL,
        },
        knowsAbout: [
          "Reinforcement Learning",
          "LLM post-training",
          "Agentic RL",
        ],
      },
    ],
  };
}

const pageText = {
  publications: {
    en: {
      title: "Publications · Haoyang Ye",
      description:
        "Publications by Haoyang Ye on network externalities, voting theory, incentive compatibility and AI alignment, with abstracts, DOI links and citations.",
    },
    zh: {
      title: "发表论文 · 叶昊洋",
      description:
        "叶昊洋关于网络外部性、投票理论、激励相容与 AI 对齐的发表论文，包含摘要、DOI、引用格式和官方页面。",
    },
  },
  blog: {
    en: { title: "Blog · Haoyang Ye", description: "Blog by Haoyang Ye." },
    zh: { title: "博客 · 叶昊洋", description: "叶昊洋的个人博客。" },
  },
  links: {
    en: { title: "Links · Haoyang Ye", description: "Friend links curated by Haoyang Ye." },
    zh: { title: "友链 · 叶昊洋", description: "叶昊洋整理的朋友主页链接。" },
  },
  academic: {
    en: {
      title: "Academic Index · Haoyang Ye",
      description: "Reserved academic sections for Haoyang Ye.",
    },
    zh: { title: "学术索引 · 叶昊洋", description: "叶昊洋学术主页的预留内容索引。" },
  },
} as const;

export function publicationsMetadata(language: SiteLanguage): Metadata {
  const text = pageText.publications[language];
  return createPageMetadata({
    language,
    title: text.title,
    description: text.description,
    enPath: "/publications/",
    zhPath: "/zh/publications/",
    keywords: [
      "Haoyang Ye publications",
      "network externalities",
      "simple majority voting",
      "incentive compatibility",
      "AI alignment",
    ],
  });
}

export function simplePageMetadata(
  page: "blog" | "links" | "academic",
  language: SiteLanguage,
): Metadata {
  const text = pageText[page][language];
  const enPath = `/${page}/`;
  return createPageMetadata({
    language,
    title: text.title,
    description: text.description,
    enPath,
    zhPath: `/zh${enPath}`,
    index: false,
  });
}

export function publicationMetadata(
  slug: PublicationSlug,
  language: SiteLanguage,
): Metadata {
  const publication = publicationRecords[slug];
  const title = `${publication.title[language]} · ${language === "zh" ? "叶昊洋" : "Haoyang Ye"}`;
  return createPageMetadata({
    language,
    title,
    description: publication.description[language],
    enPath: `/publications/${slug}/`,
    zhPath: `/zh/publications/${slug}/`,
    type: "article",
    authors: publication.authors.map((author) => author.name),
    publishedTime: publication.datePublished,
    keywords: publication.keywords.values,
    other: publication.highwire,
  });
}

export function publicationsJsonLd(language: SiteLanguage): JsonLdValue {
  const isChinese = language === "zh";
  const pageUrl = localizedPage(
    language,
    "/publications/",
    "/zh/publications/",
  );
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const itemListId = `${pageUrl}#publication-list`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#collection-page`,
        url: pageUrl,
        name: pageText.publications[language].title,
        description: pageText.publications[language].description,
        inLanguage: isChinese ? "zh-Hans" : "en",
        isPartOf: { "@id": WEBSITE_ID },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: { "@id": itemListId },
      },
      {
        "@type": "ItemList",
        "@id": itemListId,
        numberOfItems: 2,
        itemListElement: Object.values(publicationRecords).map((publication, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: publication.title[language],
          url: localizedPage(
            language,
            `/publications/${publication.slug}/`,
            `/zh/publications/${publication.slug}/`,
          ),
        })),
      },
      breadcrumbJsonLd(
        breadcrumbId,
        language,
        [{ name: isChinese ? "发表论文" : "Publications", url: pageUrl }],
      ),
    ],
  };
}

export function publicationJsonLd(
  slug: PublicationSlug,
  language: SiteLanguage,
): JsonLdValue {
  const publication = publicationRecords[slug];
  const isChinese = language === "zh";
  const pageUrl = localizedPage(
    language,
    `/publications/${slug}/`,
    `/zh/publications/${slug}/`,
  );
  const publicationsUrl = localizedPage(
    language,
    "/publications/",
    "/zh/publications/",
  );
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const identifier: JsonLdValue[] = [
    {
      "@type": "PropertyValue",
      propertyID: "DOI",
      value: publication.doi,
      ...(slug === "incentive-compatibility-ai-alignment"
        ? { url: `https://doi.org/${publication.doi}` }
        : {}),
    },
    ...(publication.identifiers ?? []),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ScholarlyArticle",
        "@id": `${pageUrl}#article`,
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        headline: publication.title[language],
        alternateHeadline: publication.alternateTitle?.[language],
        description: publication.description[language],
        abstract: publication.abstract[language],
        inLanguage: publication.publicationLanguage,
        datePublished: publication.datePublished,
        author: publication.authors.map((author) =>
          author.name === "Haoyang Ye"
            ? {
                "@type": "Person",
                "@id": PERSON_ID,
                name: author.name,
                alternateName: author.alternateName,
                url: `${SITE_URL}/`,
              }
            : {
                "@type": "Person",
                name: author.name,
                alternateName: author.alternateName,
              },
        ),
        keywords: publication.keywords[language],
        identifier,
        pagination: `${publication.pages.first}-${publication.pages.last}`,
        pageStart: publication.pages.first,
        pageEnd: publication.pages.last,
        isPartOf: publication.isPartOf,
        publisher: publication.publisher,
        sameAs: publication.sameAs,
        breadcrumb: { "@id": breadcrumbId },
      },
      breadcrumbJsonLd(breadcrumbId, language, [
        {
          name: isChinese ? "发表论文" : "Publications",
          url: publicationsUrl,
        },
        { name: publication.title[language], url: pageUrl },
      ]),
    ],
  };
}

function breadcrumbJsonLd(
  id: string,
  language: SiteLanguage,
  descendants: Array<{ name: string; url: string }>,
): JsonLdValue {
  const homeUrl = language === "zh" ? `${SITE_URL}/zh/` : `${SITE_URL}/`;
  const homeName = language === "zh" ? "主页" : "Home";
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: [{ name: homeName, url: homeUrl }, ...descendants].map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      }),
    ),
  };
}
