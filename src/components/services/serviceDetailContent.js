import caseStudyImage from "../../assets/case-study.svg";
import predictionImage from "../../assets/case-study-phase-prediction.jpg";
import executionImage from "../../assets/case-study-phase-execution.jpg";

/** Rich layout + copy for service detail pages (hero → CTA). */
export const serviceDetailBySlug = {
  "ai-chatbots": {
    heroTitleLine1: "AI Chatbots &",
    heroTitleLine2: "Intelligent Agents",
    heroLead:
      "Enhance customer engagement with hyper-personalized conversational interfaces that understand context, sentiment, and intent in real-time.",
    heroImage: caseStudyImage,
    heroImageAlt: "AI chatbot and intelligent agents illustration",
    capabilities: {
      title: "Core Capabilities",
      lead:
        "Our intelligent agents are built on next-generation LLMs, ensuring every interaction feels human-centric and goal-oriented.",
      cards: [
        {
          key: "nlu",
          title: "Natural Language Understanding",
          desc: "Deep semantic parsing so agents resolve intent—not just keywords—with your business vocabulary.",
        },
        {
          key: "omni",
          title: "Omnichannel Deployment",
          desc: "One brain across web, mobile, voice, and messaging—consistent answers and shared context everywhere.",
        },
        {
          key: "support",
          title: "24/7 Intelligent Support",
          desc: "Always-on coverage that escalates cleanly to humans when empathy or policy judgment is required.",
        },
        {
          key: "sentiment",
          title: "Sentiment Analysis",
          desc: "Detect frustration, urgency, and opportunity in real time to route, retain, and recover revenue.",
        },
      ],
    },
    precision: {
      title: "Precision Engineering Behind Every Response",
      image: executionImage,
      imageAlt: "Engineer collaborating with an intelligent system",
      steps: [
        {
          title: "Knowledge Integration",
          desc: "We ingest your documentation, APIs, and brand guidelines into a secure vector database.",
        },
        {
          title: "Model Fine-Tuning",
          desc: "Our engineers optimize LLM parameters to ensure accuracy, safety, and a consistent persona.",
        },
        {
          title: "Global Deployment",
          desc: "Launch across your entire ecosystem with continuous learning loops and performance monitoring.",
        },
      ],
    },
    verticals: {
      title: "Vertical Excellence",
      lead: "Specialized conversational solutions for enterprise-grade demands.",
      items: [
        {
          key: "health",
          title: "Healthcare",
          desc: "HIPAA-aware flows, triage assistance, and patient-safe language with audit-ready transcripts.",
        },
        {
          key: "ecom",
          title: "E-commerce",
          desc: "Shopping assistants that handle returns, sizing, and order status while lifting AOV and CSAT.",
        },
        {
          key: "finance",
          title: "Finance",
          desc: "Secure banking agents with policy guardrails, fraud-aware prompts, and compliant escalation paths.",
        },
      ],
    },
    stats: {
      title: "Quantifiable Results in Every Deployment",
      lead:
        "We don't just build chatbots; we drive efficiency metrics that transform your bottom line and customer loyalty.",
      items: [
        { value: "45%", label: "Cost reduction" },
        { value: "68%", label: "Faster resolution" },
        { value: "92%", label: "Intent accuracy" },
        { value: "24/7", label: "Always-on coverage" },
      ],
    },
    finalCta: {
      title: "See how this works for your business",
      lead: "Schedule a free 30-minute strategy call with one of our senior architects.",
      buttonLabel: "Book a Consultation",
    },
  },

  "ai-automation": {
    heroTitleLine1: "AI Automation &",
    heroTitleLine2: "Workflow Intelligence",
    heroLead:
      "Orchestrate processes end-to-end with adaptive automations that cut cycle time, eliminate rework, and scale with demand.",
    heroImage: predictionImage,
    heroImageAlt: "Automation and workflow intelligence",
    capabilities: {
      title: "Core Capabilities",
      lead: "Automation that connects systems, data, and people—without brittle scripts or one-off integrations.",
      cards: [
        {
          key: "orch",
          title: "Natural Language Understanding",
          desc: "Sophisticated context mapping that understands nuances, idioms, and industry-specific jargon.",
        },
        {
          key: "doc",
          title: "Omnichannel Deployment",
          desc: "Deploy seamlessly across Web,WhatsApp, Slack, and native mobile apps with shared memory.",
        },
        {
          key: "events",
          title: "24/7 Intelligent Support",
          desc: "Automate complex query resolution around the clock without sacrificing quality or brand voice.",
        },
        {
          key: "govern",
          title: "Sentiment Analysis",
          desc: "Real-time emotional tracking to escalate sensitive issues to human agents instantly.",
        },
      ],
    },
    precision: {
      title: "Precision Engineering Behind Every Response",
      image: executionImage,
      imageAlt: "Operations team reviewing automated workflows",
      steps: [
        {
          title: "Discovery & Mapping",
          desc: "We blueprint critical paths, failure modes, and SLAs before a single bot is deployed.",
        },
        {
          title: "Integration Fabric",
          desc: "API-first connectors, secrets management, and sandboxed rollouts protect production systems.",
        },
        {
          title: "Continuous Improvement",
          desc: "Telemetry-backed tuning: bottlenecks, error clusters, and throughput are reviewed on a cadence.",
        },
      ],
    },
    verticals: {
      title: "Vertical Excellence",
      lead: "Automation patterns tuned for regulated and high-volume industries.",
      items: [
        {
          key: "ops",
          title: "Operations",
          desc: "Back-office throughput for finance, HR, and procurement with exception-based human review.",
        },
        {
          key: "cx",
          title: "Customer Experience",
          desc: "Case routing, refunds, and onboarding journeys that keep CSAT high while lowering handle time.",
        },
        {
          key: "supply",
          title: "Supply Chain",
          desc: "Order promising, vendor communications, and exception handling aligned to inventory signals.",
        },
      ],
    },
    stats: {
      title: "Quantifiable Results in Every Deployment",
      lead: "We don't just build chatbots; we drive efficiency metrics that transform your bottom line and customer loyalty.",
      items: [
        { value: "3×", label: "Throughput uplift" },
        { value: "40%", label: "Manual effort removed" },
        { value: "99.9%", label: "Run reliability" },
        { value: "<2s", label: "Avg. task latency" },
      ],
    },
    finalCta: {
      title: "See how this works for your business",
      lead: "Schedule a free 30-minute strategy call with one of our senior architects.",
      buttonLabel: "Book a Consultation",
    },
  },

  "machine-learning": {
    heroTitleLine1: "Machine Learning &",
    heroTitleLine2: "Predictive Systems",
    heroLead:
      "Turn historical and streaming data into decisions—models tuned for accuracy, drift resistance, and business adoption.",
    heroImage: executionImage,
    heroImageAlt: "Machine learning and predictive analytics",
    capabilities: {
      title: "Core Capabilities",
      lead: "From feature pipelines to production scoring—ML engineered for the messy reality of enterprise data.",
      cards: [
        {
          key: "feat",
          title: "Feature Engineering",
          desc: "Robust signals, leakage checks, and reproducible pipelines that survive schema drift.",
        },
        {
          key: "train",
          title: "Model Training",
          desc: "Experiment tracking, validation design, and bias review baked into every training cycle.",
        },
        {
          key: "serve",
          title: "Real-time Scoring",
          desc: "Low-latency inference paths with autoscaling, caching, and graceful degradation.",
        },
        {
          key: "monitor",
          title: "Monitoring & Retrain",
          desc: "Drift alerts, champion/challenger releases, and scheduled retrains keep models honest.",
        },
      ],
    },
    precision: {
      title: "Precision Engineering Behind Every Response",
      image: predictionImage,
      imageAlt: "Data science team validating models",
      steps: [
        {
          title: "Data Readiness",
          desc: "Assess lineage, quality, and privacy constraints before features touch a model.",
        },
        {
          title: "Validation Discipline",
          desc: "Holdout strategies, stress tests, and business backtests align metrics to outcomes.",
        },
        {
          title: "Production Hardening",
          desc: "Canary deploys, rollback plans, and observability for latency, errors, and skew.",
        },
      ],
    },
    verticals: {
      title: "Vertical Excellence",
      lead: "Predictive systems tailored to sector-specific risk and opportunity.",
      items: [
        {
          key: "retail",
          title: "Retail & CPG",
          desc: "Demand forecasting, promo lift, and inventory positioning with explainable drivers.",
        },
        {
          key: "risk",
          title: "Risk & Fraud",
          desc: "Anomaly detection and portfolio signals with governance-friendly documentation.",
        },
        {
          key: "iot",
          title: "Industrial & IoT",
          desc: "Sensor fusion and maintenance prediction with edge-to-cloud deployment options.",
        },
      ],
    },
    stats: {
      title: "Quantifiable Results in Every Deployment",
      lead: "Models that earn trust in production—not just in notebooks.",
      items: [
        { value: "+12pts", label: "Lift vs. baseline" },
        { value: "35%", label: "False positives cut" },
        { value: "4×", label: "Faster decisions" },
        { value: "SLA", label: "Inference uptime" },
      ],
    },
    finalCta: {
      title: "See how this works for your business",
      lead: "Schedule a free 30-minute strategy call with one of our senior architects.",
      buttonLabel: "Book a Consultation",
    },
  },

  "ai-consulting": {
    heroTitleLine1: "AI Consulting &",
    heroTitleLine2: "Transformation",
    heroLead:
      "Prioritize the right bets—roadmaps that connect data readiness, operating model, and ROI to a sequenced execution plan.",
    heroImage: caseStudyImage,
    heroImageAlt: "AI consulting and transformation roadmap",
    capabilities: {
      title: "Core Capabilities",
      lead: "Executive-ready clarity on where AI creates value—and what must be true to capture it.",
      cards: [
        {
          key: "use",
          title: "Use Case Portfolio",
          desc: "Score impact, complexity, and dependencies so leadership funds the right sequence.",
        },
        {
          key: "arch",
          title: "Target Architecture",
          desc: "Reference patterns for data, MLOps, and governance that scale beyond pilots.",
        },
        {
          key: "fin",
          title: "ROI & Funding",
          desc: "Business cases, TCO models, and phased investment gates tied to measurable outcomes.",
        },
        {
          key: "change",
          title: "Change Management",
          desc: "Skills, policy, and adoption plans so teams embrace—not resist—new ways of working.",
        },
      ],
    },
    precision: {
      title: "Precision Engineering Behind Every Response",
      image: predictionImage,
      imageAlt: "Leadership workshop on AI strategy",
      steps: [
        {
          title: "Executive Alignment",
          desc: "Stakeholder interviews and decision rights that prevent stalled initiatives.",
        },
        {
          title: "Readiness Assessment",
          desc: "Data, tooling, security, and talent gaps surfaced with mitigation owners.",
        },
        {
          title: "Roadmap Delivery",
          desc: "Milestones, KPIs, and governance cadences your PMO can run without guesswork.",
        },
      ],
    },
    verticals: {
      title: "Vertical Excellence",
      lead: "Strategy playbooks adapted to regulatory and competitive context.",
      items: [
        {
          key: "bank",
          title: "Banking",
          desc: "Model risk management narratives and vendor diligence aligned to regulator expectations.",
        },
        {
          key: "pharma",
          title: "Pharma & Medtech",
          desc: "Evidence generation, GxP considerations, and partner ecosystems for AI in R&D and ops.",
        },
        {
          key: "telco",
          title: "Telecom",
          desc: "Network operations, churn, and CX modernization with capex-aware sequencing.",
        },
      ],
    },
    stats: {
      title: "Quantifiable Results in Every Deployment",
      lead: "Strategy that converts ambiguity into funded, measurable programs.",
      items: [
        { value: "90d", label: "To first milestone" },
        { value: "3×", label: "ROI clarity" },
        { value: "12", label: "Prioritized bets" },
        { value: "100%", label: "Exec alignment" },
      ],
    },
    finalCta: {
      title: "See how this works for your business",
      lead: "Schedule a free 30-minute strategy call with one of our senior architects.",
      buttonLabel: "Book a Consultation",
    },
  },
};

export const getServiceDetailPage = (slug) => serviceDetailBySlug[slug] ?? null;
