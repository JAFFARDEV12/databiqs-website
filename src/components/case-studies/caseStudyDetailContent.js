import { assetUrl } from '../../utils/assetUrl';

const testimonialAvatar = assetUrl('assets/Michael-Hayes.svg');
const caseStudyImage = assetUrl('media/case-study.svg');
const phasePredictionImg = assetUrl('media/phase1-prediction.svg');
const phaseExecutionImg = assetUrl('media/phase2-prediction.svg');


/**
 * Case study detail pages: keyed by URL slug (`/case-studies/:slug`).
 * Add or edit entries here; CaseStudiesDetails renders from this shape.
 */

const phaseBody = (lines) => lines;

export const CASE_STUDY_DETAILS = {
  novatech: {
    hero: {
      imageSrc: caseStudyImage,
      imageAlt: 'Novatech Solutions',
      primaryBadge: 'AI Chatbot',
      secondaryBadge: 'Global SaaS',
      title: 'NOVATECH SOLUTIONS',
      subtitle: 'CONVERSATIONAL SUPPORT TRIAGE',
      description:
        'Enterprise support rebuilt with AI triage: faster first response, higher CSAT, and a 10-person team scaled without adding headcount.',
    },
    challenge: {
      heading: 'TICKET VOLUME DOUBLED EVERY QUARTER WHILE CSAT KEPT FALLING.',
      body: "Novatech's support engineers were buried in repetitive tier-1 work. Legacy macros could not prioritize or summarize context, so customers waited and churn risk rose.",
    },
    alert: {
      title: 'Queue Collapse Risk',
      body: 'Peak events created 6-hour backlogs; executive sponsors demanded a measurable fix within one quarter.',
    },
    techStack: ['OPENAI API', 'LANGCHAIN', 'VECTOR DB', 'SALESFORCE', 'KAFKA', 'GRAFANA'],
    phases: [
      {
        title: 'INTENT ROUTING & SAFE GUARDRAILS',
        bodyLines: phaseBody([
          'We deployed a retrieval-grounded assistant that',
          'classifies intent, drafts replies, and escalates',
          'edge cases with a full transcript. Policy filters',
          'block PII leakage and off-brand promises before',
          'agents or customers see a draft.',
        ]),
        imageSrc: phasePredictionImg,
        imageAlt: 'Support triage and chat workflow',
      },
      {
        title: 'HUMAN IN THE LOOP AT SCALE',
        bodyLines: phaseBody([
          'Supervisors get a review queue only for low-confidence',
          'or high-severity threads. Macros and snippets update',
          'from resolved tickets so the model improves weekly',
          'without new training projects.',
        ]),
        imageSrc: phaseExecutionImg,
        imageAlt: 'Operations dashboard and routing',
      },
    ],
    impact: [
      {
        label: 'Faster First Response',
        value: '78%',
        footnote: 'Median time-to-first-response dropped within six weeks of launch.',
      },
      {
        label: 'Annual Savings',
        value: '1.2M',
        valueAriaLabel: '1.2 million dollars',
        footnote: 'Blended savings from deflection, handle time, and after-hours coverage.',
      },
    ],
    ltsv: {
      title: 'LONG TERM STRATEGIC VALUE',
      cards: [
        {
          title: 'Playbooks That Compound',
          text: 'Every approved edit feeds the knowledge layer so new product lines inherit support quality automatically.',
        },
        {
          title: 'Regional Rollout',
          text: 'The same stack was localized for EMEA and APAC with jurisdiction-specific retention rules.',
        },
        {
          title: 'Technical Watch Outs',
          watchouts: [
            'Monitor hallucination rate weekly on new intents and after major product launches.',
            'Keep embedding indexes fresh when help-center articles change.',
          ],
        },
      ],
    },
    testimonial: {
      quote:
        'Databiqs helped us turn support from a cost center into a retention lever. Response quality is up and our team finally works on hard problems.',
      name: 'Michael Hayes',
      role: 'Operations Manager',
      avatarSrc: testimonialAvatar,
    },
  },

  'workflow-14': {
    hero: {
      imageSrc: caseStudyImage,
      imageAlt: 'Vertex Operations',
      primaryBadge: 'AI Automation',
      secondaryBadge: '14 Departments',
      title: 'VERTEX OPERATIONS',
      subtitle: 'CROSS-DEPARTMENT ORCHESTRATION',
      description:
        'One orchestration layer connected fourteen departments, cut manual handoffs, and delivered measurable cost reduction in sixty days.',
    },
    challenge: {
      heading: 'FOURTEEN TEAMS, FOURTEEN TOOLCHAINS, ZERO SINGLE SOURCE OF TRUTH.',
      body: 'Approvals and data lived in inboxes and spreadsheets. Errors propagated downstream and audits were painful to reconstruct.',
    },
    alert: {
      title: 'Operational Drag',
      body: 'Leadership targeted 45% overhead reduction without hiring freeze or risky big-bang ERP swap.',
    },
    techStack: ['N8N', 'PYTHON', 'POSTGRES', 'SNOWFLAKE', 'AWS LAMBDA', 'OPENSEARCH'],
    phases: [
      {
        title: 'EVENT BACKBONE & IDENTITY',
        bodyLines: phaseBody([
          'We standardized events on a single bus with',
          'correlation IDs across HR, finance, and logistics.',
          'Dead-letter queues and replay make failures',
          'debuggable in minutes instead of days.',
        ]),
        imageSrc: phasePredictionImg,
        imageAlt: 'Workflow diagram',
      },
      {
        title: 'AGENTIC TASK RUNNERS',
        bodyLines: phaseBody([
          'Deterministic bots handle approvals, reconciliations,',
          'and document generation; humans approve exceptions.',
          'SLA dashboards show backlog by department owner.',
        ]),
        imageSrc: phaseExecutionImg,
        imageAlt: 'Automation execution',
      },
    ],
    impact: [
      {
        label: 'Cost Reduction',
        value: '45%',
        footnote: 'Blended operational cost reduction within the first sixty days.',
      },
      {
        label: 'Departments Connected',
        value: '14',
        footnote: 'All fourteen departments on shared workflows with audit trails.',
      },
    ],
    ltsv: {
      title: 'LONG TERM STRATEGIC VALUE',
      cards: [
        {
          title: 'Composable Automation',
          text: 'New workflows ship as modules instead of one-off scripts.',
        },
        {
          title: 'Audit Ready',
          text: 'Immutable logs and role-based views satisfy internal and external audit requests.',
        },
        {
          title: 'Technical Watch Outs',
          watchouts: [
            'Version every workflow change; rollback must be one click.',
            'Capacity-plan worker pools before month-end peaks.',
          ],
        },
      ],
    },
    testimonial: {
      quote:
        '“We finally see end-to-end process health in one place. Databiqs shipped pragmatism, not slide decks.”',
      name: 'Michael Hayes',
      role: 'Operations Manager',
      avatarSrc: testimonialAvatar,
    },
  },

  'voice-transcription-app': {
    hero: {
      imageSrc: caseStudyImage,
      imageAlt: 'Voice-to-text transcription application',
      primaryBadge: 'Speech Recognition',
      secondaryBadge: 'Product',
      title: 'VOICE-TO-TEXT',
      subtitle: 'INSTANT, SEARCHABLE TRANSCRIPTS',
      description:
        'A production-ready speech stack that turns voice memos, meetings, and lectures into accurate, editable text with fast search, folders, and secure sharing.',
    },
    challenge: {
      heading: 'USERS CAPTURE GREAT IDEAS ON AUDIO, BUT AUDIO DOES NOT SCALE LIKE TEXT.',
      body: 'Manual transcription was too slow; off-the-shelf APIs lacked vocabulary tuning, diarization, and privacy controls for mixed personal and work content.',
    },
    alert: {
      title: 'Trust & Findability',
      body: 'Without speaker labels and keyword search, long recordings became impossible to reuse; exports had to work across mobile and desktop without drift.',
    },
    techStack: ['WHISPER', 'PYTORCH', 'REACT NATIVE', 'POSTGRES', 'OPENSEARCH', 'AWS S3'],
    phases: [
      {
        title: 'STREAMING ASR & CUSTOM LEXICON',
        bodyLines: phaseBody([
          'We tuned acoustic and language models for',
          'domain terms, noisy environments, and',
          'code-switching. Streaming inference keeps',
          'latency under two seconds per chunk.',
        ]),
        imageSrc: phasePredictionImg,
        imageAlt: 'Waveform and transcription UI',
      },
      {
        title: 'LIBRARY, SEARCH, AND COLLABORATION',
        bodyLines: phaseBody([
          'Full-text indexes, tags, and speaker tags',
          'make hours of audio navigable in seconds.',
          'Role-based sharing preserves confidentiality',
          'while keeping edits and versions in sync.',
        ]),
        imageSrc: phaseExecutionImg,
        imageAlt: 'Organized notes and sharing workflow',
      },
    ],
    impact: [
      {
        label: 'Avg. Chunk Latency',
        value: '<2s',
        footnote: 'Measured on mid-tier devices with streaming ASR enabled.',
      },
      {
        label: 'Searchable Library',
        value: '100%',
        footnote: 'Every stored clip indexed for full-text and speaker-filtered search.',
      },
    ],
    ltsv: {
      title: 'LONG TERM STRATEGIC VALUE',
      cards: [
        {
          title: 'Creator-Grade Workflow',
          text: 'Export pipelines to docs, captions, and CMS blocks without re-encoding entire files.',
        },
        {
          title: 'Compliance Ready',
          text: 'Encryption in transit and at rest, retention policies, and tenant isolation for teams.',
        },
        {
          title: 'Technical Watch Outs',
          watchouts: [
            'Refresh lexicons when product names or acronyms change.',
            'Monitor WER spikes when users upgrade OS microphones or Bluetooth codecs.',
          ],
        },
      ],
    },
    testimonial: {
      quote:
        'Our field teams finally stopped re-listening to forty-minute clips. Search alone paid for the rollout in a month.',
      name: 'Michael Hayes',
      role: 'Operations Manager',
      avatarSrc: testimonialAvatar,
    },
  },

  'sentiment-investment-prediction': {
    hero: {
      imageSrc: caseStudyImage,
      imageAlt: 'Investment sentiment analysis platform',
      primaryBadge: 'Machine Learning',
      secondaryBadge: 'Investment & Finance',
      title: 'SENTIMENT-AUGMENTED',
      subtitle: 'PRICE FORECASTING LAB',
      description:
        'A research platform that fuses classical price signals with NLP-derived sentiment from news, filings, and social chatter to sharpen probabilistic forecasts.',
    },
    challenge: {
      heading: 'PRICE-ONLY MODELS MISSED REGIME SHIFTS THAT TEXT DATA WARNED ABOUT EARLY.',
      body: 'Analysts needed reproducible pipelines, leakage-safe feature windows, and explainable sentiment overlays, not another black-box leaderboard model.',
    },
    alert: {
      title: 'Signal Integrity',
      body: 'Duplicate headlines, bots, and stale filings could poison embeddings without strict deduping and time alignment to bars.',
    },
    techStack: ['PYTHON', 'TRANSFORMERS', 'PANDAS', 'MLFLOW', 'KAFKA', 'GCP BIGQUERY'],
    phases: [
      {
        title: 'MULTI-SOURCE SENTIMENT GRAPH',
        bodyLines: phaseBody([
          'We normalized macro news, issuer filings,',
          'and social streams into a single timeline',
          'with entity linking and stance scoring.',
          'Features respect market hours and embargo rules.',
        ]),
        imageSrc: phasePredictionImg,
        imageAlt: 'News and market data fusion',
      },
      {
        title: 'JOINT MODELING & BACKTESTS',
        bodyLines: phaseBody([
          'Gradient-boosted heads consume tabular',
          'prices plus dense sentiment aggregates.',
          'Walk-forward validation and A/B gates',
          'prevent silent overfit on thin histories.',
        ]),
        imageSrc: phaseExecutionImg,
        imageAlt: 'Backtesting dashboards',
      },
    ],
    impact: [
      {
        label: 'Signal Classes',
        value: '3',
        footnote: 'News, social, and filings ingested with independent QA checks.',
      },
      {
        label: 'Model Validation',
        value: 'A/B',
        footnote: 'Champion/challenger releases with automatic rollback on drift.',
      },
    ],
    ltsv: {
      title: 'LONG TERM STRATEGIC VALUE',
      cards: [
        {
          title: 'Research Velocity',
          text: 'Notebook templates and tracked experiments let quants iterate without breaking production feeds.',
        },
        {
          title: 'Governance',
          text: 'Model cards document data rights, refresh cadence, and known blind spots for risk reviewers.',
        },
        {
          title: 'Technical Watch Outs',
          watchouts: [
            'Re-index embeddings when sources change schemas or paywalls.',
            'Watch for correlation spikes that collapse diversification assumptions.',
          ],
        },
      ],
    },
    testimonial: {
      quote:
        'Databiqs gave us disciplined sentiment features we could defend in committee, not vibes, actual reproducible signals.',
      name: 'Michael Hayes',
      role: 'Operations Manager',
      avatarSrc: testimonialAvatar,
    },
  },

  'avatar-learning-platform': {
    hero: {
      imageSrc: caseStudyImage,
      imageAlt: 'Avatar conversational learning companion',
      primaryBadge: 'EdTech',
      secondaryBadge: 'Conversational AI',
      title: 'AVATAR',
      subtitle: 'SMART ENGLISH COMPANION',
      description:
        'Avatar personalises lessons, delivers real-time corrections, and holds natural dialogues so learners build fluency with confidence on mobile or web.',
    },
    challenge: {
      heading: 'GENERIC LANGUAGE APPS FAILED ON ACCENT DIVERSITY AND GOAL ALIGNMENT.',
      body: 'Learners churned when drills felt robotic or mis-leveled. Coaches could not scale 1:1 conversation hours across time zones.',
    },
    alert: {
      title: 'Pedagogy + Safety',
      body: 'Responses had to stay encouraging, age-appropriate, and free of off-curriculum advice while still feeling human.',
    },
    techStack: ['OPENAI API', 'LANGCHAIN', 'FASTAPI', 'REDIS', 'POSTGRES', 'REACT'],
    phases: [
      {
        title: 'ADAPTIVE LEVELING & GOALS',
        bodyLines: phaseBody([
          'Placement flows infer CEFR bands, then',
          'adjust vocabulary density per session goal.',
          'Progress signals feed spaced repetition for',
          'grammar patterns that need reinforcement.',
        ]),
        imageSrc: phasePredictionImg,
        imageAlt: 'Learner dashboard and lesson path',
      },
      {
        title: 'DIALOGUE COACH WITH GUARDRAILS',
        bodyLines: phaseBody([
          'Role-play scenarios use retrieval-grounded',
          'prompts with policy filters. Real-time',
          'pronunciation hints sync to lightweight',
          'on-device models where available.',
        ]),
        imageSrc: phaseExecutionImg,
        imageAlt: 'Conversation practice interface',
      },
    ],
    impact: [
      {
        label: 'Adaptive Paths',
        value: 'Live',
        footnote: 'Sequences adjust from mastery signals, not static course chapters.',
      },
      {
        label: 'Lesson Access',
        value: '24/7',
        footnote: 'Async practice plus scheduled live coaching windows.',
      },
    ],
    ltsv: {
      title: 'LONG TERM STRATEGIC VALUE',
      cards: [
        {
          title: 'Institutional Ready',
          text: 'Classroom modes, roster sync, and analytics exports for schools and bootcamps.',
        },
        {
          title: 'Engagement Loop',
          text: 'Streaks, micro-wins, and conversational variety keep completion rates high.',
        },
        {
          title: 'Technical Watch Outs',
          watchouts: [
            'Localize idioms carefully; literal translations erode trust fast.',
            'Monitor hallucination rate on open-ended speaking prompts weekly.',
          ],
        },
      ],
    },
    testimonial: {
      quote:
        'Learners finally practice speaking without embarrassment. Avatar feels like a coach, not a chatbot.',
      name: 'Michael Hayes',
      role: 'Operations Manager',
      avatarSrc: testimonialAvatar,
    },
  },

  'data-automation-platform': {
    hero: {
      imageSrc: caseStudyImage,
      imageAlt: 'Data automation and transformation platform',
      primaryBadge: 'Data Engineering',
      secondaryBadge: 'Automation',
      title: 'DATA AUTOMATION',
      subtitle: 'ETL TO INSIGHTS',
      description:
        'An integration-first platform that ingests messy sources, enforces cleansing rules, and publishes governed datasets for analytics and reporting in near real time.',
    },
    challenge: {
      heading: 'TEAMS SPENT MORE TIME FIXING CSVS THAN ANSWERING BUSINESS QUESTIONS.',
      body: 'Ad hoc scripts duplicated logic; schema drift broke dashboards; SLAs were unclear when upstream APIs changed without notice.',
    },
    alert: {
      title: 'Pipeline Fragility',
      body: 'One silent transformation bug skewed executive KPIs for a week. Leadership demanded observability and replayable jobs.',
    },
    techStack: ['DBT', 'AIRFLOW', 'SNOWFLAKE', 'FIVETRAN', 'GREAT EXPECTATIONS', 'LOOKER'],
    phases: [
      {
        title: 'CONNECTOR MESH & CONTRACTS',
        bodyLines: phaseBody([
          'Fifty-plus connectors land in a raw zone',
          'with schema contracts and versioning.',
          'CDC streams capture deletes and late',
          'arriving facts without double counting.',
        ]),
        imageSrc: phasePredictionImg,
        imageAlt: 'Data pipeline diagram',
      },
      {
        title: 'TRANSFORM, TEST, PUBLISH',
        bodyLines: phaseBody([
          'dbt models encode business rules with',
          'unit tests and anomaly monitors. Curated',
          'marts power self-serve BI with row-level',
          'security mapped to identity providers.',
        ]),
        imageSrc: phaseExecutionImg,
        imageAlt: 'Analytics and reporting dashboards',
      },
    ],
    impact: [
      {
        label: 'Source Connectors',
        value: '50+',
        footnote: 'Prebuilt adapters plus custom REST/GraphQL templates.',
      },
      {
        label: 'Pipeline SLA Target',
        value: '99.9%',
        footnote: 'End-to-end freshness SLO with paging on breach.',
      },
    ],
    ltsv: {
      title: 'LONG TERM STRATEGIC VALUE',
      cards: [
        {
          title: 'Decision Speed',
          text: 'Analysts promote trusted datasets instead of exporting yet another spreadsheet.',
        },
        {
          title: 'Cost Control',
          text: 'Tiered storage and incremental models keep warehouse spend predictable.',
        },
        {
          title: 'Technical Watch Outs',
          watchouts: [
            'Reconcile row counts whenever upstream vendors change batching windows.',
            'Document ownership per dataset. Orphaned models rot quietly.',
          ],
        },
      ],
    },
    testimonial: {
      quote:
        'We stopped debating whose number was right. Databiqs gave us one governed path from raw ingest to board slides.',
      name: 'Michael Hayes',
      role: 'Operations Manager',
      avatarSrc: testimonialAvatar,
    },
  },

  'creative-ai-design-tool': {
    hero: {
      imageSrc: caseStudyImage,
      imageAlt: 'Creative AI design tool',
      primaryBadge: 'Creative Design',
      secondaryBadge: 'Generative AI',
      title: 'CREATIVE AI',
      subtitle: 'PROMPT-TO-PRODUCTION VISUALS',
      description:
        'Users describe what they need; the system composes on-brand imagery, layouts, and variants for campaigns, sites, and social, without a heavyweight design suite.',
    },
    challenge: {
      heading: 'NON-DESIGNERS NEEDED QUALITY WITHOUT SACRIFICING BRAND SAFETY OR SPEED.',
      body: 'Generic image APIs produced off-style assets; legal worried about likeness and trademark bleed; teams still needed PSD/Figma handoff options.',
    },
    alert: {
      title: 'Brand Guardrails',
      body: 'Prompt injection attempts could bypass style packs; policy layers and blocked tokens became mandatory before enterprise rollout.',
    },
    techStack: ['STABLE DIFFUSION', 'CONTROLNET', 'REACT', 'NODE', 'S3', 'FIGMA PLUGIN API'],
    phases: [
      {
        title: 'STYLE SYSTEMS & TEMPLATES',
        bodyLines: phaseBody([
          'Brand palettes, typography, and safe',
          'composition templates anchor every render.',
          'Users iterate in natural language with',
          'live previews and side-by-side diffs.',
        ]),
        imageSrc: phasePredictionImg,
        imageAlt: 'Creative prompt and preview grid',
      },
      {
        title: 'EXPORT & COLLABORATION',
        bodyLines: phaseBody([
          'Vector-friendly upscaling, transparent PNGs,',
          'and batch generation queues feed marketing',
          'OPS. Approvals and comments live alongside',
          'each asset version.',
        ]),
        imageSrc: phaseExecutionImg,
        imageAlt: 'Design export and collaboration',
      },
    ],
    impact: [
      {
        label: 'Export Ready',
        value: '4K',
        footnote: 'Print-safe exports with optional sharpening profiles.',
      },
      {
        label: 'Typical Iteration',
        value: '<30s',
        footnote: 'Median time from prompt tweak to refreshed candidate grid.',
      },
    ],
    ltsv: {
      title: 'LONG TERM STRATEGIC VALUE',
      cards: [
        {
          title: 'Creative Ops',
          text: 'Reusable campaign kits shrink repetitive resizing work across channels.',
        },
        {
          title: 'Governed Innovation',
          text: 'Audit logs tie every render to prompts, seeds, and model versions for compliance.',
        },
        {
          title: 'Technical Watch Outs',
          watchouts: [
            'Refresh safety filters when base models upgrade.',
            'Track GPU spend per workspace to avoid runaway batch jobs.',
          ],
        },
      ],
    },
    testimonial: {
      quote:
        'We ship campaign variants in hours, not days. The guardrails let legal sleep at night.',
      name: 'Michael Hayes',
      role: 'Operations Manager',
      avatarSrc: testimonialAvatar,
    },
  },

  'wellness-ai-companion': {
    hero: {
      imageSrc: caseStudyImage,
      imageAlt: 'Wellness AI digital companion',
      primaryBadge: 'HealthTech',
      secondaryBadge: 'Wellness',
      title: 'WELLNESS AI',
      subtitle: 'INTELLIGENT DIGITAL COMPANION',
      description:
        'A privacy-first companion that blends conversational coaching with biometric-aware signals to surface stress, fatigue, and imbalance patterns early, then guides users with timely, empathetic support.',
    },
    challenge: {
      heading: 'WELLNESS APPS WERE EITHER CHAT-ONLY OR SENSOR-ONLY. NEVER BOTH IN SYNC.',
      body: 'Users ignored generic tips; clinicians distrusted black-box alerts; firmware and cloud pipelines had to stay HIPAA-ready from day one.',
    },
    alert: {
      title: 'Safety & Sensitivity',
      body: 'Mental-health adjacent responses required escalation paths, crisis resources, and conservative confidence thresholds on health claims.',
    },
    techStack: ['FLUTTER', 'FASTAPI', 'POSTGRES', 'TIMESCALEDB', 'KAFKA', 'AWS HIPAA'],
    phases: [
      {
        title: 'BIOMETRIC FUSION & CONTEXT',
        bodyLines: phaseBody([
          'Wearable and on-device signals normalize',
          'into a timeline with consent scopes per',
          'metric. Drift-aware baselines adapt to',
          'sleep debt, travel, and workload cycles.',
        ]),
        imageSrc: phasePredictionImg,
        imageAlt: 'Wellness metrics and timeline',
      },
      {
        title: 'GUIDED CONVERSATIONS & CARE PATHS',
        bodyLines: phaseBody([
          'LLM-led coaching stays inside approved',
          'scripts with retrieval from clinical',
          'education libraries. Proactive nudges',
          'trigger only when fused signals agree.',
        ]),
        imageSrc: phaseExecutionImg,
        imageAlt: 'Wellness coaching chat interface',
      },
    ],
    impact: [
      {
        label: 'Wellness Guidance',
        value: 'Real-time',
        footnote: 'Streaming suggestions within seconds of confirmed signal changes.',
      },
      {
        label: 'Private Architecture',
        value: 'By design',
        footnote: 'Minimized PHI footprint, encryption everywhere, tenant isolation.',
      },
    ],
    ltsv: {
      title: 'LONG TERM STRATEGIC VALUE',
      cards: [
        {
          title: 'Holistic View',
          text: 'Correlates subjective check-ins with objective vitals for richer interventions.',
        },
        {
          title: 'Trust Building',
          text: 'Transparent explanations for why a nudge fired increase adherence.',
        },
        {
          title: 'Technical Watch Outs',
          watchouts: [
            'Revalidate thresholds across device firmware generations.',
            'Localize crisis hotlines and regulatory copy per region.',
          ],
        },
      ],
    },
    testimonial: {
      quote:
        'It feels supportive, not surveillance. Databiqs threaded empathy through the entire stack.',
      name: 'Michael Hayes',
      role: 'Operations Manager',
      avatarSrc: testimonialAvatar,
    },
  },
};

export function getCaseStudyDetail(slug) {
  if (!slug) return null;
  return CASE_STUDY_DETAILS[slug] ?? null;
}
