/** Case studies listing (/case-studies) — filters, stats, grid cards */

export const CS_LIST_FILTERS = [
  'All',
  'AI Automation',
  'AI Chatbot',
  'Machine Learning',
  'AI Strategy',
];

export const CS_LIST_STATS = [
  { value: '120+', label: 'Projects delivered' },
  { value: '94%', label: 'Client retention' },
  { value: '3.2x', label: 'Avg efficiency gain' },
  { value: '$50M+', label: 'Client value unlocked' },
  { value: '24/7', label: 'Support coverage' },
  { value: '14', label: 'Countries served' },
];

export const CS_LIST_CARDS = [
  {
    id: 'novatech',
    category: 'AI Chatbot',
    filterKey: 'AI Chatbot',
    company: 'Novatech Solutions',
    companySubtitle: 'Global SaaS Platform',
    title:
      'Rebuilding enterprise support with\nconversational AI triage',
    description:
      "Novatech's 10-person support team was overwhelmed. With tickets\ndoubling every quarter and CSAT declining, they needed a smarter\napproach — not more headcount.",
    metrics: [
      { value: '78%', label: 'Faster First Response' },
      { value: '1.2M', label: 'Annual Savings' },
      { value: '4.8', label: 'CSAT Score' },
    ],
    href: '/case-studies/novatech',
  },
  {
    id: 'workflow-14',
    category: 'AI Automation',
    filterKey: 'AI Automation',
    company: 'Vertex Operations',
    companySubtitle: 'Enterprise logistics',
    title:
      'Intelligent workflow orchestration across\n14 departments',
    description:
      'Manual operations across 14 departments were creating bottlenecks\nand errors. Our AI orchestration layer connected every system,\nreducing operational overhead by 45% in 60 days.',
    metrics: [
      { value: '45%', label: 'Cost Reduction' },
      { value: '14', label: 'Departments Connected' },
      { value: '60d', label: 'Time To Deploy' },
    ],
    href: '/case-studies/workflow-14',
  },
  {
    id: 'ml-forecast',
    category: 'Machine Learning',
    filterKey: 'Machine Learning',
    company: 'Northwind Retail',
    companySubtitle: 'Omnichannel retail',
    title:
      'Demand forecasting that cut inventory\nwaste by a third',
    description:
      'Legacy spreadsheets could not keep pace with seasonal swings.\nWe deployed gradient-boosted models on fresh POS streams so buyers\nsee accurate two-week horizons without manual tuning.',
    metrics: [
      { value: '32%', label: 'Less Stock Waste' },
      { value: '18%', label: 'Margin Uplift' },
      { value: '4wk', label: 'Payback' },
    ],
    href: '/case-studies/ml-forecast',
  },
  {
    id: 'strategy-lumen',
    category: 'AI Strategy',
    filterKey: 'AI Strategy',
    company: 'Lumen Financial',
    companySubtitle: 'Regional banking',
    title:
      'An AI roadmap that passed board review\nin one session',
    description:
      'Executives needed a defensible sequence of pilots versus big-bang\nplatform bets. We mapped risk, data readiness, and ROI so the team\ncould fund the right first wave with confidence.',
    metrics: [
      { value: '12', label: 'Use Cases Scored' },
      { value: '90d', label: 'Pilot Window' },
      { value: '100%', label: 'Board Approval' },
    ],
    href: '/case-studies/project-aether',
  },
  {
    id: 'chatbot-support',
    category: 'AI Chatbot',
    filterKey: 'AI Chatbot',
    company: 'Helix Health',
    companySubtitle: 'Telehealth network',
    title:
      'Triage bots that cut wait times without\nsacrificing empathy',
    description:
      'Patients abandoned queues when hold times spiked. A guarded LLM\nworkflow now resolves tier-1 questions, escalates with context, and\nkeeps clinicians in the loop for safety.',
    metrics: [
      { value: '61%', label: 'Fewer Abandons' },
      { value: '2.1x', label: 'Capacity' },
      { value: '0', label: 'PII Incidents' },
    ],
    href: '/case-studies/chatbot-support',
  },
  {
    id: 'auto-finance',
    category: 'AI Automation',
    filterKey: 'AI Automation',
    company: 'Cedar Capital',
    companySubtitle: 'Asset management',
    title:
      'Closing workflows automated from inbox\nto ledger',
    description:
      'Analysts re-keyed the same fields across five systems. RPA plus\nvalidation models now handle routine closes, freeing the desk for\nexceptions only.',
    metrics: [
      { value: '220h', label: 'Saved / Quarter' },
      { value: '99.2%', label: 'Post Accuracy' },
      { value: '3', label: 'Systems Retired' },
    ],
    href: '/case-studies/auto-finance',
  },
];
