/** Case studies listing (/case-studies): filters, stats, grid cards */

/** Tab order for filters; only tags that appear on at least one `CS_LIST_CARDS` row are shown. */
const CS_LIST_FILTER_TAG_ORDER = [
  'AI Automation',
  'AI Chatbot',
  'Machine Learning',
  'Speech Recognition',
  'EdTech',
  'Data Engineering',
  'Creative Design',
  'HealthTech',
];

export const CS_LIST_STATS = [
  { value: '320+', label: 'Projects delivered' },
  { value: '100%', label: 'Client retention' },
  { value: '12.4', label: 'Avg efficiency gain' },
  { value: '$50M+', label: 'Client value unlocked' },
  { value: '24/7', label: 'Support coverage' },
  { value: '31+', label: 'Countries served' },
];

export const CS_LIST_CARDS = [
  {
    id: 'novatech',
    category: 'AI Chatbot',
    filterKey: 'AI Chatbot',
    company: 'Novatech Solutions',
    companySubtitle: 'Global SaaS Platform',
    title: 'Rebuilding enterprise support with conversational AI triage',
    description:
      "Novatech's 10-person support team was overwhelmed. With tickets doubling every quarter and CSAT declining, they needed a smarter approach, not more headcount.",
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
    title: 'Intelligent workflow orchestration across 14 departments',
    description:
      'Manual operations across 14 departments were creating bottlenecks and errors. Our AI orchestration layer connected every system, reducing operational overhead by 45% in 60 days.',
    metrics: [
      { value: '45%', label: 'Cost Reduction' },
      { value: '14', label: 'Departments Connected' },
      { value: '60d', label: 'Time To Deploy' },
    ],
    href: '/case-studies/workflow-14',
  },
  {
    id: 'voice-transcription-app',
    category: 'Speech Recognition',
    filterKey: 'Speech Recognition',
    company: 'Voice-to-Text Transcription',
    companySubtitle: 'AI / Speech Recognition',
    title: 'Voice-to-Text Transcription App',
    description:
      'This app uses advanced speech recognition to transcribe voice recordings into text instantly. With searchability, easy organization, and sharing, users turn audio notes into editable, shareable formats for professionals, students, and content creators.',
    metrics: [
      { value: '<2s', label: 'Avg. Chunk Latency' },
      { value: '100%', label: 'Searchable Library' },
      { value: '40+', label: 'Locales / Accents' },
    ],
    href: '/case-studies/voice-transcription-app',
  },
  {
    id: 'sentiment-investment-prediction',
    category: 'Machine Learning',
    filterKey: 'Machine Learning',
    company: 'Sentiment-Enhanced Forecasting',
    companySubtitle: 'AI / Investment & Finance',
    title: 'AI-driven sentiment analysis for investment price prediction',
    description:
      'A research-grade platform with an advanced ML framework that blends price signals with sentiment from news, social media, and financial reports, delivering richer features and more robust forecast bands.',
    metrics: [
      { value: '3', label: 'Signal Classes' },
      { value: 'Daily', label: 'Feature Refresh' },
      { value: 'A/B', label: 'Model Validation' },
    ],
    href: '/case-studies/sentiment-investment-prediction',
  },
  {
    id: 'avatar-learning-platform',
    category: 'EdTech',
    filterKey: 'EdTech',
    company: 'Avatar',
    companySubtitle: 'AI / EdTech',
    title: 'Conversational AI platform for smarter learning',
    description:
      'Meet Avatar, your smart AI companion for learning English. It personalises lessons to your level and goals with dynamic practice, real-time feedback, and natural conversations, anytime, anywhere.',
    metrics: [
      { value: 'Adaptive', label: 'Learning Paths' },
      { value: 'Live', label: 'Conversation Practice' },
      { value: '24/7', label: 'Lesson Access' },
    ],
    href: '/case-studies/avatar-learning-platform',
  },
  {
    id: 'data-automation-platform',
    category: 'Data Engineering',
    filterKey: 'Data Engineering',
    company: 'Data Automation & Transformation',
    companySubtitle: 'Data Engineering / Automation',
    title: 'Data automation & transformation tool',
    description:
      'This platform automates extraction, cleaning, and transformation of raw data into actionable insights. Multiple integrations support streamlined pipelines with real-time analytics and reporting.',
    metrics: [
      { value: '50+', label: 'Source Connectors' },
      { value: 'Real-time', label: 'Analytics Layer' },
      { value: '99.9%', label: 'Pipeline SLA Target' },
    ],
    href: '/case-studies/data-automation-platform',
  },
  {
    id: 'creative-ai-design-tool',
    category: 'Creative Design',
    filterKey: 'Creative Design',
    company: 'Creative AI Design Studio',
    companySubtitle: 'AI / Creative Design',
    title: 'Creative AI design tool',
    description:
      'An AI-powered creative tool that generates high-quality images, graphics, and designs from simple prompts, making marketing and social visuals accessible to professionals and non-designers alike.',
    metrics: [
      { value: '4K', label: 'Export Ready' },
      { value: 'Prompt', label: 'Driven Workflow' },
      { value: '<30s', label: 'Typical Iteration' },
    ],
    href: '/case-studies/creative-ai-design-tool',
  },
  {
    id: 'wellness-ai-companion',
    category: 'HealthTech',
    filterKey: 'HealthTech',
    company: 'Wellness AI',
    companySubtitle: 'AI / HealthTech / Wellness',
    title: 'Your intelligent digital companion',
    description:
      'Wellness AI supports emotional and physical wellbeing with advanced AI and sensing-aware signals. It connects to biometric context to surface stress and fatigue patterns with proactive, real-time guidance.',
    metrics: [
      { value: 'Real-time', label: 'Wellness Guidance' },
      { value: 'Biometric', label: 'Signal Awareness' },
      { value: 'Private', label: 'By-design Architecture' },
    ],
    href: '/case-studies/wellness-ai-companion',
  },
];

export const CS_LIST_FILTERS = [
  'All',
  ...CS_LIST_FILTER_TAG_ORDER.filter((tag) =>
    CS_LIST_CARDS.some((c) => (c.filterKey ?? c.category) === tag)
  ),
];
