"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiOrcid, SiX } from "react-icons/si";

type Language = "en" | "zh";
type Theme = "light" | "dark";
export type PageKey =
  | "home"
  | "publications"
  | "publication-voting"
  | "publication-icsap"
  | "blog"
  | "links"
  | "academic";

const EMAIL = "2501112105@stu.pku.edu.cn";
const GITHUB_URL = "https://github.com/yhyfhgs";
const ORCID_URL = "https://orcid.org/0009-0009-3215-2811";
const X_URL = "https://x.com/2FH5GS";

const copy = {
  en: {
    skip: "Skip to main content",
    brandLabel: "Haoyang Ye home",
    nav: {
      home: "Home",
      research: "Research",
      publications: "Publications",
      blog: "Blog",
      links: "Links",
    },
    controls: {
      language: "Language",
      appearance: "Appearance",
      light: "Light",
      dark: "Dark",
    },
    hero: {
      overline: "Peking University",
      name: "Haoyang Ye",
      description:
        "Research Interests: Reinforcement Learning, LLM post training and Agentic RL",
      email: "Email",
      github: "GitHub",
      orcid: "ORCID",
      x: "X",
    },
    shared: {
      allPublications: "All publications",
      openPage: "Open page",
      authors: "Authors",
      correspondingAuthor: "Corresponding author",
      advisor: "Advisor",
      institution: "Institution",
      researchGroup: "Research group",
      period: "Period",
      abstract: "Abstract",
      keywords: "Keywords",
      affiliations: "Affiliations",
      funding: "Funding",
      citation: "Citation",
      officialResources: "Official resources",
      viewPublication: "View publication",
      backToPublications: "Back to publications",
    },
    research: {
      title: "Research",
      projects: [
        {
          title: "Optimal Stopping SFT for RL Post-Training",
          institution: "Peking University",
          researchGroup: "",
          period: "Sept 2025 - Jan 2026",
          advisor: "Ruosong Wang",
          summary:
            "When should supervised fine-tuning stop so that the following reinforcement learning stage reaches the best final performance on mathematical reasoning?",
          bullets: [
            "Performed SFT and RL post-training on multiple sizes of Qwen2.5 models using the OpenR1 dataset, continuously saving checkpoints throughout SFT.",
            "Ran RL separately from each checkpoint and found that, before the validation-loss minimum, later checkpoints begin RL with lower entropy but higher reward; response length consistently follows a decrease-then-increase pattern.",
            "Found that RL reward continues to improve after SFT validation loss reaches its minimum and early overfitting begins, declining only after validation loss rises substantially; this places the optimal SFT stopping point inside the early-overfitting regime.",
            "Observed the pattern clearly on 3B and 7B models; the 0.5B model was too small to learn the OpenR1 mathematical problems effectively.",
          ],
        },
        {
          title: "Advertisement and Item Fusion Mechanism",
          institution: "Peking University",
          researchGroup: "daGAME Lab",
          period: "June 2023 - Dec 2023",
          advisor: "",
          summary:
            "A multi-slot auction for mixed item and advertisement rankings, where content contrast creates ordering externalities in click-through rates.",
          bullets: [
            "Designed an evaluator architecture to capture ordering externalities and recover the underlying click-through rate.",
            "Designed a generator architecture that produces the best sequence from item features and bidding prices.",
            "Trained both networks and derived supporting theoretical results.",
          ],
        },
      ],
    },
    publications: {
      title: "Publications",
      count: "2 publications",
      items: [
        {
          slug: "equilibrium-analysis-network-externalities",
          venue: "Economic Science · 47(5) · 2025",
          date: "Published 20 Oct 2025",
          title:
            "Equilibrium Analysis of Simple Majority Voting under Network Externalities",
          secondaryTitle: "网络外部性下简单多数投票的均衡分析",
          authors: "Haoyang Ye, Jingyang Huang, Fanqi Shi",
          correspondingAuthor: "Fanqi Shi",
          abstract:
            "In practice, voting often involves participation costs, and voters’ decisions are determined not only by their private interests but also by others’ values within their social networks. This paper investigates the equilibrium characteristics of simple majority voting in a general model featuring costly voting and interdependent values. First, this paper proves the existence of voting equilibria and characterizes the two-threshold strategy structure adopted by voters in any equilibrium. Second, under the assumptions of linear network externalities and symmetric expected payoffs, this paper examines how network structure affects voting equilibria. The theoretical analysis reveals that if the social network is an irregular graph, only asymmetric equilibria exist. In contrast, symmetric equilibria always exist in regular graphs and are unique when network externalities are relatively weak. Numerical simulations further show that voters’ participation rates (i.e., the probabilities of voting rather than abstaining) decrease with increasing strength of network externalities or greater network connectivity.",
          keywords: [
            "network externalities",
            "simple majority voting",
            "voting cost",
            "two-threshold strategy",
            "symmetric equilibrium",
          ],
          facts: [
            { label: "Type", value: "Journal article" },
            { label: "Journal", value: "Economic Science" },
            { label: "Volume / issue", value: "47 / 05" },
            { label: "Pages", value: "119–137" },
            { label: "Published", value: "20 October 2025" },
            { label: "DOI", value: "10.12088/PKU.jjkx.2025.05.06" },
            { label: "Classification", value: "F016 · JEL D72, D82, D85" },
          ],
          affiliations: [
            "Haoyang Ye — School of Computer Science, Peking University",
            "Jingyang Huang — School of Mathematical Sciences, Peking University",
            "Fanqi Shi — School of Economics, Peking University",
          ],
          funding: [
            "National Natural Science Foundation of China, Young Scientists Fund, grant 72303011",
            "Seed Fund of the School of Economics, Peking University",
          ],
          citation:
            "Ye, H., Huang, J., & Shi, F. (2025). Equilibrium Analysis of Simple Majority Voting under Network Externalities. Economic Science, 47(05), 119–137. https://doi.org/10.12088/PKU.jjkx.2025.05.06",
          links: [
            {
              label: "Article page",
              href: "https://ccj.pku.edu.cn/article/info?aid=749989351395397",
            },
            {
              label: "DOI",
              href: "https://doi.org/10.12088/PKU.jjkx.2025.05.06",
            },
            {
              label: "PDF",
              href: "https://ccj.pku.edu.cn/Article/DownLoad?id=749989351395397&type=ArticleFile",
            },
            {
              label: "BibTeX",
              href: "https://ccj.pku.edu.cn/Article/DownLoad/749989351395397?type=BibTeX",
            },
          ],
        },
        {
          slug: "incentive-compatibility-ai-alignment",
          venue: "AGI 2025 · LNCS 16058",
          date: "First online 07 Aug 2025 · Citation year 2026",
          title:
            "Roadmap on Incentive Compatibility for AI Alignment and Governance in Sociotechnical Systems",
          secondaryTitle: "",
          authors:
            "Zhaowei Zhang, Fengshuo Bai, Mingzhi Wang, Haoyang Ye, Chengdong Ma, Yaodong Yang",
          correspondingAuthor: "Yaodong Yang",
          abstract:
            "The burgeoning integration of artificial intelligence (AI) into human society brings forth significant implications for societal governance and safety. While considerable strides have been made in addressing AI alignment challenges, existing methodologies primarily focus on technical facets, often neglecting the intricate sociotechnical nature of AI systems, which can lead to a misalignment between the development and deployment contexts. To this end, we posit a new problem worth exploring: Incentive Compatibility Sociotechnical Alignment Problem (ICSAP). We hope this can call for more researchers to explore how to leverage the principles of Incentive Compatibility (IC) from game theory to bridge the gap between technical and societal components to maintain AI consensus with human societies in different contexts. We further discuss three classical game problems for achieving IC: mechanism design, contract theory, and Bayesian persuasion, in addressing the perspectives, potentials, and challenges of solving ICSAP, and provide preliminary implementation conceptions.",
          keywords: [
            "incentive compatibility",
            "collaborative intelligence",
            "AI alignment",
            "sociotechnical systems",
          ],
          facts: [
            { label: "Type", value: "Conference paper" },
            { label: "Conference", value: "18th International Conference on Artificial General Intelligence (AGI 2025)" },
            { label: "Series", value: "Lecture Notes in Computer Science / LNAI, volume 16058" },
            { label: "Pages", value: "370–380" },
            { label: "First online", value: "07 August 2025" },
            { label: "Citation year", value: "2026" },
            { label: "Publisher", value: "Springer, Cham" },
            { label: "DOI", value: "10.1007/978-3-032-00800-8_33" },
            { label: "ISBN", value: "978-3-032-00799-5 · 978-3-032-00800-8" },
          ],
          affiliations: [
            "Institute for Artificial Intelligence, Peking University — Zhaowei Zhang, Mingzhi Wang, Haoyang Ye, Chengdong Ma, Yaodong Yang",
            "State Key Laboratory of General Artificial Intelligence, BIGAI — Zhaowei Zhang",
            "Shanghai Jiao Tong University — Fengshuo Bai",
            "Zhongguancun Academy — Fengshuo Bai",
          ],
          funding: [
            "National Natural Science Foundation of China, grant 62376013",
          ],
          citation:
            "Zhang, Z., Bai, F., Wang, M., Ye, H., Ma, C., & Yang, Y. (2026). Roadmap on Incentive Compatibility for AI Alignment and Governance in Sociotechnical Systems. In M. Iklé, A. Kolonin, & M. Bennett (Eds.), Artificial General Intelligence: AGI 2025. Lecture Notes in Computer Science, vol. 16058, pp. 370–380. Springer, Cham. https://doi.org/10.1007/978-3-032-00800-8_33",
          links: [
            {
              label: "ACM Digital Library",
              href: "https://dl.acm.org/doi/10.1007/978-3-032-00800-8_33",
            },
            {
              label: "Springer",
              href: "https://link.springer.com/chapter/10.1007/978-3-032-00800-8_33",
            },
            {
              label: "DOI",
              href: "https://doi.org/10.1007/978-3-032-00800-8_33",
            },
            {
              label: "BibTeX",
              href: "https://citation-needed.springer.com/v2/references/10.1007/978-3-032-00800-8_33?flavour=citation&format=bibtex",
            },
          ],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          date: "Sept 2025 - Present",
          school: "Peking University",
          degreeLines: ["Ph.D. Student in Computer Science and Technology"],
          note: "Advisor: Ruosong Wang",
        },
        {
          date: "Sept 2021 - June 2025",
          school: "Peking University",
          degreeLines: [
            "B.S. in Information and Computing Science",
            "Double Major in Economics",
          ],
          note: "",
        },
      ],
    },
    honors: {
      title: "Honors",
      items: [
        {
          year: "2023 - 2024",
          title:
            "Grand Prize · 32nd PKU Challenge Cup May Fourth Youth Science Award Competition",
        },
        {
          year: "Oct 2020",
          title: "Silver Medal · 37th Chinese Physics Olympiad (CPhO)",
        },
      ],
    },
    blog: {
      title: "Blog",
      status: "No posts yet.",
    },
    links: {
      title: "Links",
      items: [
        {
          name: "Yuechen Zhu",
          description: "A group is a groupoid with a single object.",
          href: "https://zzzyc001.github.io/",
        },
      ],
    },
    academic: {
      title: "Academic Index",
      modules: [
        { id: "news", label: "News" },
        { id: "talks", label: "Talks" },
        { id: "teaching", label: "Teaching" },
        { id: "projects", label: "Projects & Software" },
        { id: "service", label: "Service" },
      ],
      cv: "CV",
      pdf: "PDF",
    },
    footer: {
      note: "Academic profile",
      top: "Back to top",
    },
  },
  zh: {
    skip: "跳转到主要内容",
    brandLabel: "叶昊洋主页",
    nav: {
      home: "主页",
      research: "科研",
      publications: "发表论文",
      blog: "博客",
      links: "友链",
    },
    controls: {
      language: "语言",
      appearance: "外观",
      light: "浅色",
      dark: "深色",
    },
    hero: {
      overline: "北京大学",
      name: "叶昊洋",
      description:
        "研究方向：Reinforcement Learning, LLM post training and Agentic RL",
      email: "邮箱",
      github: "GitHub",
      orcid: "ORCID",
      x: "X",
    },
    shared: {
      allPublications: "全部论文",
      openPage: "进入页面",
      authors: "作者",
      correspondingAuthor: "通讯作者",
      advisor: "导师",
      institution: "所属机构",
      researchGroup: "课题组",
      period: "时间",
      abstract: "摘要",
      keywords: "关键词",
      affiliations: "作者机构",
      funding: "资助信息",
      citation: "引用格式",
      officialResources: "官方资源",
      viewPublication: "查看论文",
      backToPublications: "返回论文列表",
    },
    research: {
      title: "科研经历",
      projects: [
        {
          title: "Optimal Stopping SFT for RL Post-Training",
          institution: "北京大学",
          researchGroup: "",
          period: "2025.9 - 2026.1",
          advisor: "王若松",
          summary:
            "针对数学推理任务，研究大模型后训练中的 SFT 应在何时停止，从而使后续 RL 阶段获得最优的最终性能。",
          bullets: [
            "在 Qwen2.5 系列多种规模模型上使用 OpenR1 数据集开展 SFT 与 RL 后训练，并在 SFT 过程中持续保存 checkpoint。",
            "分别从每个 checkpoint 开始 RL 训练；发现验证集 loss 最低点之前，后期 checkpoint 的 RL 起始熵更低但 reward 更高，回复长度始终呈现先下降后上升的规律。",
            "发现 SFT 验证集 loss 越过最低点并进入早期过拟合后，RL 最终 reward 仍会继续提升，说明 SFT 的最优停止点位于早期过拟合阶段之内。",
            "该规律在 3B 与 7B 模型上较为明显；0.5B 模型规模过小，难以有效学习 OpenR1 中的数学题。",
          ],
        },
        {
          title: "Advertisement and Item Fusion Mechanism",
          institution: "北京大学",
          researchGroup: "daGAME Lab",
          period: "2023.6 - 2023.12",
          advisor: "",
          summary:
            "研究物品与广告混合多槽位拍卖问题，其中内容对比会对列表顺序及点击率产生外部性。",
          bullets: [
            "设计评估器架构，用于刻画顺序外部性并还原真实点击率。",
            "设计生成器架构，根据商品特征与出价给出最优排序序列。",
            "训练上述两个网络，并推导若干理论结果。",
          ],
        },
      ],
    },
    publications: {
      title: "发表论文",
      count: "2 篇论文",
      items: [
        {
          slug: "equilibrium-analysis-network-externalities",
          venue: "《经济科学》 · 47(5) · 2025",
          date: "2025 年 10 月 20 日刊登",
          title: "网络外部性下简单多数投票的均衡分析",
          secondaryTitle:
            "Equilibrium Analysis of Simple Majority Voting under Network Externalities",
          authors: "叶昊洋、黄婧扬、石凡奇",
          correspondingAuthor: "石凡奇",
          abstract:
            "现实中投票往往存在参与成本，且个体的投票决策不仅取决于自身利益，也受到社会网络中其他人的影响。本文在一般的投票成本与相依价值模型框架下，研究简单多数投票的均衡特征。首先，我们证明了投票博弈均衡的存在性，并进一步刻画了所有均衡所遵循的二阈值策略结构。其次，在线性网络外部性与期望收益对称性的假设下，我们考察了网络结构对投票均衡的影响机制。理论分析表明：当社会网络为非正则图结构时，投票博弈仅存在非对称均衡；相对应地，在正则图结构的社会网络中，对称均衡一定存在，且当网络外部性较弱时，该均衡具有唯一性。数值模拟结果进一步表明：选民的投票参与度（即选择投票而非弃权的概率）会随着网络外部性强度的增加或网络连接程度的增强而下降。",
          keywords: [
            "网络外部性",
            "简单多数投票",
            "投票成本",
            "双阈值策略",
            "对称均衡",
          ],
          facts: [
            { label: "类型", value: "期刊论文" },
            { label: "期刊", value: "《经济科学》" },
            { label: "卷 / 期", value: "47 / 05" },
            { label: "页码", value: "119–137" },
            { label: "刊登日期", value: "2025 年 10 月 20 日" },
            { label: "DOI", value: "10.12088/PKU.jjkx.2025.05.06" },
            { label: "分类号", value: "F016 · JEL D72、D82、D85" },
          ],
          affiliations: [
            "叶昊洋 — 北京大学计算机学院",
            "黄婧扬 — 北京大学数学科学学院",
            "石凡奇 — 北京大学经济学院",
          ],
          funding: [
            "国家自然科学基金青年项目“不对称信息下社会网络干预的机制设计”（72303011）",
            "北京大学经济学院种子基金",
          ],
          citation:
            "叶昊洋, 黄婧扬, 石凡奇. 网络外部性下简单多数投票的均衡分析[J]. 经济科学, 2025, 47(05): 119–137. https://doi.org/10.12088/PKU.jjkx.2025.05.06",
          links: [
            {
              label: "论文页面",
              href: "https://ccj.pku.edu.cn/article/info?aid=749989351395397",
            },
            {
              label: "DOI",
              href: "https://doi.org/10.12088/PKU.jjkx.2025.05.06",
            },
            {
              label: "PDF",
              href: "https://ccj.pku.edu.cn/Article/DownLoad?id=749989351395397&type=ArticleFile",
            },
            {
              label: "BibTeX",
              href: "https://ccj.pku.edu.cn/Article/DownLoad/749989351395397?type=BibTeX",
            },
          ],
        },
        {
          slug: "incentive-compatibility-ai-alignment",
          venue: "AGI 2025 · LNCS 16058",
          date: "2025 年 8 月 7 日在线刊登 · 正式引用年份 2026",
          title:
            "Roadmap on Incentive Compatibility for AI Alignment and Governance in Sociotechnical Systems",
          secondaryTitle: "",
          authors:
            "Zhaowei Zhang, Fengshuo Bai, Mingzhi Wang, Haoyang Ye, Chengdong Ma, Yaodong Yang",
          correspondingAuthor: "Yaodong Yang",
          abstract:
            "The burgeoning integration of artificial intelligence (AI) into human society brings forth significant implications for societal governance and safety. While considerable strides have been made in addressing AI alignment challenges, existing methodologies primarily focus on technical facets, often neglecting the intricate sociotechnical nature of AI systems, which can lead to a misalignment between the development and deployment contexts. To this end, we posit a new problem worth exploring: Incentive Compatibility Sociotechnical Alignment Problem (ICSAP). We hope this can call for more researchers to explore how to leverage the principles of Incentive Compatibility (IC) from game theory to bridge the gap between technical and societal components to maintain AI consensus with human societies in different contexts. We further discuss three classical game problems for achieving IC: mechanism design, contract theory, and Bayesian persuasion, in addressing the perspectives, potentials, and challenges of solving ICSAP, and provide preliminary implementation conceptions.",
          keywords: [
            "incentive compatibility",
            "collaborative intelligence",
            "AI alignment",
            "sociotechnical systems",
          ],
          facts: [
            { label: "类型", value: "Conference paper" },
            { label: "会议", value: "18th International Conference on Artificial General Intelligence (AGI 2025)" },
            { label: "丛书", value: "Lecture Notes in Computer Science / LNAI, volume 16058" },
            { label: "页码", value: "370–380" },
            { label: "首次在线", value: "2025 年 8 月 7 日" },
            { label: "正式引用年份", value: "2026" },
            { label: "出版者", value: "Springer, Cham" },
            { label: "DOI", value: "10.1007/978-3-032-00800-8_33" },
            { label: "ISBN", value: "978-3-032-00799-5 · 978-3-032-00800-8" },
          ],
          affiliations: [
            "Institute for Artificial Intelligence, Peking University — Zhaowei Zhang, Mingzhi Wang, Haoyang Ye, Chengdong Ma, Yaodong Yang",
            "State Key Laboratory of General Artificial Intelligence, BIGAI — Zhaowei Zhang",
            "Shanghai Jiao Tong University — Fengshuo Bai",
            "Zhongguancun Academy — Fengshuo Bai",
          ],
          funding: [
            "National Natural Science Foundation of China（62376013）",
          ],
          citation:
            "Zhang, Z., Bai, F., Wang, M., Ye, H., Ma, C., & Yang, Y. (2026). Roadmap on Incentive Compatibility for AI Alignment and Governance in Sociotechnical Systems. In M. Iklé, A. Kolonin, & M. Bennett (Eds.), Artificial General Intelligence: AGI 2025. Lecture Notes in Computer Science, vol. 16058, pp. 370–380. Springer, Cham. https://doi.org/10.1007/978-3-032-00800-8_33",
          links: [
            {
              label: "ACM Digital Library",
              href: "https://dl.acm.org/doi/10.1007/978-3-032-00800-8_33",
            },
            {
              label: "Springer",
              href: "https://link.springer.com/chapter/10.1007/978-3-032-00800-8_33",
            },
            {
              label: "DOI",
              href: "https://doi.org/10.1007/978-3-032-00800-8_33",
            },
            {
              label: "BibTeX",
              href: "https://citation-needed.springer.com/v2/references/10.1007/978-3-032-00800-8_33?flavour=citation&format=bibtex",
            },
          ],
        },
      ],
    },
    education: {
      title: "教育背景",
      items: [
        {
          date: "2025.9 - 至今",
          school: "北京大学",
          degreeLines: ["计算机科学与技术方向博士研究生"],
          note: "导师：王若松",
        },
        {
          date: "2021.9 - 2025.6",
          school: "北京大学",
          degreeLines: [
            "信息与计算科学专业理学学士（B.S.）",
            "经济学专业双学位",
          ],
          note: "",
        },
      ],
    },
    honors: {
      title: "荣誉奖项",
      items: [
        {
          year: "2023 - 2024",
          title: "北京大学第 32 届“挑战杯”五四青年科学奖竞赛 · 特等奖",
        },
        {
          year: "2020.10",
          title: "第 37 届中国物理奥林匹克（CPhO）· 银牌",
        },
      ],
    },
    blog: {
      title: "博客",
      status: "暂无文章。",
    },
    links: {
      title: "友链",
      items: [
        {
          name: "Yuechen Zhu",
          description: "A group is a groupoid with a single object.",
          href: "https://zzzyc001.github.io/",
        },
      ],
    },
    academic: {
      title: "学术索引",
      modules: [
        { id: "news", label: "动态" },
        { id: "talks", label: "学术报告" },
        { id: "teaching", label: "教学" },
        { id: "projects", label: "项目与软件" },
        { id: "service", label: "学术服务" },
      ],
      cv: "简历",
      pdf: "PDF",
    },
    footer: {
      note: "学术主页",
      top: "返回顶部",
    },
  },
} as const;

