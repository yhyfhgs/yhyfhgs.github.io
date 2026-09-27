const researchProjects = {
  "eliciting-llm-propositional-beliefs": {
    title:
      "Eliciting LLM Propositional Beliefs in Agentic Tasks: Consistency, Accuracy, and Response Tendencies",
    abstract:
      "Large language models (LLMs) are increasingly deployed as autonomous agents in interactive environments that require multi-step planning, reasoning, and state tracking. Evaluating an agent’s beliefs about environment states and task progress can therefore help diagnose behavioral failures. However, reference belief labels are often unavailable or difficult to obtain. In this paper, we introduce a general, LLM-assisted evaluation pipeline that combines proposition generation with reference labels. The pipeline grounds LLM-authored proposition templates in agent trajectories and obtains labels from an LLM-assisted reference observer using formal logical rules and Bayesian inference. Using this pipeline, we systematically evaluate models’ self-reported belief consistency and accuracy across World, Epistemic, Affordance, and Decision propositions in ALFWorld, WebShop, and Noisy Cabinets and examine their relationship with task success. T/F-only Affordance and Decision accuracy are positively associated with task success after centering within environments. Furthermore, we find that response tendencies help explain both observed consistency and accuracy variation: the tendency to answer Unknown contributes to cross-model differences in consistency, and a True/False tendency model explains degradation in accuracy and negation consistency as context grows.",
    authors: ["Haoyang Ye", "Chenhao Xiong", "Sujian Li", "Ruosong Wang"],
    figure: {
      src: "/research/eliciting-llm-propositional-beliefs-figure-1.png",
      width: 2000,
      height: 750,
    },
    en: {
      authorship: "First author",
      summary:
        "How accurately and consistently do LLM agents report their beliefs about an interactive environment, and what can these reports reveal about task success?",
      bullets: [
        "Developed an LLM-assisted pipeline that grounds proposition templates in agent trajectories and assigns True / False / Unknown reference labels using formal logical rules and Bayesian inference.",
        "Evaluated World, Epistemic, Affordance, and Decision propositions in ALFWorld, WebShop, and Noisy Cabinets, measuring accuracy alongside permutation, negation, sequential, and rephrasing consistency.",
        "Found that Affordance and Decision accuracy is positively associated with task success after centering within each environment, when both reference labels and self-reports are True or False.",
        "Showed that Unknown-response tendencies contribute to cross-model consistency differences, and developed a response-tendency model linking accuracy and negation consistency to explain their decline along longer interaction histories.",
      ],
      figureAlt:
        "Belief evaluation pipeline: sample tasks, collect trajectories, author templates, ground propositions, query the same interaction prefix, and pair self-reported beliefs with reference labels.",
      figureCaption:
        "Figure 1. Data pipeline. Sampled tasks produce agent trajectories; LLM-authored templates and logical rules are grounded at each turn. Queries at the same recorded prefix elicit self-reported beliefs, which are paired with labels and probabilities from the reference evaluation module.",
    },
    zh: {
      authorship: "第一作者",
      summary:
        "大语言模型智能体对交互环境的自报告信念是否准确、一致？这些信念能够为任务成败提供哪些诊断信息？",
      bullets: [
        "构建 LLM 辅助的评估流程，将命题模板实例化到智能体交互轨迹中，并结合形式逻辑规则与贝叶斯推断，生成真／假／未知三类参考标签。",
        "在 ALFWorld、WebShop 和 Noisy Cabinets 中评估世界状态、认知状态、行动可行性与决策四类命题，同时衡量准确率及选项排列、否定、时序与改写一致性。",
        "发现当参考标签与模型回答均为真或假时，行动可行性与决策命题的准确率在环境内中心化后仍与任务成功率正相关，体现出对智能体行为的诊断价值。",
        "揭示回答“未知”的倾向是不同模型一致性差异的来源之一，并建立回答倾向模型，联系准确率与否定一致性，解释二者随交互历史增长而下降的现象。",
      ],
      figureAlt:
        "信念评估流程：任务采样、轨迹采集、模板生成、命题实例化、相同交互前缀下的查询，以及自报告信念与参考标签的配对。",
      figureCaption:
        "图 1．数据流程。对采样任务收集智能体轨迹，将 LLM 生成的命题模板与逻辑规则逐轮实例化；在同一记录前缀下查询模型的自报告信念，再与参考评估模块给出的标签和概率配对。",
    },
  },
  "linear-readability-writability": {
    title:
      "Linear Readability Does Not Guarantee Writability: Evidence from Controlled Counterfactual Recomposition",
    abstract:
      "Linear probing reveals information encoded in large language models, but whether probe-derived directions can reliably steer model decisions remains unclear. To investigate this question, we carefully design a controlled experiment on tasks constructed from ALFWorld and WebShop trajectories, whose action lists allow us to define explicit state changes and determine the corresponding answers. In the experiments, we combine the source input’s queried state with the target input’s decision rule and answer mapping, which we term counterfactual recomposition, to test whether steering supports the intended recomputation rather than merely copying an answer or source plan. Simultaneously, we learn and validate a reference steering subspace to ensure that steering can produce the required counterfactual answer at the selected location. This reference enables a controlled comparison with probe-derived steering in the complement space under fixed intervention conditions. Across four models and both environments, probing accuracy remains near-perfect in the complement space, while steering with direct probe directions, covariance-transformed directions, or combinations of multiple probe directions achieves near-zero counterfactual recomposition accuracy. These results reveal a critical finding: high readability alone does not guarantee writability through probe-derived interventions even with effective steering available, which provides valuable insight for developing reliable steering methods.",
    authors: ["Chenhao Xiong", "Haoyang Ye", "Jiyuan Liu", "Zheng Li", "Ruosong Wang", "Sujian Li"],
    figure: {
      src: "/research/linear-readability-writability-figure-1.png",
      width: 2000,
      height: 1365,
    },
    en: {
      authorship: "Second author",
      summary:
        "Can directions that accurately decode a model's internal state also steer its decisions when that state changes?",
      bullets: [
        "Constructed controlled tasks from ALFWorld and WebShop trajectories that combine a source input's state with a target input's decision rule and answer mapping, distinguishing counterfactual recomputation from answer or source-plan copying.",
        "Learned and validated a reference steering subspace to establish that the required answer change is achievable, then compared probe-derived interventions at the same layer and position with fixed sample pairs and replacement operation.",
        "Across four models and both environments, found near-perfect linear probing accuracy in the orthogonal complement of the reference subspace, while direct probe-derived steering achieved near-zero counterfactual recomposition accuracy.",
        "Tested covariance-transformed directions and combinations of multiple probe directions; their gains in the full activation space did not carry over to the complement, showing that high probing accuracy alone is insufficient evidence of effective steering.",
      ],
      figureAlt:
        "Panel A transfers a source state while retaining the target decision rule and answer mapping. Panel B compares successful reference-subspace steering with highly readable but ineffective probe directions under fixed intervention conditions.",
      figureCaption:
        "Figure 1. Controlled counterfactual recomposition and the read–write comparison. (A) Combining the source state with the target rule and answer mapping requires answer 6; copying an original answer or the source plan instead yields 2 or 3. (B) State information remains readable outside a validated steering subspace, but direct probe directions rarely support the required recomputation under the same intervention conditions.",
    },
    zh: {
      authorship: "第二作者",
      summary:
        "能够准确读出模型内部状态的线性方向，是否也能在状态改变时有效引导模型的决策？",
      bullets: [
        "基于 ALFWorld 与 WebShop 轨迹构造受控任务，将源输入的状态与目标输入的决策规则、答案映射组合，区分真正的反事实重计算与直接复制答案或源计划。",
        "学习并验证参考引导子空间，确认所需的答案改变可以实现，再固定层、位置、样本对与替换操作，对比由线性探针得到的干预方向。",
        "在四个模型、两个环境中发现：参考子空间的正交补空间仍保留近乎完美的线性可读性，但沿直接探针方向进行干预的反事实重组准确率接近零。",
        "进一步检验协方差变换与多探针方向组合；这些方法在完整激活空间中的提升未能延续到补空间，说明高探针准确率本身不足以证明相应方向能够有效引导模型。",
      ],
      figureAlt:
        "A 图将源状态与目标决策规则、答案映射组合；B 图在固定干预条件下，对比有效的参考子空间引导与可读性很高但干预效果接近零的探针方向。",
      figureCaption:
        "图 1．受控反事实重组与读写对比。A：将源状态与目标规则、答案映射组合后，应得到答案 6；复制原答案或源计划则分别得到 2 或 3。B：经过验证的引导子空间之外仍保留可读的状态信息，但在相同干预条件下，直接探针方向很少能实现所需的重计算。",
    },
  },
} as const;

export type ResearchSlug = keyof typeof researchProjects;

export function researchPath(slug: ResearchSlug, language: "en" | "zh") {
  return `${language === "zh" ? "/zh" : ""}/research/${slug}/`;
}

export function getResearchProject(slug: ResearchSlug, language: "en" | "zh") {
  const project = researchProjects[slug];
  return {
    slug,
    title: project.title,
    abstract: project.abstract,
    authors: project.authors,
    figure: project.figure,
    institution: language === "zh" ? "北京大学" : "Peking University",
    period: language === "zh" ? "2026.6 - 2026.9" : "June 2026 - Sept 2026",
    status: language === "zh" ? "ICLR 2027 在投" : "Under review at ICLR 2027",
    researchGroup: "",
    advisor: "",
    ...project[language],
  };
}
