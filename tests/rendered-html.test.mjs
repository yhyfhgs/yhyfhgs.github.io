import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const forbiddenContent =
  /18958166599|3\.663|\bGPA\b|grade point|课程成绩|语言成绩|绩点|CET-4|GRE 323|Quantitative Finance|reason, adapt, and align|game-theoretic foundations|2FH5GS/i;

async function render(pathname = "/") {
  const normalizedPathname =
    pathname === "/" ? pathname : `${pathname.replace(/\/$/, "")}/`;
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${process.pid}-${Date.now()}-${normalizedPathname.replaceAll("/", "-")}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(normalizedPathname, "http://localhost"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

async function renderHtml(pathname) {
  const response = await render(pathname);
  assert.equal(response.status, 200, `${pathname} should render successfully`);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.doesNotMatch(html, forbiddenContent);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/);
  assertProfileFooter(html);
  return html;
}

function assertProfileFooter(html) {
  const footer = html.match(/<footer class="site-footer">[\s\S]*?<\/footer>/)?.[0];
  assert.ok(footer, "Expected the site footer");
  assert.match(footer, /aria-label="Profile links"/);
  assert.match(footer, /href="mailto:2501112105@stu\.pku\.edu\.cn"/);
  assert.match(footer, /href="https:\/\/github\.com\/yhyfhgs"/);
  assert.match(footer, /href="https:\/\/orcid\.org\/0009-0009-3215-2811"/);
  assert.match(footer, /href="https:\/\/x\.com\/FHGSYHY"/);
  assert.match(footer, /href="#top"/);
  assert.equal((footer.match(/<a /g) ?? []).length, 5);
}

function articleContaining(html, className, text) {
  const pattern = new RegExp(
    `<article(?=[^>]*class="[^"]*\\b${className}\\b[^"]*")[^>]*>[\\s\\S]*?<\\/article>`,
    "g",
  );
  const block = [...html.matchAll(pattern)]
    .map((match) => match[0])
    .find((candidate) => candidate.includes(text));

  assert.ok(block, `Expected ${className} article containing: ${text}`);
  return block;
}

function sectionById(html, id) {
  const match = html.match(
    new RegExp(`<section(?=[^>]*id="${id}")[^>]*>[\\s\\S]*?<\\/section>`),
  );
  assert.ok(match, `Expected section #${id}`);
  return match[0];
}

function mainContent(html) {
  const match = html.match(/<main[^>]*>[\s\S]*?<\/main>/);
  assert.ok(match, "Expected a main element");
  return match[0];
}

test("server-renders the restrained homepage with only source-backed profile content", async () => {
  const html = await renderHtml("/");

  assert.match(html, /<title>Haoyang Ye · Academic Profile<\/title>/i);
  assert.match(html, /Research Interests: Reinforcement Learning, LLM post training and Agentic RL/);
  assert.doesNotMatch(html, /<p[^>]*class="hero-role"/);
  assert.doesNotMatch(html, /<img(?=[^>]*src="\/haoyang-ye\.jpg")[^>]*>/);
  assert.match(html, /Optimal Stopping SFT for RL Post-Training/);
  assert.match(html, /Economic Science · 47\(5\) · 2025/);
  assert.match(html, /AGI 2025 · LNCS 16058/);
  assert.match(html, /href="\/publications"/);
  assert.match(html, /href="\/blog"/);
  assert.match(html, /href="\/links"/);
  assert.match(html, /aria-pressed="true"/);
  assert.match(html, /https:\/\/github\.com\/yhyfhgs/);
  assert.match(html, /https:\/\/orcid\.org\/0009-0009-3215-2811/);
  assert.match(html, /https:\/\/x\.com\/FHGSYHY/);
  assert.match(html, /mailto:2501112105@stu\.pku\.edu\.cn/);
  assert.doesNotMatch(html, /ZyphingFHGS/);
  assert.doesNotMatch(html, /Internship|实习/i);

  const contactRow = html.match(/<div class="contact-row">[\s\S]*?<\/div>/)?.[0];
  assert.ok(contactRow, "Expected the homepage contact row");
  for (const contact of ["email", "github", "orcid", "x"]) {
    assert.match(contactRow, new RegExp(`data-contact="${contact}"`));
  }
  assert.equal((contactRow.match(/<svg/g) ?? []).length, 4);

  const optimal = articleContaining(
    html,
    "research-item",
    "Optimal Stopping SFT for RL Post-Training",
  );
  assert.match(optimal, /class="research-institution">Peking University<\/dd>/);
  assert.match(optimal, /class="research-time">Sept 2025 - Jan 2026<\/time>/);

  const fusion = articleContaining(
    html,
    "research-item",
    "Advertisement and Item Fusion Mechanism",
  );
  assert.match(fusion, /class="research-institution">Peking University<\/dd>/);
  assert.match(fusion, /class="research-group">daGAME Lab<\/dd>/);
  assert.match(fusion, /class="research-time">June 2023 - Dec 2023<\/time>/);

  const undergraduate = articleContaining(html, "education-item", "Sept 2021 - June 2025");
  assert.match(
    undergraduate,
    /<p>B\.S\. in Information and Computing Science<\/p>\s*<p>Double Major in Economics<\/p>/,
  );

  const blogSection = sectionById(html, "blog-preview");
  assert.match(blogSection, />Blog</);
  assert.match(blogSection, /href="\/blog"/);
  assert.doesNotMatch(blogSection, /href="\/links"/);

  const linksSection = sectionById(html, "links-preview");
  assert.match(linksSection, />Links</);
  assert.match(linksSection, /href="\/links"/);
  assert.match(linksSection, /Yuechen Zhu/);
  assert.match(linksSection, /A group is a groupoid with a single object\./);
  assert.doesNotMatch(linksSection, /preview-row-empty/);
  assert.doesNotMatch(linksSection, /GitHub|ORCID|FHGSYHY|2501112105/);
  assert.doesNotMatch(linksSection, /href="\/blog"/);
});

test("server-renders a publication archive with official authorship roles", async () => {
  const html = await renderHtml("/publications");

  assert.match(html, /<title>Publications · Haoyang Ye<\/title>/i);
  assert.match(html, /2 publications/);
  assert.match(html, /Economic Science · 47\(5\) · 2025/);
  assert.match(html, /AGI 2025 · LNCS 16058/);
  assert.match(html, /Haoyang Ye, Jingyang Huang, Fanqi Shi/);
  assert.match(html, /Zhaowei Zhang, Fengshuo Bai, Mingzhi Wang, Haoyang Ye, Chengdong Ma, Yaodong Yang/);
  assert.match(html, /Corresponding author<!-- -->: <!-- -->Fanqi Shi/);
  assert.match(html, /Corresponding author<!-- -->: <!-- -->Yaodong Yang/);
  assert.doesNotMatch(html, /advised by|指导教师/i);
  assert.match(html, /href="\/publications\/equilibrium-analysis-network-externalities"/);
  assert.match(html, /href="\/publications\/incentive-compatibility-ai-alignment"/);
  assert.match(html, /aria-current="page"[^>]*>Publications</);
});

test("server-renders complete official metadata on both publication detail pages", async () => {
  const voting = await renderHtml(
    "/publications/equilibrium-analysis-network-externalities",
  );
  assert.match(voting, /网络外部性下简单多数投票的均衡分析/);
  assert.match(voting, /10\.12088\/PKU\.jjkx\.2025\.05\.06/);
  assert.match(voting, /119–137/);
  assert.match(voting, /F016 · JEL D72, D82, D85/);
  assert.match(voting, /School of Computer Science, Peking University/);
  assert.match(voting, /network externalities/);
  assert.match(
    voting,
    /In practice, voting often involves participation costs, and voters’ decisions are determined not only by their private interests/,
  );
  assert.match(
    voting,
    /Numerical simulations further show that voters’ participation rates \(i\.e\., the probabilities of voting rather than abstaining\) decrease/,
  );
  assert.match(voting, /grant 72303011/);
  assert.match(voting, /ccj\.pku\.edu\.cn\/article\/info\?aid=749989351395397/);
  assert.match(voting, /BibTeX/);

  const icsap = await renderHtml(
    "/publications/incentive-compatibility-ai-alignment",
  );
  assert.match(icsap, /Roadmap on Incentive Compatibility for AI Alignment/);
  assert.match(icsap, /18th International Conference on Artificial General Intelligence \(AGI 2025\)/);
  assert.match(icsap, /Lecture Notes in Computer Science \/ LNAI, volume 16058/);
  assert.match(icsap, /370–380/);
  assert.match(icsap, /07 August 2025/);
  assert.match(icsap, />2026</);
  assert.match(icsap, /10\.1007\/978-3-032-00800-8_33/);
  assert.match(icsap, /Corresponding author<!-- -->: <!-- -->Yaodong Yang/);
  assert.match(icsap, /Institute for Artificial Intelligence, Peking University/);
  assert.match(
    icsap,
    /The burgeoning integration of artificial intelligence \(AI\) into human society brings forth significant implications/,
  );
  assert.match(
    icsap,
    /We further discuss three classical game problems for achieving IC: mechanism design, contract theory, and Bayesian persuasion/,
  );
  assert.match(icsap, /National Natural Science Foundation of China, grant 62376013/);
  assert.match(icsap, /dl\.acm\.org\/doi\/10\.1007\/978-3-032-00800-8_33/);
  assert.match(icsap, /link\.springer\.com\/chapter\/10\.1007\/978-3-032-00800-8_33/);

  const publicationSource = await readFile(
    new URL("../app/components/AcademicSite.tsx", import.meta.url),
    "utf8",
  );
  assert.match(
    publicationSource,
    /现实中投票往往存在参与成本，且个体的投票决策不仅取决于自身利益，也受到社会网络中其他人的影响。/,
  );
  assert.match(
    publicationSource,
    /数值模拟结果进一步表明：选民的投票参与度（即选择投票而非弃权的概率）会随着网络外部性强度的增加或网络连接程度的增强而下降。/,
  );
});

test("server-renders dedicated blog, friend-links, and reserved academic index pages", async () => {
  const blog = await renderHtml("/blog");
  assert.match(blog, /<title>Blog · Haoyang Ye<\/title>/i);
  assert.match(blog, /No posts yet\./);
  assert.match(blog, /<meta name="robots" content="noindex, follow"/);

  const links = await renderHtml("/links");
  assert.match(links, /<title>Links · Haoyang Ye<\/title>/i);
  assert.doesNotMatch(links, /<meta name="robots" content="noindex/);
  const linksMain = mainContent(links);
  assert.match(linksMain, /class="friend-links-list"/);
  assert.match(linksMain, /class="friend-link" href="https:\/\/zzzyc001\.github\.io\/"/);
  assert.match(linksMain, /Yuechen Zhu/);
  assert.match(linksMain, /A group is a groupoid with a single object\./);
  assert.match(linksMain, /class="friend-link-avatar"/);
  assert.match(linksMain, /src="\/friends\/yuechen-zhu-avatar\.jpg"/);
  assert.match(linksMain, />Visit ↗<\/span>/);
  assert.doesNotMatch(linksMain, /friend-link-domain/);
  assert.doesNotMatch(linksMain, />\s*zzzyc001\.github\.io ↗\s*</);
  assert.doesNotMatch(linksMain, /GitHub|ORCID|FHGSYHY|2501112105|Peking University/);

  const academic = await renderHtml("/academic");
  assert.match(academic, /<title>Academic Index · Haoyang Ye<\/title>/i);
  for (const id of ["news", "talks", "teaching", "projects", "service", "cv"]) {
    assert.match(academic, new RegExp(`id="${id}"`));
  }
  assert.match(academic, /class="module-slot" data-state="empty"/);
  assert.match(academic, /class="cv-download-placeholder" type="button" disabled=""/);
  assert.doesNotMatch(academic, /Coming soon|No entries|暂无内容/i);
  assert.doesNotMatch(academic, /href="[^"]*\.pdf"/i);
  assert.doesNotMatch(academic, /Internship|实习/i);
});

test("ships static GitHub Pages output, discovery files, and no private CV copies", async () => {
  const [component, page, layout, css, nextConfig, viteConfig, workflow, robots, sitemap] =
    await Promise.all([
      readFile(new URL("../app/components/AcademicSite.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
      readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
      readFile(new URL("../vite.config.ts", import.meta.url), "utf8"),
      readFile(new URL("../.github/workflows/pages.yml", import.meta.url), "utf8"),
      readFile(new URL("../public/robots.txt", import.meta.url), "utf8"),
      readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8"),
    ]);

  await Promise.all([
    access(new URL("../public/icon.svg", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/friends/yuechen-zhu-avatar.jpg", import.meta.url)),
    access(new URL("../dist/client/index.html", import.meta.url)),
    access(new URL("../dist/client/links/index.html", import.meta.url)),
    access(new URL("../dist/client/friends/yuechen-zhu-avatar.jpg", import.meta.url)),
    access(new URL("../dist/client/publications/index.html", import.meta.url)),
    access(new URL("../dist/client/academic/index.html", import.meta.url)),
    access(
      new URL(
        "../dist/client/publications/equilibrium-analysis-network-externalities/index.html",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../dist/client/publications/incentive-compatibility-ai-alignment/index.html",
        import.meta.url,
      ),
    ),
  ]);

  assert.match(component, /hy-language/);
  assert.match(component, /hy-theme/);
  assert.match(component, /github\.com\/yhyfhgs/);
  assert.match(component, /orcid\.org\/0009-0009-3215-2811/);
  assert.match(component, /x\.com\/FHGSYHY/);
  assert.match(component, /visit: "Visit"/);
  assert.match(component, /visit: "访问主页"/);
  assert.match(component, /PageKey =[\s\S]*"academic"/);
  assert.doesNotMatch(component, /hero-role|portrait-frame|content\.hero\.role/);
  assert.doesNotMatch(layout, /haoyang-ye(?:-icon)?\.jpg/);
  assert.doesNotMatch(component, /advised by|指导教师/);
  assert.doesNotMatch(component, /ZyphingFHGS/);
  assert.doesNotMatch(component, /Internship|实习/i);
  assert.doesNotMatch(component, forbiddenContent);
  assert.match(page, /AcademicSite page="home"/);
  assert.match(layout, /https:\/\/yhyfhgs\.github\.io/);
  assert.match(layout, /https:\/\/x\.com\/FHGSYHY/);
  assert.match(layout, /application\/ld\+json/);
  assert.doesNotMatch(layout, /Reinforcement Learning Researcher|Ph\.D\. Student/);
  assert.match(css, /:root\[data-theme="dark"\]/);
  assert.match(css, /prefers-reduced-motion/);
  assert.doesNotMatch(css, /linear-gradient|box-shadow|backdrop-filter/);
  assert.match(nextConfig, /output: "export"/);
  assert.match(nextConfig, /trailingSlash: true/);
  assert.match(viteConfig, /existsSync\(hostingConfigUrl\)/);
  assert.doesNotMatch(viteConfig, /import hostingConfig from/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.match(workflow, /path: dist\/client/);
  assert.match(robots, /Sitemap: https:\/\/yhyfhgs\.github\.io\/sitemap\.xml/);
  assert.match(sitemap, /publications\/equilibrium-analysis-network-externalities/);
  assert.match(sitemap, /<loc>https:\/\/yhyfhgs\.github\.io\/links\/<\/loc>/);

  await assert.rejects(access(new URL("../public/haoyang-ye-cv-en.pdf", import.meta.url)));
  await assert.rejects(access(new URL("../public/haoyang-ye-cv-zh.pdf", import.meta.url)));
  await assert.rejects(access(new URL("../public/cv.pdf", import.meta.url)));
  await assert.rejects(access(new URL("../public/haoyang-ye.jpg", import.meta.url)));
  await assert.rejects(access(new URL("../public/haoyang-ye-icon.jpg", import.meta.url)));
  await assert.rejects(access(new URL("../dist/client/haoyang-ye.jpg", import.meta.url)));
  await assert.rejects(access(new URL("../dist/client/haoyang-ye-icon.jpg", import.meta.url)));
});