type SiteContent = (typeof copy)[Language];

export default function AcademicSite({ page }: { page: PageKey }) {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const content = copy[language];
  const publicationsActive = page === "publications" || page.startsWith("publication-");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedLanguage = window.localStorage.getItem("hy-language");
      if (savedLanguage === "en" || savedLanguage === "zh") {
        setLanguage(savedLanguage);
        document.documentElement.lang = savedLanguage === "zh" ? "zh-CN" : "en";
      }

      const savedTheme = window.localStorage.getItem("hy-theme");
      const preferredTheme: Theme =
        savedTheme === "light" || savedTheme === "dark"
          ? savedTheme
          : window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
      setTheme(preferredTheme);
      document.documentElement.dataset.theme = preferredTheme;
      document.documentElement.style.colorScheme = preferredTheme;
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const selectLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("hy-language", nextLanguage);
    document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
  };

  const selectTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    window.localStorage.setItem("hy-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        {content.skip}
      </a>

      <header className="site-header" aria-label="Primary">
        <Link className="site-wordmark" href="/" aria-label={content.brandLabel}>
          {content.hero.name}
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          <Link href="/" aria-current={page === "home" ? "page" : undefined}>
            {content.nav.home}
          </Link>
          <Link href="/#research">{content.nav.research}</Link>
          <Link
            href="/publications"
            aria-current={publicationsActive ? "page" : undefined}
          >
            {content.nav.publications}
          </Link>
          <Link href="/blog" aria-current={page === "blog" ? "page" : undefined}>
            {content.nav.blog}
          </Link>
          <Link href="/links" aria-current={page === "links" ? "page" : undefined}>
            {content.nav.links}
          </Link>
        </nav>

        <div className="preference-controls">
          <div
            className="text-control"
            role="group"
            aria-label={content.controls.language}
          >
            <button
              type="button"
              aria-pressed={language === "en"}
              onClick={() => selectLanguage("en")}
            >
              EN
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              aria-pressed={language === "zh"}
              onClick={() => selectLanguage("zh")}
            >
              中文
            </button>
          </div>
          <div
            className="text-control"
            role="group"
            aria-label={content.controls.appearance}
          >
            <button
              type="button"
              aria-pressed={theme === "light"}
              onClick={() => selectTheme("light")}
            >
              {content.controls.light}
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              aria-pressed={theme === "dark"}
              onClick={() => selectTheme("dark")}
            >
              {content.controls.dark}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        {page === "home" && <HomePage content={content} />}
        {page === "publications" && <PublicationsPage content={content} />}
        {page === "publication-voting" && (
          <PublicationDetailPage content={content} publicationIndex={0} />
        )}
        {page === "publication-icsap" && (
          <PublicationDetailPage content={content} publicationIndex={1} />
        )}
        {page === "blog" && <BlogPage content={content} />}
        {page === "links" && <LinksPage content={content} />}
        {page === "academic" && <AcademicIndexPage content={content} />}
      </main>

      <footer className="site-footer">
        <span>© 2026 Haoyang Ye · {content.footer.note}</span>
        <div>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={"mailto:" + EMAIL}>{content.hero.email} ↗</a>
          <a href="#top">{content.footer.top} ↑</a>
        </div>
      </footer>
    </>
  );
}

