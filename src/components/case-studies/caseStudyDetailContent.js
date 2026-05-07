/**
 * Case study detail pages: keyed by URL slug (`/case-studies/:slug`).
 * Add or edit entries here; CaseStudiesDetails renders from this shape.
 */
import caseStudyImage from '../../assets/case-study.svg';
import phasePredictionImg from '../../assets/phase1-prediction.svg';
import phaseExecutionImg from '../../assets/phase2-prediction.svg';
import testimonialAvatar from '../../assets/Michael-Hayes.svg';

const phaseBody = (lines) => lines;

export const CASE_STUDY_DETAILS = {
  'project-aether': {
    hero: {
      imageSrc: caseStudyImage,
      imageAlt: 'Project Aether',
      primaryBadge: 'Fintech',
      secondaryBadge: '14 Month Timeline',
      title: 'PROJECT AETHER',
      subtitle: 'PREDICTIVE LIQUIDITY MESH',
      description:
        'A total neural architecture re-imagining for global capital movement, mitigating systematic slippage through deep-learning foresight.',
    },
    challenge: {
      heading:
        'LEGACY SYSTEMS WERE LEAKING MILLIONS EVERY HOUR DURING HIGH-VOLATILITY MARKET EVENTS.',
      body: 'Our client faced architectural bottleneck: traditional execution engines were reactive. By the time slippage was detected, the capital loss was already baked into transaction.',
    },
    alert: {
      title: 'System Fragility',
      body: 'Sub-second volatility spikes triggered cascading execution failures, leading to an average slippage loss of $14M per event.',
    },
    techStack: ['PYTORCH', 'AWS NEURON', 'KAFKA MESH', 'FPGA ACCELERATORS', 'VECTOR DB', 'GRAFANA LABS'],
    phases: [
      {
        title: 'THE LATENT LIQUIDITY ENGINE',
        bodyLines: phaseBody([
          "We implemented a deep mesh network that doesn't",
          'just watch trades. It simulates 10,000 parallel',
          'market futures per millisecond. By predicting',
          "liquidity 'dry spots' before they occur, the mesh",
          'per-positions capital through high-speed Kafka',
          'channels.',
        ]),
        imageSrc: phasePredictionImg,
        imageAlt: 'Developer reviewing liquidity and market data on a laptop',
      },
      {
        title: 'SUB - 50MS NEURAL ROUTING',
        bodyLines: phaseBody([
          'Utilizing AWS Neuron-optimized instances, we',
          'reduced the inference-to-execution window to',
          'under 50ms. This predictive bridge allows for',
          'automatic transactions that bypass legacy routing',
          'bottlenecks entirely.',
        ]),
        imageSrc: phaseExecutionImg,
        imageAlt: 'Abstract visualization of high-speed data routing and infrastructure',
      },
    ],
    impact: [
      {
        label: 'Slippage Reduction',
        value: '$200M+',
        valueAriaLabel: 'Over 200 million dollars',
        footnote:
          'Annualized slippage loss reduced to near zero within the first quarter of deployment.',
      },
      {
        label: 'Latency Threshold',
        value: '<50ms',
        footnote:
          'Consistent end-to-end routing latency achieved across global geographic nodes.',
      },
    ],
    ltsv: {
      title: 'LONG TERM STRATEGIC VALUE',
      cards: [
        {
          title: 'Global Scalability',
          text: 'Elastic mesh topology scales execution capacity horizontally across regions without re-architecting core inference pipelines.',
        },
        {
          title: 'Resilience Profile',
          text: 'Multi-path failover and predictive circuit-breaking isolate fault domains before they propagate across the trading stack.',
        },
        {
          title: 'Technical Watch Outs',
          watchouts: [
            'Ongoing calibration of Neuron clusters against shifting volatility regimes to avoid model drift under tail events.',
            'Kafka mesh throughput must stay ahead of peak order bursts—capacity reviews scheduled quarterly with automated headroom alerts.',
          ],
        },
      ],
    },
    testimonial: {
      quote:
        'Databiqs Delivered An AI Solution That Significantly Improved Our Customer Response Time And Operational Efficiency. Their Approach Was Strategic, Professional, And Results-Driven.',
      name: 'Michael Hayes',
      role: 'Operations Manager',
      avatarSrc: testimonialAvatar,
    },
  },

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

  'ml-forecast': {
    hero: {
      imageSrc: caseStudyImage,
      imageAlt: 'Northwind Retail',
      primaryBadge: 'Machine Learning',
      secondaryBadge: 'Omnichannel',
      title: 'NORTHWIND RETAIL',
      subtitle: 'DEMAND FORECASTING AT SCALE',
      description:
        'Gradient-boosted models on fresh POS and inventory streams cut stock waste and improved margin within weeks.',
    },
    challenge: {
      heading: 'SPREADSHEETS COULD NOT KEEP UP WITH SEASONAL SWINGS.',
      body: 'Buyers guessed reorder points; stores overstuffed slow movers while bestsellers stocked out on weekends.',
    },
    alert: {
      title: 'Margin Leak',
      body: 'Finance flagged rising write-offs and emergency transfers quarter over quarter.',
    },
    techStack: ['XGBOOST', 'PYTHON', 'DBT', 'SNOWFLAKE', 'MLFLOW', 'LOOKER'],
    phases: [
      {
        title: 'FEATURE STORE & BASELINES',
        bodyLines: phaseBody([
          'We unified POS, promo, and weather signals into',
          'a daily feature set with leakage checks. Baselines',
          'proved lift before any store rollout.',
        ]),
        imageSrc: phasePredictionImg,
        imageAlt: 'Forecasting analytics',
      },
      {
        title: 'STORE-LEVEL INFERENCE',
        bodyLines: phaseBody([
          'Batch scoring feeds replenishment APIs; planners',
          'override with guardrails. Accuracy gains tracked',
          'by category and region.',
        ]),
        imageSrc: phaseExecutionImg,
        imageAlt: 'Retail operations',
      },
    ],
    impact: [
      {
        label: 'Less Stock Waste',
        value: '32%',
        footnote: 'Reduction in obsolete inventory within two seasons.',
      },
      {
        label: 'Margin Uplift',
        value: '18%',
        footnote: 'Attributed to fewer markdowns and better in-stock on top SKUs.',
      },
    ],
    ltsv: {
      title: 'LONG TERM STRATEGIC VALUE',
      cards: [
        {
          title: 'Retrain Pipeline',
          text: 'Scheduled retrains with drift monitors prevent silent degradation.',
        },
        {
          title: 'Supplier Alignment',
          text: 'Shared forecast bands reduced contention on joint business planning.',
        },
        {
          title: 'Technical Watch Outs',
          watchouts: [
            'Treat promotions as first-class features; stale promo flags destroy accuracy.',
            'Watch cold-start SKUs after assortment changes.',
          ],
        },
      ],
    },
    testimonial: {
      quote:
        'Our buyers trust the numbers again. Databiqs made the ML boring—in the best way.',
      name: 'Michael Hayes',
      role: 'Operations Manager',
      avatarSrc: testimonialAvatar,
    },
  },

  'strategy-lumen': {
    hero: {
      imageSrc: caseStudyImage,
      imageAlt: 'Lumen Financial',
      primaryBadge: 'AI Strategy',
      secondaryBadge: 'Regional Banking',
      title: 'LUMEN FINANCIAL',
      subtitle: 'BOARD-READY AI ROADMAP',
      description:
        'A scored portfolio of use cases, data readiness, and risk so the board funded the right pilots in one session.',
    },
    challenge: {
      heading: 'EXECUTIVES NEEDED DEFENSIBLE PRIORITIZATION, NOT HYPE.',
      body: 'Dozens of AI ideas competed for budget; compliance required explainable sequencing and measurable controls.',
    },
    alert: {
      title: 'Funding Deadlock',
      body: 'Without a shared framework, innovation stalled while competitors shipped customer-facing wins.',
    },
    techStack: ['NOTION', 'PYTHON', 'RISK MATRIX', 'DATA CATALOG', 'GCP', 'JIRA'],
    phases: [
      {
        title: 'USE CASE SCORING',
        bodyLines: phaseBody([
          'We scored twelve initiatives on value, risk, data',
          'readiness, and regulation. Quick wins funded first;',
          'platform bets sequenced after foundations.',
        ]),
        imageSrc: phasePredictionImg,
        imageAlt: 'Strategy workshop',
      },
      {
        title: '90-DAY PILOT WINDOWS',
        bodyLines: phaseBody([
          'Each pilot had exit criteria, model cards, and',
          'rollback plans. Legal and risk signed the same',
          'scorecard the board saw.',
        ]),
        imageSrc: phaseExecutionImg,
        imageAlt: 'Execution timeline',
      },
    ],
    impact: [
      {
        label: 'Use Cases Scored',
        value: '12',
        footnote: 'Single prioritization framework across business and technology.',
      },
      {
        label: 'Board Approval',
        value: '100%',
        footnote: 'Funded first wave in a single board review cycle.',
      },
    ],
    ltsv: {
      title: 'LONG TERM STRATEGIC VALUE',
      cards: [
        {
          title: 'Governance Rhythm',
          text: 'Quarterly portfolio reviews keep spend aligned to risk appetite.',
        },
        {
          title: 'Vendor Neutrality',
          text: 'Architecture choices were documented so RFPs stay competitive.',
        },
        {
          title: 'Technical Watch Outs',
          watchouts: [
            'Re-score when regulatory guidance shifts on model use in lending.',
            'Do not skip data lineage for customer-facing models.',
          ],
        },
      ],
    },
    testimonial: {
      quote:
        'Finally one narrative the board, risk, and engineering could all sign. Databiqs brought clarity.',
      name: 'Michael Hayes',
      role: 'Operations Manager',
      avatarSrc: testimonialAvatar,
    },
  },

  'chatbot-support': {
    hero: {
      imageSrc: caseStudyImage,
      imageAlt: 'Helix Health',
      primaryBadge: 'AI Chatbot',
      secondaryBadge: 'Telehealth',
      title: 'HELIX HEALTH',
      subtitle: 'SAFE TRIAGE AT SCALE',
      description:
        'Guarded LLM workflows resolve tier-one questions, escalate with context, and keep clinicians in the loop.',
    },
    challenge: {
      heading: 'PATIENTS ABANDONED QUEUES WHEN HOLD TIMES SPIKED.',
      body: 'Nurses could not scale phone volume; after-hours coverage was expensive and inconsistent.',
    },
    alert: {
      title: 'Safety First',
      body: 'Zero tolerance for PHI leakage or unsupervised clinical advice.',
    },
    techStack: ['HIPAA BAA', 'AZURE OPENAI', 'FHIR', 'REACT', 'KAFKA', 'SPLUNK'],
    phases: [
      {
        title: 'GUARDED DIALOG FLOWS',
        bodyLines: phaseBody([
          'Structured intents handle scheduling, billing, and',
          'general education. Sensitive paths always hand off',
          'to a licensed clinician with full context.',
        ]),
        imageSrc: phasePredictionImg,
        imageAlt: 'Patient triage chat',
      },
      {
        title: 'OBSERVABILITY & RED TEAMING',
        bodyLines: phaseBody([
          'Automated evals run nightly on adversarial prompts.',
          'Audit logs tie every answer to retrieved policy',
          'snippets.',
        ]),
        imageSrc: phaseExecutionImg,
        imageAlt: 'Compliance monitoring',
      },
    ],
    impact: [
      {
        label: 'Fewer Abandons',
        value: '61%',
        footnote: 'Measured on phone and chat queues after rollout.',
      },
      {
        label: 'PII Incidents',
        value: '0',
        footnote: 'No PHI leakage events in twelve months of production.',
      },
    ],
    ltsv: {
      title: 'LONG TERM STRATEGIC VALUE',
      cards: [
        {
          title: 'Clinical Trust',
          text: 'Clinicians approve template updates; patients see consistent messaging.',
        },
        {
          title: 'Capacity',
          text: 'Handled 2.1x concurrent sessions with the same staffing model.',
        },
        {
          title: 'Technical Watch Outs',
          watchouts: [
            'Re-validate flows when payer rules or formularies change.',
            'Keep red-team prompts updated against new jailbreak patterns.',
          ],
        },
      ],
    },
    testimonial: {
      quote:
        'Patients get answers faster without cutting corners on safety. Databiqs understood healthcare, not just models.',
      name: 'Michael Hayes',
      role: 'Operations Manager',
      avatarSrc: testimonialAvatar,
    },
  },

  'auto-finance': {
    hero: {
      imageSrc: caseStudyImage,
      imageAlt: 'Cedar Capital',
      primaryBadge: 'AI Automation',
      secondaryBadge: 'Asset Management',
      title: 'CEDAR CAPITAL',
      subtitle: 'CLOSE-TO-LEDGER AUTOMATION',
      description:
        'RPA plus validation models eliminated re-keying across five systems so analysts focus on exceptions only.',
    },
    challenge: {
      heading: 'ANALYSTS RE-KEYED THE SAME FIELDS ACROSS FIVE SYSTEMS.',
      body: 'Month-end close stretched past deadlines; errors surfaced late in audit cycles.',
    },
    alert: {
      title: 'Close Risk',
      body: 'Leadership mandated fewer manual touches without weakening controls.',
    },
    techStack: ['UIPATH', 'PYTHON', 'SQL SERVER', 'POWER BI', 'AWS', 'SERVICENOW'],
    phases: [
      {
        title: 'SOURCE-OF-TRUTH MAPPING',
        bodyLines: phaseBody([
          'We mapped every close task to systems of record',
          'and owners. Bots pull, normalize, and post with',
          'checksums before ledger lock.',
        ]),
        imageSrc: phasePredictionImg,
        imageAlt: 'Finance workflow',
      },
      {
        title: 'EXCEPTION QUEUES',
        bodyLines: phaseBody([
          'ML flags anomalies on amounts, counterparties, and',
          'timing. Analysts work a ranked queue with full',
          'evidence packets.',
        ]),
        imageSrc: phaseExecutionImg,
        imageAlt: 'Exception handling',
      },
    ],
    impact: [
      {
        label: 'Saved / Quarter',
        value: '220h',
        footnote: 'Analyst hours returned to review and forecasting.',
      },
      {
        label: 'Post Accuracy',
        value: '99.2%',
        footnote: 'First-pass posting accuracy after automation layer.',
      },
    ],
    ltsv: {
      title: 'LONG TERM STRATEGIC VALUE',
      cards: [
        {
          title: 'Audit Trails',
          text: 'Every bot action is signed and replayable for external auditors.',
        },
        {
          title: 'Retire Legacy',
          text: 'Three shadow spreadsheets were fully decommissioned.',
        },
        {
          title: 'Technical Watch Outs',
          watchouts: [
            'Update mappings when GL or sub-ledger versions change.',
            'Watch bot credentials rotation and segregation of duties.',
          ],
        },
      ],
    },
    testimonial: {
      quote:
        'Close week stopped being a fire drill. Databiqs automated the boring parts without touching our controls.',
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
