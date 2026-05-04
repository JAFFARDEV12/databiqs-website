import caseStudyImage from "../../assets/case-study.svg";
import predictionImage from "../../assets/case-study-phase-prediction.jpg";
import executionImage from "../../assets/case-study-phase-execution.jpg";

export const serviceHeroSlides = [
  {
    src: caseStudyImage,
    alt: "AI services overview illustration",
    tag: "Databiqs AI Services",
  },
  {
    src: predictionImage,
    alt: "Team planning predictive AI roadmap",
    tag: "Strategy and Discovery",
  },
  {
    src: executionImage,
    alt: "Engineering team implementing AI systems",
    tag: "Implementation and Scale",
  },
];

export const services = [
  {
    id: 1,
    slug: "ai-chatbots",
    themeClass: "core-card--chatbot",
    title: "AI Chatbots",
    shortDescription:
      "Intelligent conversational interfaces that understand context, resolve complex queries, and integrate seamlessly with your CRM.",
    features: ["24/7 Availability", "Multi-language", "CRM Integration"],
    heroTag: "Conversational AI",
    heroSubtitle: "Build intelligent conversations that convert and retain",
    overview:
      "We design AI chatbot systems that feel human, solve high-intent queries quickly, and connect directly to your business workflows. From customer support to lead qualification, every flow is tailored to your brand voice and outcomes.",
    outcomes: [
      "Reduce first-response time by automating repetitive interactions without losing context.",
      "Increase conversion rates with smart, intent-driven lead qualification journeys.",
      "Unify customer data through CRM and helpdesk integrations for better decisions.",
    ],
    process: [
      "Conversation design and intent architecture mapped to real customer journeys.",
      "Model training, guardrails, and integration with CRM, support, and analytics tools.",
      "Continuous optimization using intent-level insights and conversation quality reviews.",
    ],
  },
  {
    id: 2,
    slug: "ai-automation",
    themeClass: "core-card--automation",
    title: "AI Automation",
    shortDescription:
      "End-to-end intelligent process automation. Streamline operations, reduce manual errors, and accelerate throughput.",
    features: ["Workflow Optimization", "Cost Reduction", "Scalable"],
    heroTag: "Automation Excellence",
    heroSubtitle: "Automate complex operations with precision and reliability",
    overview:
      "Our AI automation services modernize repetitive workflows across departments. We identify high-impact bottlenecks, design resilient automation pipelines, and deploy systems that scale without compromising quality.",
    outcomes: [
      "Improve operational speed with rule + AI powered orchestration.",
      "Minimize manual intervention and reduce human-error risk in critical processes.",
      "Create scalable automation foundations that grow with your business.",
    ],
    process: [
      "Operational discovery to identify automation-ready opportunities and constraints.",
      "Workflow engineering with human-in-the-loop checkpoints for quality assurance.",
      "Monitoring, alerting, and iterative tuning to ensure long-term performance.",
    ],
  },
  {
    id: 3,
    slug: "machine-learning",
    themeClass: "core-card--ml",
    title: "Machine Learning",
    shortDescription:
      "Predictive models and deep learning algorithms trained on your proprietary data to uncover hidden insights and forecast trends.",
    features: ["Predictive Analytics", "Pattern Recognition", "Real-time Insights"],
    heroTag: "Predictive Intelligence",
    heroSubtitle: "Turn business data into proactive decision advantage",
    overview:
      "We build production-grade machine learning solutions that transform historical and real-time data into action. Our models are designed for accuracy, interpretability, and business adoption from day one.",
    outcomes: [
      "Forecast demand, churn, and risk with context-aware predictive models.",
      "Discover hidden patterns that unlock new efficiency and growth opportunities.",
      "Deploy real-time ML scoring pipelines for faster, smarter decisions.",
    ],
    process: [
      "Data readiness audit and feature strategy aligned to business KPIs.",
      "Model development with validation, bias checks, and explainability tooling.",
      "Production deployment with drift monitoring and model retraining routines.",
    ],
  },
  {
    id: 4,
    slug: "ai-strategy",
    themeClass: "core-card--strategy",
    title: "AI Strategy",
    shortDescription:
      "Comprehensive roadmaps for AI adoption. We assess readiness, identify high-impact use cases, and architect scalable solutions.",
    features: ["Roadmap Planning", "ROI Analysis", "Implementation Support"],
    heroTag: "Strategic AI Advisory",
    heroSubtitle: "Align AI investments with measurable business outcomes",
    overview:
      "Our AI strategy engagements help leadership teams prioritize where AI creates the most value. We connect technical feasibility, organizational readiness, and ROI to deliver a practical transformation roadmap.",
    outcomes: [
      "Prioritize use cases by impact, complexity, and time-to-value.",
      "Build an execution roadmap with clear milestones and governance.",
      "De-risk AI initiatives through architecture, policy, and operating-model clarity.",
    ],
    process: [
      "Executive and stakeholder workshops to define priorities and constraints.",
      "Readiness assessment covering data, tooling, teams, and governance.",
      "Roadmap delivery with phased implementation plan and success metrics.",
    ],
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);