function HomePage({ content }: { content: SiteContent }) {
  return (
    <div id="top" className="home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">{content.hero.overline}</p>
          <h1>{content.hero.name}</h1>
          <p className="hero-description">{content.hero.description}</p>
          <div className="contact-row">
            <a className="contact-link" data-contact="email" href={"mailto:" + EMAIL}>
              <MdOutlineEmail aria-hidden="true" focusable="false" />
              <span>{content.hero.email}</span>
            </a>
            <a
              className="contact-link"
              data-contact="github"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub aria-hidden="true" focusable="false" />
              <span>{content.hero.github}</span>
            </a>
            <a
              className="contact-link"
              data-contact="orcid"
              href={ORCID_URL}
              target="_blank"
              rel="noreferrer"
            >
              <SiOrcid aria-hidden="true" focusable="false" />
              <span>{content.hero.orcid}</span>
            </a>
            <a
              className="contact-link"
              data-contact="x"
              href={X_URL}
              target="_blank"
              rel="noreferrer"
            >
              <SiX aria-hidden="true" focusable="false" />
              <span>{content.hero.x}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="home-section" id="research">
        <SectionLabel title={content.research.title} />
        <div className="section-body research-list">
          {content.research.projects.map((project) => (
            <article className="research-item" key={project.title}>
              <dl className="research-meta">
                <div>
                  <dt>{content.shared.institution}</dt>
                  <dd className="research-institution">{project.institution}</dd>
                </div>
                {project.researchGroup && (
                  <div>
                    <dt>{content.shared.researchGroup}</dt>
                    <dd className="research-group">{project.researchGroup}</dd>
                  </div>
                )}
                <div>
                  <dt>{content.shared.period}</dt>
                  <dd><time className="research-time">{project.period}</time></dd>
                </div>
              </dl>
              <h2>{project.title}</h2>
              {project.advisor && (
                <p className="advisor">
                  {content.shared.advisor}: {project.advisor}
                </p>
              )}
              <p className="item-summary">{project.summary}</p>
              <ul className="detail-list">
                {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section" id="publications-preview">
        <SectionLabel title={content.publications.title} />
        <div className="section-body">
          <div className="compact-list">
            {content.publications.items.map((publication) => (
              <article key={publication.slug}>
                <p className="item-meta">{publication.venue}</p>
                <h2>{publication.title}</h2>
              </article>
            ))}
          </div>
          <Link className="text-link" href="/publications">
            {content.shared.allPublications} →
          </Link>
        </div>
      </section>

      <section className="home-section" id="education">
        <SectionLabel title={content.education.title} />
        <div className="section-body compact-list">
          {content.education.items.map((item) => (
            <article key={item.date} className="education-item">
              <p className="item-meta">{item.date}</p>
              <h2>{item.school}</h2>
              <div className="degree-lines">
                {item.degreeLines.map((line) => <p key={line}>{line}</p>)}
              </div>
              {item.note && <p className="quiet">{item.note}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="home-section" id="honors">
        <SectionLabel title={content.honors.title} />
        <div className="section-body compact-list honors-list">
          {content.honors.items.map((item) => (
            <article key={item.title}>
              <p className="item-meta">{item.year}</p>
              <h2>{item.title}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section" id="blog-preview">
        <SectionLabel title={content.blog.title} />
        <div className="section-body">
          <Link className="preview-row" href="/blog">
            <span>{content.blog.status}</span>
            <em>{content.shared.openPage} →</em>
          </Link>
        </div>
      </section>

      <section className="home-section home-endmatter" id="links-preview">
        <SectionLabel title={content.links.title} />
        <div className="section-body">
          <Link
            className="preview-row preview-row-empty"
            href="/links"
            aria-label={`${content.links.title}: ${content.shared.openPage}`}
          >
            <span aria-hidden="true" />
            <em>{content.shared.openPage} →</em>
          </Link>
        </div>
      </section>
    </div>
  );
}

function PublicationsPage({ content }: { content: SiteContent }) {
  return (
    <div id="top" className="subpage">
      <PageHeader title={content.publications.title} meta={content.publications.count} />
      <div className="publication-list">
        {content.publications.items.map((publication) => (
          <article className="publication-item" key={publication.slug}>
            <div className="publication-meta">
              <p>{publication.venue}</p>
              <time>{publication.date}</time>
            </div>
            <h2>
              <Link href={`/publications/${publication.slug}`}>{publication.title}</Link>
            </h2>
            {publication.secondaryTitle && (
              <p className="secondary-title">{publication.secondaryTitle}</p>
            )}
            <p className="authors">
              <span>{content.shared.authors}</span>
              {publication.authors}
            </p>
            <p className="corresponding-author">
              {content.shared.correspondingAuthor}: {publication.correspondingAuthor}
            </p>
            <Link className="text-link" href={`/publications/${publication.slug}`}>
              {content.shared.viewPublication} →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

function PublicationDetailPage({
  content,
  publicationIndex,
}: {
  content: SiteContent;
  publicationIndex: 0 | 1;
}) {
  const publication = content.publications.items[publicationIndex];

  return (
    <article id="top" className="subpage publication-detail-page">
      <Link className="back-link" href="/publications">
        ← {content.shared.backToPublications}
      </Link>
      <header className="publication-detail-header">
        <p className="item-meta">{publication.venue}</p>
        <h1>{publication.title}</h1>
        {publication.secondaryTitle && (
          <p className="secondary-title">{publication.secondaryTitle}</p>
        )}
        <p className="authors">
          <span>{content.shared.authors}</span>
          {publication.authors}
        </p>
        <p className="corresponding-author">
          {content.shared.correspondingAuthor}: {publication.correspondingAuthor}
        </p>
      </header>

      <dl className="publication-facts">
        {publication.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <PublicationSection title={content.shared.abstract}>
        <p>{publication.abstract}</p>
      </PublicationSection>

      <PublicationSection title={content.shared.keywords}>
        <ul className="keyword-list">
          {publication.keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
        </ul>
      </PublicationSection>

      <PublicationSection title={content.shared.affiliations}>
        <ul className="plain-list">
          {publication.affiliations.map((affiliation) => (
            <li key={affiliation}>{affiliation}</li>
          ))}
        </ul>
      </PublicationSection>

      <PublicationSection title={content.shared.funding}>
        <ul className="plain-list">
          {publication.funding.map((funding) => <li key={funding}>{funding}</li>)}
        </ul>
      </PublicationSection>

      <PublicationSection title={content.shared.citation}>
        <p className="citation">{publication.citation}</p>
      </PublicationSection>

      <PublicationSection title={content.shared.officialResources}>
        <div className="resource-links">
          {publication.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label} ↗
            </a>
          ))}
        </div>
      </PublicationSection>
    </article>
  );
}

function PublicationSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="publication-detail-section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function BlogPage({ content }: { content: SiteContent }) {
  return (
    <div id="top" className="subpage narrow-page">
      <PageHeader title={content.blog.title} />
      <div className="empty-state">
        <p>{content.blog.status}</p>
      </div>
    </div>
  );
}

function LinksPage({ content }: { content: SiteContent }) {
  return (
    <div id="top" className="subpage narrow-page">
      <PageHeader title={content.links.title} />
      <div className="friend-links-list">
        {content.links.items.map((friend) => (
          <a
            className="friend-link"
            href={friend.href}
            key={friend.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="friend-link-copy">
              <strong>{friend.name}</strong>
              <span>{friend.description}</span>
            </span>
            <span className="friend-link-domain" aria-hidden="true">
              zzzyc001.github.io ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function AcademicIndexPage({ content }: { content: SiteContent }) {
  return (
    <div id="top" className="subpage narrow-page academic-index">
      <PageHeader title={content.academic.title} />
      <div className="academic-module-list">
        {content.academic.modules.map((module) => (
          <section
            className="academic-module"
            id={module.id}
            key={module.id}
            aria-labelledby={`${module.id}-title`}
          >
            <h2 id={`${module.id}-title`}>{module.label}</h2>
            <div className="module-slot" data-state="empty" aria-hidden="true" />
          </section>
        ))}
        <section className="academic-module" id="cv" aria-labelledby="cv-title">
          <h2 id="cv-title">{content.academic.cv}</h2>
          <button className="cv-download-placeholder" type="button" disabled>
            <span>{content.academic.cv}</span>
            <span>{content.academic.pdf} ↓</span>
          </button>
        </section>
      </div>
    </div>
  );
}

function SectionLabel({ title }: { title: string }) {
  return <h2 className="section-label">{title}</h2>;
}

function PageHeader({ title, meta }: { title: string; meta?: string }) {
  return (
    <header className="page-header">
      <h1>{title}</h1>
      {meta && <p>{meta}</p>}
    </header>
  );
}
