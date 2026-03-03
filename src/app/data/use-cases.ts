export interface Attribution {
  name: string;
  title: string;
  company: string;
  domain: string;
  initials: string;
  headshot?: string;
  linkedInUrl?: string;
  companyUrl?: string;
  storyUrl?: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  category: string;
  videoUrl: string;
  complexityScore: number; // 1–5
  popularity: number;      // used for default sort order
  detailDescription: string;
  steps: Step[];
  keyBenefits: string[];
  connectedTools: { name: string; icon: string }[];
  relatedUseCaseIds: string[];
  attribution?: Attribution;
}

export const categories = [
  "All",
  "SEO & Content",
  "Sales & CRM",
  "Engineering",
  "Marketing",
  "Support",
  "Data & Analytics",
  "Analytics & Reporting",
  "Content Optimization",
  "Competitive Intelligence",
  "Content Creation",
  "Brand Monitoring",
  "Workflow Automation",
];

export const useCases: UseCase[] = [
  {
    id: "programmatic-seo",
    title: "Generate programmatic SEO pages at scale",
    description:
      "Build thousands of data-driven landing pages — by location, keyword, or product attribute — that rank and convert.",
    category: "SEO & Content",
    videoUrl: "https://www.youtube.com/embed/placeholder-programmatic-seo",
    complexityScore: 4,
    popularity: 892,
    detailDescription:
      "AirOps MCP is purpose-built for programmatic SEO. Connect your structured data sources — product catalogs, location databases, keyword lists — and AirOps generates unique, high-quality page content for each variation at scale. Workflows pull live data from Ahrefs and Google Search Console, enrich it with SERP analysis, and output CMS-ready content through a single MCP server call. Teams have published 50,000+ pages in hours, not months.",
    steps: [
      {
        title: "Connect your data sources",
        description: "Link your product catalog, location database, or keyword list to AirOps via CSV upload or a direct integration with BigQuery or Snowflake.",
      },
      {
        title: "Configure your SEO workflow",
        description: "Select your target CMS (Webflow, WordPress, or headless), define your URL structure, and set keyword-to-page mapping rules.",
      },
      {
        title: "Pull live SERP data",
        description: "The workflow queries Ahrefs and Google Search Console to pull search volume, difficulty scores, and top-ranking page summaries for each target keyword.",
      },
      {
        title: "Generate and review content",
        description: "AirOps produces unique page content for each variation. Review a sample batch in the preview pane and adjust the prompt or template if needed.",
      },
      {
        title: "Publish to your CMS",
        description: "Approve the batch and AirOps pushes CMS-ready content directly to your publishing platform — no developer required.",
      },
    ],
    keyBenefits: [
      "Publish 10,000+ pages from a single workflow run",
      "Unique, high-quality content — not spun templates",
      "Live data integration with Ahrefs and Search Console",
      "CMS-ready output for WordPress, Webflow, or any headless CMS",
    ],
    connectedTools: [
      { name: "Ahrefs", icon: "search" },
      { name: "Google Search Console", icon: "bar-chart" },
      { name: "BigQuery", icon: "database" },
      { name: "Webflow", icon: "layout" },
      { name: "WordPress", icon: "file-text" },
    ],
    relatedUseCaseIds: [
      "seo-content-briefs",
      "seo-meta-optimization",
      "content-repurposing",
    ],
    attribution: {
      name: "Lucy Hoyle",
      title: "Sr Content Engineer",
      company: "Carta",
      domain: "carta.com",
      initials: "LH",
      headshot: "",
      linkedInUrl: "https://www.linkedin.com/in/lucy-hoyle",
      companyUrl: "https://carta.com",
      storyUrl: "",
    },
  },
  {
    id: "seo-content-briefs",
    title: "Research and write AI-powered content briefs",
    description:
      "Pull live SERP data, surface content gaps, and deliver structured briefs your writers can act on immediately.",
    category: "SEO & Content",
    videoUrl: "https://www.youtube.com/embed/placeholder-seo-content-briefs",
    complexityScore: 2,
    popularity: 743,
    detailDescription:
      "AirOps MCP connects your SEO stack to an AI workflow that automates the research-to-brief pipeline. The workflow queries Ahrefs for keyword difficulty and search volume, scrapes and summarizes top-ranking pages for each target keyword, identifies semantic gaps your content should fill, and outputs a structured brief — complete with suggested H2s, internal links, and word count targets — directly into Notion or Google Docs.",
    steps: [
      {
        title: "Upload your keyword list",
        description: "Paste a list of target keywords or connect a Google Sheet. AirOps supports up to 500 keywords per run.",
      },
      {
        title: "Pull keyword and SERP data",
        description: "The workflow fetches search volume, keyword difficulty, and the top 10 ranking URLs for each keyword via Ahrefs and Search Console.",
      },
      {
        title: "Analyze competitor content",
        description: "AirOps scrapes and summarizes the top-ranking pages, extracting H2 structures, word counts, and topic coverage.",
      },
      {
        title: "Identify content gaps",
        description: "The workflow compares competitor coverage against your existing content and flags semantic gaps your brief should address.",
      },
      {
        title: "Deliver briefs to your CMS",
        description: "Structured briefs — with keyword data, suggested outline, internal link targets, and CTA recommendations — land directly in Notion or Google Docs.",
      },
    ],
    keyBenefits: [
      "80% reduction in brief research time",
      "SERP-grounded outlines with real competitor data",
      "Consistent brief structure across every writer",
      "Automatic keyword clustering and intent classification",
    ],
    connectedTools: [
      { name: "Ahrefs", icon: "search" },
      { name: "SEMrush", icon: "trending-up" },
      { name: "Google Search Console", icon: "bar-chart" },
      { name: "Notion", icon: "file-text" },
      { name: "Google Docs", icon: "file" },
    ],
    relatedUseCaseIds: [
      "programmatic-seo",
      "seo-meta-optimization",
      "marketing-campaign-copy",
    ],
    attribution: {
      name: "Connor Beaulieu",
      title: "Sr Manager, SEO & AEO",
      company: "LegalZoom",
      domain: "legalzoom.com",
      initials: "CB",
      headshot: "",
      linkedInUrl: "https://www.linkedin.com/in/connor-beaulieu",
      companyUrl: "https://legalzoom.com",
      storyUrl: "",
    },
  },
  {
    id: "seo-meta-optimization",
    title: "Bulk-optimize meta tags and on-page SEO",
    description:
      "Audit hundreds of pages, rewrite title tags and meta descriptions, and push updates directly to your CMS.",
    category: "SEO & Content",
    videoUrl: "https://www.youtube.com/embed/placeholder-seo-meta-optimization",
    complexityScore: 2,
    popularity: 534,
    detailDescription:
      "AirOps MCP connects Screaming Frog or Search Console exports to an AI optimization workflow. For each page, it compares your current meta tags against the top-ranking competitors, scores the existing copy, and generates a set of CTR-optimized alternatives ranked by predicted click-through rate. Approved changes can be pushed directly to WordPress or Webflow via the same workflow — no developer needed.",
    steps: [
      {
        title: "Export your current meta data",
        description: "Run a Screaming Frog crawl or export a URL list from Search Console. Upload the CSV directly to AirOps.",
      },
      {
        title: "Score existing meta tags",
        description: "The workflow benchmarks each title tag and meta description against the top 5 competitors for the target keyword and assigns a CTR score.",
      },
      {
        title: "Generate optimized alternatives",
        description: "AirOps writes 3 CTR-optimized alternatives per page, ranked by predicted click-through rate and searcher intent match.",
      },
      {
        title: "Review and approve",
        description: "Use the bulk review interface to approve, edit, or reject suggestions. Approve individual pages or the full batch.",
      },
      {
        title: "Push to CMS",
        description: "Approved changes are pushed directly to WordPress or Webflow via the AirOps CMS integration — no developer required.",
      },
    ],
    keyBenefits: [
      "Automated page-level SEO scoring at scale",
      "CTR-optimized meta copy with competitor benchmarking",
      "Bulk updates pushed directly to CMS",
      "Schema markup generation for product and review pages",
    ],
    connectedTools: [
      { name: "Screaming Frog", icon: "bug" },
      { name: "Google Search Console", icon: "bar-chart" },
      { name: "WordPress", icon: "layout" },
      { name: "Webflow", icon: "file-text" },
    ],
    relatedUseCaseIds: [
      "programmatic-seo",
      "seo-content-briefs",
      "content-repurposing",
    ],
  },
  {
    id: "sales-lead-enrichment",
    title: "Enrich and score inbound leads in real time",
    description:
      "The moment a lead enters your CRM, AirOps enriches it with firmographics, tech stack, and buying intent — automatically.",
    category: "Sales & CRM",
    videoUrl: "https://www.youtube.com/embed/placeholder-sales-lead-enrichment",
    complexityScore: 3,
    popularity: 534,
    detailDescription:
      "AirOps MCP triggers on new CRM records and immediately enriches each lead with data pulled from multiple sources: company size and funding stage from Clearbit, tech stack from BuiltWith, LinkedIn profile data, and recent company news. A scoring model weighs ICP fit against intent signals, assigns a priority tier, and routes the lead to the right rep — all before the first human touches it. AEs receive a full dossier, not just a name and email.",
    steps: [
      {
        title: "Connect your CRM",
        description: "Link HubSpot or Salesforce to AirOps. The workflow triggers automatically on every new contact or company record created.",
      },
      {
        title: "Configure your enrichment sources",
        description: "Select which data providers to pull from — Clearbit for firmographics, BuiltWith for tech stack, LinkedIn for profile data. Toggle each source on or off.",
      },
      {
        title: "Define your ICP scoring model",
        description: "Set your ideal customer criteria: company size, industry, tech stack, funding stage, and intent signals. AirOps uses this to score and tier each lead.",
      },
      {
        title: "Review the dossier",
        description: "Each enriched lead gets a one-page dossier: company overview, contact profile, ICP score, and top 3 conversation hooks — automatically attached to the CRM record.",
      },
      {
        title: "Route to the right rep",
        description: "Based on tier and territory rules, the workflow assigns the lead to the correct rep and sends a Slack notification with the dossier summary.",
      },
    ],
    keyBenefits: [
      "Zero-touch enrichment the moment a lead enters your CRM",
      "Multi-source data fusion from 10+ providers",
      "ICP-fit scoring that updates as data refreshes",
      "Rep-ready dossiers that cut call prep time by 70%",
    ],
    connectedTools: [
      { name: "HubSpot", icon: "users" },
      { name: "Salesforce", icon: "cloud" },
      { name: "Clearbit", icon: "database" },
      { name: "LinkedIn", icon: "linkedin" },
      { name: "Clay", icon: "layers" },
    ],
    relatedUseCaseIds: [
      "sales-outreach-personalization",
      "data-reporting",
      "support-ticket-routing",
    ],
  },
  {
    id: "sales-outreach-personalization",
    title: "Personalize outbound sequences at scale",
    description:
      "Craft hyper-relevant emails and LinkedIn touches that reference each prospect's specific context — automatically.",
    category: "Sales & CRM",
    videoUrl: "https://www.youtube.com/embed/placeholder-sales-outreach",
    complexityScore: 3,
    popularity: 589,
    detailDescription:
      "AirOps MCP pulls prospect context from across your stack — CRM history, LinkedIn activity, recent company news, job postings, and G2 reviews — and generates personalized, multi-touch sequences in your brand voice. Each message references a specific pain point, milestone, or trigger event relevant to that prospect. The workflow writes the copy, stages it in your sequencer, and flags any messages that need a human review before sending.",
    steps: [
      {
        title: "Import your prospect list",
        description: "Upload a CSV or connect directly to your CRM to pull the list of prospects you want to target. Include company name, title, and any known context.",
      },
      {
        title: "Connect your research sources",
        description: "AirOps pulls prospect context from LinkedIn, recent company news, G2 reviews, and job postings. Configure which signals matter most for your ICP.",
      },
      {
        title: "Set your sequence structure",
        description: "Define the number of touches, channels (email + LinkedIn), and timing. AirOps will generate personalized copy for each step of the sequence.",
      },
      {
        title: "Review flagged messages",
        description: "The workflow flags any message that references unverified or sensitive information for human review before it enters the sequencer.",
      },
      {
        title: "Push to your sequencer",
        description: "Approved sequences are staged directly in Outreach or Salesloft — ready to activate with one click.",
      },
    ],
    keyBenefits: [
      "3–5× higher reply rates vs. templated sequences",
      "Personalization that references live, prospect-specific signals",
      "Sequences staged directly in Outreach or Salesloft",
      "Brand voice guardrails applied to every message",
    ],
    connectedTools: [
      { name: "Outreach", icon: "send" },
      { name: "Salesloft", icon: "mail" },
      { name: "HubSpot", icon: "users" },
      { name: "LinkedIn", icon: "linkedin" },
      { name: "Clay", icon: "layers" },
    ],
    relatedUseCaseIds: [
      "sales-lead-enrichment",
      "marketing-campaign-copy",
      "content-repurposing",
    ],
  },
  {
    id: "engineering-code-review",
    title: "Automate PR reviews and technical documentation",
    description:
      "Get AI-powered code review comments, auto-generated PR summaries, and documentation that stays in sync with your codebase.",
    category: "Engineering",
    videoUrl: "https://www.youtube.com/embed/placeholder-engineering-code-review",
    complexityScore: 4,
    popularity: 276,
    detailDescription:
      "AirOps MCP connects to GitHub or GitLab and runs on every pull request. It reviews code for security vulnerabilities, logic errors, and style violations, posts inline comments with fix suggestions, and writes a plain-English PR summary that your team can read in 30 seconds. After merge, the same workflow updates your Confluence or Notion documentation to reflect any API or interface changes — keeping docs in sync with code automatically.",
    steps: [
      {
        title: "Install the AirOps GitHub app",
        description: "Connect your GitHub or GitLab organization to AirOps. Configure which repos should trigger the review workflow.",
      },
      {
        title: "Set your review rules",
        description: "Define what the workflow should check for: security vulnerabilities, test coverage, style violations, and breaking API changes. Upload your coding standards if you have them.",
      },
      {
        title: "Run on every PR",
        description: "When a PR is opened, AirOps reviews the diff and posts inline comments with specific fix suggestions — linked to the relevant line of code.",
      },
      {
        title: "Generate a PR summary",
        description: "A plain-English summary is posted to the PR description: what changed, why it matters, and any concerns the reviewer should focus on.",
      },
      {
        title: "Update documentation on merge",
        description: "After the PR merges, AirOps detects any API or interface changes and drafts updated documentation in Confluence or Notion.",
      },
    ],
    keyBenefits: [
      "Inline security and logic review on every PR",
      "Auto-generated PR descriptions and changelogs",
      "Docs that update automatically when code changes",
      "50% reduction in time-to-merge for non-critical PRs",
    ],
    connectedTools: [
      { name: "GitHub", icon: "git-branch" },
      { name: "GitLab", icon: "git-branch" },
      { name: "Linear", icon: "clipboard" },
      { name: "Confluence", icon: "book" },
      { name: "Slack", icon: "message-square" },
    ],
    relatedUseCaseIds: [
      "engineering-incident-response",
      "data-reporting",
      "support-knowledge-base",
    ],
  },
  {
    id: "engineering-incident-response",
    title: "Accelerate incident response and post-mortems",
    description:
      "Aggregate logs, metrics, and runbooks instantly to diagnose production incidents and draft post-mortems automatically.",
    category: "Engineering",
    videoUrl: "https://www.youtube.com/embed/placeholder-engineering-incident",
    complexityScore: 5,
    popularity: 78,
    detailDescription:
      "When PagerDuty fires, AirOps MCP immediately aggregates context: correlated Datadog alerts, recent deployments from GitHub, relevant runbooks from Confluence, and the last 24 hours of Slack conversation in the affected service channel. Within 60 seconds, on-call engineers receive a ranked list of probable root causes with supporting evidence. After resolution, the workflow assembles a post-mortem draft — timeline, contributing factors, and action items — ready for review.",
    steps: [
      {
        title: "Connect your alerting stack",
        description: "Link PagerDuty to AirOps. The workflow triggers automatically when an incident is created, using the incident metadata to scope the investigation.",
      },
      {
        title: "Aggregate incident context",
        description: "AirOps pulls correlated Datadog alerts, recent GitHub deploys, relevant Confluence runbooks, and the Slack thread from the affected service channel.",
      },
      {
        title: "Generate root cause hypotheses",
        description: "The workflow analyzes the aggregated context and produces a ranked list of probable root causes, each with supporting evidence from the data.",
      },
      {
        title: "Assist live investigation",
        description: "During the incident, engineers can prompt AirOps directly in Slack to query logs, check runbooks, or draft customer communications.",
      },
      {
        title: "Auto-draft the post-mortem",
        description: "After resolution, AirOps assembles a post-mortem draft: timeline, contributing factors, impact summary, and action items — ready for the team to review.",
      },
    ],
    keyBenefits: [
      "60% faster mean time to resolution (MTTR)",
      "Automated context aggregation across 5+ tools",
      "Root-cause hypotheses ranked by supporting evidence",
      "Post-mortem drafts generated in minutes, not hours",
    ],
    connectedTools: [
      { name: "Datadog", icon: "activity" },
      { name: "PagerDuty", icon: "bell" },
      { name: "GitHub", icon: "git-branch" },
      { name: "Slack", icon: "message-square" },
      { name: "Confluence", icon: "book" },
    ],
    relatedUseCaseIds: [
      "engineering-code-review",
      "support-ticket-routing",
      "data-anomaly-detection",
    ],
  },
  {
    id: "marketing-campaign-copy",
    title: "Generate on-brand campaign copy across every channel",
    description:
      "From a single campaign brief, generate coordinated copy for ads, emails, social, and landing pages — all in your brand voice.",
    category: "Marketing",
    videoUrl: "https://www.youtube.com/embed/placeholder-marketing-campaign",
    complexityScore: 2,
    popularity: 687,
    detailDescription:
      "AirOps MCP takes your campaign brief and generates a full creative package in minutes. It pulls your brand guidelines, top-performing past campaigns, and current audience segments from your marketing stack, then produces channel-specific copy for Google and Meta ads, email subject lines and bodies, LinkedIn and X posts, and landing page hero text. A/B variants are generated automatically. All copy respects tone, vocabulary, and messaging hierarchy from your brand guide.",
    steps: [
      {
        title: "Upload your campaign brief",
        description: "Paste your brief or link a Notion doc. Include the campaign goal, target audience, key messages, and any existing creative direction.",
      },
      {
        title: "Connect your brand guidelines",
        description: "Link your brand guide from Notion or upload a PDF. AirOps uses this to enforce tone, vocabulary, and messaging hierarchy across every asset.",
      },
      {
        title: "Select your channels",
        description: "Choose which formats to generate: Google Ads, Meta Ads, email (subject + body), LinkedIn, X, and landing page hero. Each uses platform-native formatting.",
      },
      {
        title: "Review and iterate",
        description: "All assets are generated together in a single review view. Edit inline, request variants, or regenerate specific formats without starting over.",
      },
      {
        title: "Export to your tools",
        description: "Push approved copy directly to Google Ads, Mailchimp, or HubSpot — or export as a formatted Google Doc for your team.",
      },
    ],
    keyBenefits: [
      "Full creative package from one brief in under 10 minutes",
      "Brand voice guardrails applied across every asset",
      "A/B variants generated automatically for every format",
      "Consistent messaging hierarchy across all channels",
    ],
    connectedTools: [
      { name: "Google Ads", icon: "megaphone" },
      { name: "Meta Ads", icon: "megaphone" },
      { name: "Mailchimp", icon: "mail" },
      { name: "HubSpot", icon: "users" },
      { name: "Notion", icon: "file-text" },
    ],
    relatedUseCaseIds: [
      "seo-content-briefs",
      "content-repurposing",
      "sales-outreach-personalization",
    ],
  },
  {
    id: "content-repurposing",
    title: "Repurpose content across formats and channels",
    description:
      "Transform a blog post, webinar, or report into a full library of channel-ready assets — automatically.",
    category: "Marketing",
    videoUrl: "https://www.youtube.com/embed/placeholder-content-repurposing",
    complexityScore: 1,
    popularity: 612,
    detailDescription:
      "AirOps MCP connects to your content library and applies format-aware transformation workflows. A single long-form piece becomes a LinkedIn post, a Twitter/X thread, a newsletter section, a short-form video script, and a slide deck outline — each adapted to the platform's native format, character limits, and audience expectations. Finished assets are pushed directly to your content calendar in Notion or your social scheduler in Buffer.",
    steps: [
      {
        title: "Connect your source content",
        description: "Paste a URL, upload a transcript, or link directly from Notion or Google Docs. AirOps handles blog posts, webinar recordings, PDFs, and reports.",
      },
      {
        title: "Select your output formats",
        description: "Choose which formats to generate: LinkedIn post, X thread, newsletter section, video script, slide deck outline, and more.",
      },
      {
        title: "Set your distribution channels",
        description: "Link your Buffer, Hootsuite, or Notion account so AirOps knows where to send each asset when approved.",
      },
      {
        title: "Review the full asset set",
        description: "All repurposed formats are generated in a single view. Each is adapted to the platform's native format and character limits.",
      },
      {
        title: "Publish to your scheduler",
        description: "Approve assets and push them directly to your content calendar or social scheduler — with suggested posting times included.",
      },
    ],
    keyBenefits: [
      "10× content output from a single source asset",
      "Platform-native formatting for every channel",
      "Published directly to your scheduler or CMS",
      "Consistent key messages across all derivative formats",
    ],
    connectedTools: [
      { name: "Notion", icon: "file-text" },
      { name: "WordPress", icon: "layout" },
      { name: "Buffer", icon: "share-2" },
      { name: "Transistor", icon: "activity" },
    ],
    relatedUseCaseIds: [
      "marketing-campaign-copy",
      "seo-content-briefs",
      "support-knowledge-base",
    ],
  },
  {
    id: "support-ticket-routing",
    title: "Automate support ticket triage and response drafts",
    description:
      "Classify, prioritize, and draft responses for incoming tickets using your knowledge base and CRM data — before an agent touches them.",
    category: "Support",
    videoUrl: "https://www.youtube.com/embed/placeholder-support-ticket-routing",
    complexityScore: 3,
    popularity: 312,
    detailDescription:
      "AirOps MCP sits between your inbox and your support queue. Every new ticket is automatically classified by topic, urgency, and customer tier — with Zendesk, Intercom, or Freshdesk updated instantly. For Tier 1 issues, the workflow searches your knowledge base and drafts a response the agent can send with one click. High-urgency tickets from enterprise customers are escalated immediately with a full context summary attached.",
    steps: [
      {
        title: "Connect your support platform",
        description: "Link Zendesk, Intercom, or Freshdesk. The workflow triggers on every new ticket and applies your classification rules automatically.",
      },
      {
        title: "Define your classification taxonomy",
        description: "Set up ticket categories, urgency tiers, and routing rules. Map customer segments from your CRM to escalation paths.",
      },
      {
        title: "Connect your knowledge base",
        description: "Link your help center or Notion docs. AirOps uses this to draft responses for Tier 1 issues — pulling the most relevant article for each ticket.",
      },
      {
        title: "Review drafted responses",
        description: "Agents see a pre-drafted response alongside the ticket. They can send with one click, edit inline, or discard and write their own.",
      },
      {
        title: "Monitor and refine",
        description: "Review classification accuracy and response quality weekly. Adjust your taxonomy and knowledge base coverage based on what the workflow flags as gaps.",
      },
    ],
    keyBenefits: [
      "Tickets classified and routed before agents start their day",
      "50% reduction in first response time",
      "Agent-ready response drafts for 60% of Tier 1 tickets",
      "Enterprise escalations flagged instantly with full context",
    ],
    connectedTools: [
      { name: "Zendesk", icon: "headphones" },
      { name: "Intercom", icon: "message-circle" },
      { name: "Freshdesk", icon: "headphones" },
      { name: "HubSpot", icon: "users" },
      { name: "Notion", icon: "file-text" },
    ],
    relatedUseCaseIds: [
      "support-knowledge-base",
      "sales-lead-enrichment",
      "data-reporting",
    ],
  },
  {
    id: "support-knowledge-base",
    title: "Keep your help center automatically up to date",
    description:
      "Detect product changes from release notes and tickets, then draft updated help articles before customers notice the gap.",
    category: "Support",
    videoUrl: "https://www.youtube.com/embed/placeholder-support-knowledge-base",
    complexityScore: 2,
    popularity: 128,
    detailDescription:
      "AirOps MCP monitors your product changelog, GitHub release notes, and Jira tickets to surface knowledge base articles that are stale or missing. For each gap, it drafts an updated article in your documentation style — complete with step-by-step instructions, screenshots prompts, and a suggested URL. Teams report eliminating the 'knowledge base debt' backlog that used to take a dedicated writer weeks to clear after every product release.",
    steps: [
      {
        title: "Connect your changelog sources",
        description: "Link your GitHub releases, Jira project, or product changelog page. AirOps monitors these continuously for changes that affect customer-facing behavior.",
      },
      {
        title: "Connect your knowledge base",
        description: "Link Zendesk Guide, Notion, or your documentation platform. AirOps uses your existing article style as the template for new drafts.",
      },
      {
        title: "Review stale article flags",
        description: "AirOps surfaces articles where the product behavior described no longer matches the latest release and explains specifically what changed.",
      },
      {
        title: "Review new article drafts",
        description: "For each gap, AirOps drafts a complete article in your doc style — with step-by-step instructions, a suggested title, and a placeholder for screenshots.",
      },
      {
        title: "Publish to your help center",
        description: "Approve and publish directly from the AirOps review interface. Changes go live in your help center without leaving the workflow.",
      },
    ],
    keyBenefits: [
      "Zero knowledge base debt after product releases",
      "Articles drafted automatically in your doc style",
      "Proactive gap detection before customers hit a dead end",
      "30% reduction in repeat support tickets within 60 days",
    ],
    connectedTools: [
      { name: "Notion", icon: "file-text" },
      { name: "Zendesk Guide", icon: "headphones" },
      { name: "GitHub", icon: "git-branch" },
      { name: "Jira", icon: "clipboard" },
    ],
    relatedUseCaseIds: [
      "support-ticket-routing",
      "engineering-code-review",
      "content-repurposing",
    ],
  },
  {
    id: "data-reporting",
    title: "Build automated, narrative-rich analytics reports",
    description:
      "Pull data from multiple sources and generate executive-ready reports with charts, trends, and plain-language insights.",
    category: "Data & Analytics",
    videoUrl: "https://www.youtube.com/embed/placeholder-data-reporting",
    complexityScore: 3,
    popularity: 389,
    detailDescription:
      "AirOps MCP connects to your data warehouse, analytics platforms, and business tools to assemble comprehensive reports on demand or on schedule. It doesn't just surface numbers — it interprets them, identifies week-over-week trends, flags anomalies, and wraps everything in a readable narrative. Reports land in Slack, email, or Notion automatically. Teams replace hours of manual Google Sheets work with a workflow that runs in under 3 minutes.",
    steps: [
      {
        title: "Connect your data sources",
        description: "Link BigQuery, Snowflake, Google Analytics, or HubSpot. AirOps can pull from multiple sources in a single report run.",
      },
      {
        title: "Define your report template",
        description: "Specify which metrics to include, how to segment them, and what format the output should take — narrative summary, table, or both.",
      },
      {
        title: "Set your delivery schedule",
        description: "Configure when reports should run — daily, weekly, or monthly — and where they should be delivered: Slack channel, email list, or Notion page.",
      },
      {
        title: "Review the first output",
        description: "Run the workflow manually for the first time to review the output. Adjust metric definitions, narrative style, or formatting as needed.",
      },
      {
        title: "Activate automated delivery",
        description: "Enable the schedule and the report runs and delivers itself. Any anomalies in the data trigger an additional alert outside the normal report cadence.",
      },
    ],
    keyBenefits: [
      "Reports delivered to Slack or email on any schedule",
      "Multi-source aggregation from data warehouse + SaaS tools",
      "Narrative insights, not just raw tables",
      "Anomaly callouts and trend analysis included automatically",
    ],
    connectedTools: [
      { name: "BigQuery", icon: "database" },
      { name: "Snowflake", icon: "cloud" },
      { name: "Google Analytics", icon: "trending-up" },
      { name: "Looker", icon: "pie-chart" },
      { name: "Slack", icon: "message-square" },
    ],
    relatedUseCaseIds: [
      "data-anomaly-detection",
      "sales-lead-enrichment",
      "engineering-incident-response",
    ],
  },
  {
    id: "data-anomaly-detection",
    title: "Detect metric anomalies and alert teams in context",
    description:
      "Monitor your most important KPIs continuously and get intelligent, contextualized alerts the moment something looks off.",
    category: "Data & Analytics",
    videoUrl: "https://www.youtube.com/embed/placeholder-data-anomaly",
    complexityScore: 4,
    popularity: 187,
    detailDescription:
      "AirOps MCP continuously monitors your key business metrics across connected data sources. When it detects an anomaly — an unexpected spike, a sudden drop, or a deviation from the established baseline — it doesn't just fire a raw alert. It aggregates context: recent deploys from GitHub, campaign changes from your ad platform, and correlated metrics from adjacent systems. The alert that hits Slack explains what happened, why it probably happened, and what to check first.",
    steps: [
      {
        title: "Define your monitored metrics",
        description: "Select the KPIs to watch — conversion rate, MRR, ad spend efficiency, or any custom metric from your data warehouse.",
      },
      {
        title: "Set your baseline and thresholds",
        description: "Configure the rolling window for baseline calculation and the deviation percentage that triggers an alert. AirOps can also auto-learn baselines.",
      },
      {
        title: "Connect your context sources",
        description: "Link GitHub, your ad platforms, and your product analytics tool. When an anomaly fires, AirOps pulls recent changes from these sources to explain it.",
      },
      {
        title: "Configure alert delivery",
        description: "Set the Slack channel, email list, or PagerDuty policy that receives the alert. Include the right stakeholders for each metric.",
      },
      {
        title: "Review and tune",
        description: "After the first week, review alert frequency and false-positive rate. Adjust thresholds and context sources to reduce noise.",
      },
    ],
    keyBenefits: [
      "Continuous monitoring with no dashboard-watching required",
      "Alerts include correlated context, not just raw numbers",
      "Pattern deviation detection across any KPI or metric",
      "Escalation workflows that page the right team automatically",
    ],
    connectedTools: [
      { name: "BigQuery", icon: "database" },
      { name: "Snowflake", icon: "cloud" },
      { name: "Datadog", icon: "activity" },
      { name: "Slack", icon: "message-square" },
      { name: "PagerDuty", icon: "bell" },
    ],
    relatedUseCaseIds: [
      "data-reporting",
      "engineering-incident-response",
      "support-ticket-routing",
    ],
  },
  {
    id: "analytics-revenue-attribution",
    title: "Attribute revenue to every marketing touchpoint automatically",
    description:
      "Map every deal back to the campaigns, content, and channels that influenced it — with multi-touch attribution models built in.",
    category: "Analytics & Reporting",
    videoUrl: "https://www.youtube.com/embed/placeholder-analytics-revenue",
    complexityScore: 4,
    popularity: 254,
    detailDescription:
      "AirOps MCP connects your CRM, ad platforms, and analytics stack to build a unified attribution model. It joins ad spend data from Google and Meta, email engagement from HubSpot, and closed-won data from Salesforce to compute first-touch, last-touch, and linear attribution for every deal. Reports are generated on demand and delivered to Slack or Notion — no data team required.",
    steps: [
      {
        title: "Connect your revenue and marketing data",
        description: "Link Salesforce or HubSpot for deal data, Google and Meta for ad spend, and your email platform for engagement data.",
      },
      {
        title: "Select your attribution model",
        description: "Choose from first-touch, last-touch, or linear (time-decay) attribution. AirOps generates all three so you can compare.",
      },
      {
        title: "Define your reporting dimensions",
        description: "Set how to segment the data — by channel, campaign, content piece, or team. Add CAC and ROI calculations per dimension.",
      },
      {
        title: "Run your first attribution report",
        description: "Review the output and validate that channel mapping and deal data look correct before setting up automated delivery.",
      },
      {
        title: "Schedule recurring delivery",
        description: "Configure weekly or monthly report delivery to Slack or Notion. Reports include period-over-period comparisons automatically.",
      },
    ],
    keyBenefits: [
      "Multi-touch attribution across every channel in one view",
      "Automated weekly and monthly attribution reports",
      "CAC and ROI calculated per channel automatically",
      "No data team or SQL required",
    ],
    connectedTools: [
      { name: "Salesforce", icon: "cloud" },
      { name: "HubSpot", icon: "users" },
      { name: "Google Ads", icon: "megaphone" },
      { name: "BigQuery", icon: "database" },
      { name: "Slack", icon: "message-square" },
    ],
    relatedUseCaseIds: ["data-reporting", "marketing-campaign-copy", "data-anomaly-detection"],
  },
  {
    id: "analytics-cohort-analysis",
    title: "Run automated cohort and retention analyses",
    description:
      "Understand exactly when and why users churn — with cohort breakdowns delivered to your team on a recurring schedule.",
    category: "Analytics & Reporting",
    videoUrl: "https://www.youtube.com/embed/placeholder-analytics-cohort",
    complexityScore: 4,
    popularity: 97,
    detailDescription:
      "AirOps MCP queries your data warehouse to build cohort retention tables, calculates week-over-week and month-over-month retention curves, and surfaces the product events most correlated with long-term retention. Outputs are formatted as readable summaries for leadership and detailed breakdowns for product teams — all delivered automatically.",
    steps: [
      {
        title: "Connect your data warehouse",
        description: "Link Snowflake or BigQuery. AirOps needs a user events table with timestamps and a user identifier to build cohort tables.",
      },
      {
        title: "Define your cohort parameters",
        description: "Set your cohort grouping (signup month, acquisition channel, plan type) and the retention milestones to track (Day 7, Day 30, Day 90).",
      },
      {
        title: "Identify your key activation events",
        description: "Select the product events to correlate with retention — feature usage, integration setup, or any custom event in your warehouse.",
      },
      {
        title: "Review the first cohort output",
        description: "Validate the cohort tables and retention curves. Confirm the activation event correlations make sense before scheduling delivery.",
      },
      {
        title: "Schedule recurring delivery",
        description: "Set the delivery cadence and destination — weekly to a Slack channel, monthly to a Notion page, or both.",
      },
    ],
    keyBenefits: [
      "Cohort tables built automatically from raw warehouse data",
      "Retention curve analysis with trend narratives",
      "Early churn signals surfaced before customers cancel",
      "Scheduled delivery to Slack, Notion, or email",
    ],
    connectedTools: [
      { name: "Snowflake", icon: "cloud" },
      { name: "BigQuery", icon: "database" },
      { name: "Amplitude", icon: "activity" },
      { name: "Mixpanel", icon: "trending-up" },
      { name: "Notion", icon: "file-text" },
    ],
    relatedUseCaseIds: ["data-reporting", "data-anomaly-detection", "support-ticket-routing"],
  },
  {
    id: "content-optimization-ctr",
    title: "Optimize existing content for CTR and dwell time",
    description:
      "Audit your live content library, find underperformers, and rewrite them to recover rankings and engagement.",
    category: "Content Optimization",
    videoUrl: "https://www.youtube.com/embed/placeholder-content-optimization-ctr",
    complexityScore: 2,
    popularity: 356,
    detailDescription:
      "AirOps MCP connects Search Console, Ahrefs, and your CMS to identify content that's lost rankings or has high impressions but low CTR. It diagnoses the root cause — stale data, weak headlines, thin content, poor E-E-A-T signals — and generates a prioritized rewrite plan with specific recommendations for each page. Approved rewrites can be pushed directly to your CMS.",
    steps: [
      {
        title: "Connect Search Console and Ahrefs",
        description: "Link your Google Search Console property and Ahrefs account. AirOps will pull impressions, clicks, CTR, and ranking data for your full content library.",
      },
      {
        title: "Run the content audit",
        description: "AirOps scans your content library and flags pages by issue type: ranking drops, high impression / low CTR, thin content, and outdated data.",
      },
      {
        title: "Review the prioritized rewrite queue",
        description: "Content is ranked by estimated traffic recovery opportunity. Review the root-cause diagnosis for each page before approving it for rewrite.",
      },
      {
        title: "Generate rewrites",
        description: "For approved pages, AirOps generates updated versions with stronger headlines, improved E-E-A-T signals, and current data — matched to your brand voice.",
      },
      {
        title: "Publish to your CMS",
        description: "Approve rewrites and push them directly to WordPress or Webflow. AirOps tracks which pages were updated for future performance comparison.",
      },
    ],
    keyBenefits: [
      "Systematic identification of underperforming content",
      "Root-cause diagnosis — not just rank tracking",
      "Prioritized rewrite queue with effort estimates",
      "Direct CMS publishing for approved changes",
    ],
    connectedTools: [
      { name: "Google Search Console", icon: "bar-chart" },
      { name: "Ahrefs", icon: "search" },
      { name: "WordPress", icon: "layout" },
      { name: "Webflow", icon: "file-text" },
      { name: "Notion", icon: "file-text" },
    ],
    relatedUseCaseIds: ["seo-meta-optimization", "seo-content-briefs", "programmatic-seo"],
  },
  {
    id: "content-optimization-conversion",
    title: "A/B test landing page copy with AI-generated variants",
    description:
      "Generate dozens of landing page copy variants grounded in your best performers, then run structured tests at scale.",
    category: "Content Optimization",
    videoUrl: "https://www.youtube.com/embed/placeholder-content-optimization-conversion",
    complexityScore: 3,
    popularity: 142,
    detailDescription:
      "AirOps MCP analyzes your top-converting landing pages and extracts the patterns — headline structures, value proposition framing, CTA language — that drive conversions. It then generates a full set of test variants for any page, tagged by hypothesis, and stages them in your testing platform. Post-test, it summarizes winners and updates your copy guidelines automatically.",
    steps: [
      {
        title: "Identify your reference pages",
        description: "Share your top 3–5 converting landing pages. AirOps analyzes the copy patterns — headline structure, value prop framing, CTA language — that correlate with conversion.",
      },
      {
        title: "Select the page to test",
        description: "Choose the landing page you want to optimize. AirOps identifies the elements with the highest variance from your top performers.",
      },
      {
        title: "Generate test variants",
        description: "AirOps produces a set of copy variants for each element, each tagged with the specific hypothesis it's testing (e.g., 'outcome-focused headline vs. feature-focused').",
      },
      {
        title: "Stage in your testing platform",
        description: "Export variants to Optimizely or VWO with structured test metadata already filled in — hypothesis, primary metric, and success threshold.",
      },
      {
        title: "Review results and update guidelines",
        description: "After the test completes, AirOps summarizes the winning patterns and appends them to your copy guidelines for future use.",
      },
    ],
    keyBenefits: [
      "Variants generated from proven conversion patterns",
      "Structured test hypotheses for every variant",
      "Pattern extraction from winning test results",
      "Continuous improvement loop baked into the workflow",
    ],
    connectedTools: [
      { name: "Optimizely", icon: "zap" },
      { name: "VWO", icon: "bar-chart" },
      { name: "HubSpot", icon: "users" },
      { name: "Webflow", icon: "file-text" },
    ],
    relatedUseCaseIds: ["marketing-campaign-copy", "seo-meta-optimization", "content-optimization-ctr"],
  },
  {
    id: "competitive-intel-monitoring",
    title: "Monitor competitors and surface strategic signals weekly",
    description:
      "Track product changes, pricing moves, job postings, and content strategies across your top competitors — automatically.",
    category: "Competitive Intelligence",
    videoUrl: "https://www.youtube.com/embed/placeholder-competitive-intel-monitoring",
    complexityScore: 2,
    popularity: 445,
    detailDescription:
      "AirOps MCP scrapes and synthesizes competitive data across multiple signals: product changelog pages, G2 and Capterra review trends, LinkedIn job postings, ad library changes, and new content published. Every week, a structured intelligence brief lands in Slack or Notion — categorized by signal type and sorted by strategic relevance. Your team gets the insight without the manual monitoring.",
    steps: [
      {
        title: "Define your competitor list",
        description: "Enter up to 10 competitor domains. AirOps will monitor their product pages, pricing, job postings, review profiles, and published content.",
      },
      {
        title: "Select your signal types",
        description: "Choose which signals to track: product changes, pricing updates, G2/Capterra review trends, LinkedIn hiring, ad library, and content publishing.",
      },
      {
        title: "Set your relevance filters",
        description: "Configure which signals trigger an immediate alert vs. rolling into the weekly brief. High-priority signals (pricing changes, major feature launches) can alert immediately.",
      },
      {
        title: "Review your first intelligence brief",
        description: "The first brief covers the last 30 days of activity. Review signal categorization and relevance scoring — adjust your filters if any signal type is too noisy.",
      },
      {
        title: "Activate weekly delivery",
        description: "Enable scheduled delivery to your Slack channel or Notion workspace. The brief arrives every Monday morning with the week's competitive highlights.",
      },
    ],
    keyBenefits: [
      "Weekly competitive brief delivered to Slack automatically",
      "Multi-signal monitoring across product, content, and hiring",
      "Strategic inference — not just raw data aggregation",
      "Configurable competitor list and signal types",
    ],
    connectedTools: [
      { name: "G2", icon: "zap" },
      { name: "LinkedIn", icon: "linkedin" },
      { name: "Ahrefs", icon: "search" },
      { name: "Slack", icon: "message-square" },
      { name: "Notion", icon: "file-text" },
    ],
    relatedUseCaseIds: ["seo-content-briefs", "marketing-campaign-copy", "analytics-revenue-attribution"],
  },
  {
    id: "competitive-intel-battlecards",
    title: "Generate and keep sales battlecards up to date",
    description:
      "Automatically refresh battlecards when competitors ship new features, change pricing, or shift messaging.",
    category: "Competitive Intelligence",
    videoUrl: "https://www.youtube.com/embed/placeholder-competitive-intel-battlecards",
    complexityScore: 3,
    popularity: 231,
    detailDescription:
      "AirOps MCP monitors competitor product pages, changelogs, and review sites continuously. When a meaningful change is detected — a new integration, a pricing tier added, a common customer complaint emerging in reviews — the relevant section of your battlecard is flagged and a draft update is generated. Sales reps always have current, accurate competitive talking points without your PMM team manually maintaining a spreadsheet.",
    steps: [
      {
        title: "Upload your existing battlecards",
        description: "Upload your current battlecards as PDFs or link from Notion. AirOps uses these as the template for updates and understands their structure.",
      },
      {
        title: "Connect competitor monitoring",
        description: "Link your competitor list from AirOps's competitive monitoring workflow, or set up a new set of competitors specifically for battlecard tracking.",
      },
      {
        title: "Define update triggers",
        description: "Set which competitor changes should trigger a battlecard update: new integrations, pricing changes, review theme shifts, or major feature announcements.",
      },
      {
        title: "Review draft updates",
        description: "When a trigger fires, AirOps drafts the specific battlecard section that needs updating, with a link to the source that triggered it.",
      },
      {
        title: "Publish to your sales enablement platform",
        description: "Approve updates and push directly to Highspot, Seismic, or your sales team's Notion workspace.",
      },
    ],
    keyBenefits: [
      "Battlecards that update automatically when competitors change",
      "Sourced updates with evidence for every claim",
      "Outdated section detection with draft replacements",
      "Delivered directly to your sales enablement platform",
    ],
    connectedTools: [
      { name: "Highspot", icon: "layers" },
      { name: "Seismic", icon: "book" },
      { name: "G2", icon: "zap" },
      { name: "Notion", icon: "file-text" },
      { name: "Slack", icon: "message-square" },
    ],
    relatedUseCaseIds: ["competitive-intel-monitoring", "sales-outreach-personalization", "marketing-campaign-copy"],
  },
  {
    id: "content-creation-longform",
    title: "Write research-backed long-form content at scale",
    description:
      "Produce thorough, well-researched blog posts, guides, and reports that are grounded in real sources and written in your voice.",
    category: "Content Creation",
    videoUrl: "https://www.youtube.com/embed/placeholder-content-creation-longform",
    complexityScore: 2,
    popularity: 498,
    detailDescription:
      "AirOps MCP combines live web research, your brand guidelines, and a content brief to produce long-form content that reads like it came from your best writer. The workflow queries Ahrefs for keyword context, Perplexity for research synthesis, and your internal knowledge base for company-specific claims. Output goes through a brand-voice pass before landing in your CMS or Google Docs draft — ready for a human editor rather than a ground-up rewrite.",
    steps: [
      {
        title: "Provide your content brief",
        description: "Paste your brief or link a Notion doc. Include the target keyword, audience, key arguments to make, and any internal sources the piece should reference.",
      },
      {
        title: "Run the research pass",
        description: "AirOps queries Ahrefs for keyword context and Perplexity for current research synthesis. You can review the research summary before writing begins.",
      },
      {
        title: "Connect your brand guidelines",
        description: "Link your brand guide or upload a writing style document. AirOps uses this to match your tone, vocabulary, and formatting preferences.",
      },
      {
        title: "Generate and review the draft",
        description: "AirOps produces a full draft with proper structure, subheadings, and citations. Review it in a side-by-side editor and make inline edits.",
      },
      {
        title: "Publish to your CMS",
        description: "Export to Google Docs for editing, or push directly to WordPress or Webflow. AirOps formats the output for your target CMS automatically.",
      },
    ],
    keyBenefits: [
      "Research-grounded content, not hallucinated claims",
      "Brand voice applied consistently at scale",
      "SEO-optimized structure built into the output",
      "CMS or Google Docs ready — minimal editing required",
    ],
    connectedTools: [
      { name: "Ahrefs", icon: "search" },
      { name: "Perplexity", icon: "zap" },
      { name: "Notion", icon: "file-text" },
      { name: "Google Docs", icon: "file" },
      { name: "WordPress", icon: "layout" },
    ],
    relatedUseCaseIds: ["seo-content-briefs", "content-repurposing", "content-optimization-ctr"],
  },
  {
    id: "content-creation-social",
    title: "Build a month of social content in an afternoon",
    description:
      "Generate a full content calendar — posts, captions, hooks, and hashtag sets — across LinkedIn, X, and Instagram from a single brief.",
    category: "Content Creation",
    videoUrl: "https://www.youtube.com/embed/placeholder-content-creation-social",
    complexityScore: 1,
    popularity: 298,
    detailDescription:
      "AirOps MCP takes your monthly content themes and generates a complete social calendar. For each post it writes platform-native copy (character limits, tone, and format matched to the platform), a hook variant for testing, a visual content brief for your design team, and the best hashtag clusters. The full calendar is delivered to Notion or your social scheduler — ready to review and schedule in one session.",
    steps: [
      {
        title: "Define your monthly themes",
        description: "List your content pillars and monthly focus areas. Paste any existing talking points, product announcements, or thought leadership angles you want to cover.",
      },
      {
        title: "Select your platforms and formats",
        description: "Choose LinkedIn, X, Instagram, or all three. AirOps generates platform-native copy for each — matched to character limits, tone, and native format.",
      },
      {
        title: "Connect your brand voice",
        description: "Link your brand guide or paste sample posts you love. AirOps matches your style — whether that's founder-voice, brand voice, or a specific team member's tone.",
      },
      {
        title: "Review the full calendar",
        description: "All 30 days of content are presented in a calendar view. Edit inline, swap posts between days, or regenerate individual posts without affecting the rest.",
      },
      {
        title: "Export to your scheduler",
        description: "Push the approved calendar directly to Buffer or Hootsuite, or export to Notion with suggested posting times already filled in.",
      },
    ],
    keyBenefits: [
      "Full month of content generated in under 30 minutes",
      "Platform-native format, tone, and length for every post",
      "Hook variants generated for A/B testing",
      "Delivered directly to Buffer, Hootsuite, or Notion",
    ],
    connectedTools: [
      { name: "Buffer", icon: "share-2" },
      { name: "Hootsuite", icon: "activity" },
      { name: "Notion", icon: "file-text" },
      { name: "Canva", icon: "pen-tool" },
    ],
    relatedUseCaseIds: ["content-repurposing", "marketing-campaign-copy", "content-creation-longform"],
  },
  {
    id: "brand-monitoring-mentions",
    title: "Monitor brand mentions and sentiment across the web",
    description:
      "Get a daily digest of every place your brand is mentioned — with sentiment scores, source ranking, and suggested responses.",
    category: "Brand Monitoring",
    videoUrl: "https://www.youtube.com/embed/placeholder-brand-monitoring-mentions",
    complexityScore: 2,
    popularity: 209,
    detailDescription:
      "AirOps MCP aggregates brand mentions from review sites, Reddit, X, LinkedIn, news publications, and industry forums. Each mention is scored for sentiment, reach, and urgency. A daily digest lands in Slack — sorted by priority — with draft responses for negative reviews and high-visibility mentions. Crisis signals trigger an immediate alert before they have time to compound.",
    steps: [
      {
        title: "Define your monitoring terms",
        description: "Set your brand name, product names, key executives, and any common misspellings or abbreviations you want to track.",
      },
      {
        title: "Select your channels",
        description: "Choose which channels to monitor: Reddit, X, G2, LinkedIn, news publications, and industry forums. Toggle each source on or off.",
      },
      {
        title: "Configure sentiment thresholds",
        description: "Set the sentiment score and engagement threshold that triggers an immediate Slack alert vs. rolling into the daily digest.",
      },
      {
        title: "Review your first digest",
        description: "The first run covers the last 7 days of mentions. Review the sentiment scoring and urgency classification — adjust thresholds if needed.",
      },
      {
        title: "Activate daily delivery",
        description: "Enable daily digest delivery to your Slack channel. Crisis signals will alert immediately, outside the normal digest schedule.",
      },
    ],
    keyBenefits: [
      "Real-time monitoring across 10+ channels",
      "Sentiment scoring with urgency prioritization",
      "Draft responses generated for high-priority mentions",
      "Crisis signal detection before issues escalate",
    ],
    connectedTools: [
      { name: "Slack", icon: "message-square" },
      { name: "G2", icon: "zap" },
      { name: "Twitter/X", icon: "share-2" },
      { name: "Reddit", icon: "message-circle" },
      { name: "Notion", icon: "file-text" },
    ],
    relatedUseCaseIds: ["competitive-intel-monitoring", "support-ticket-routing", "analytics-revenue-attribution"],
  },
  {
    id: "brand-monitoring-reviews",
    title: "Respond to reviews at scale without losing the human touch",
    description:
      "Draft personalized, on-brand responses to every G2, Capterra, and App Store review — in minutes, not hours.",
    category: "Brand Monitoring",
    videoUrl: "https://www.youtube.com/embed/placeholder-brand-monitoring-reviews",
    complexityScore: 1,
    popularity: 54,
    detailDescription:
      "AirOps MCP monitors your review profiles and generates a tailored response for every new review. Positive reviews get a warm, specific acknowledgment. Negative reviews get a professional, empathetic response that addresses the specific complaint — with a suggested resolution pulled from your playbook. All drafts go to a review queue where your team approves with one click, maintaining human oversight while eliminating the manual writing work.",
    steps: [
      {
        title: "Connect your review platforms",
        description: "Link G2, Capterra, Trustpilot, or App Store Connect. AirOps monitors each platform for new reviews and queues them for response.",
      },
      {
        title: "Upload your response playbook",
        description: "Share your existing response examples or guidelines. AirOps uses these to match your tone and learn how you handle common complaint types.",
      },
      {
        title: "Configure escalation rules",
        description: "Set which review types trigger an immediate Slack alert: reviews below a star threshold, reviews mentioning specific bug keywords, or reviews from named accounts.",
      },
      {
        title: "Review drafted responses",
        description: "All draft responses appear in a review queue. Approve with one click, edit inline, or request a different tone before posting.",
      },
      {
        title: "Post and track",
        description: "Approved responses are posted directly to the review platform. AirOps tracks response rate and average response time for your reporting.",
      },
    ],
    keyBenefits: [
      "100% review response rate without increasing headcount",
      "Personalized responses that reference the reviewer's specific points",
      "Consistent brand voice across every platform",
      "Negative review escalation with resolution suggestions",
    ],
    connectedTools: [
      { name: "G2", icon: "zap" },
      { name: "Capterra", icon: "clipboard" },
      { name: "App Store Connect", icon: "zap" },
      { name: "Trustpilot", icon: "zap" },
      { name: "Slack", icon: "message-square" },
    ],
    relatedUseCaseIds: ["brand-monitoring-mentions", "support-ticket-routing", "support-knowledge-base"],
  },
  {
    id: "workflow-automation-onboarding",
    title: "Automate personalized customer onboarding sequences",
    description:
      "Trigger the right onboarding steps for each customer based on their role, use case, and product activity — without manual intervention.",
    category: "Workflow Automation",
    videoUrl: "https://www.youtube.com/embed/placeholder-workflow-automation-onboarding",
    complexityScore: 4,
    popularity: 164,
    detailDescription:
      "AirOps MCP monitors product events and CRM data to build a dynamic onboarding journey. When a user signs up, the workflow enriches their profile, identifies their most likely use case, and triggers a personalized sequence — in-app messages via Intercom, onboarding emails via HubSpot, and a Slack alert to their CSM. As users complete key milestones, the sequence adapts. Stalled users trigger automated check-ins. No rule-based logic to maintain.",
    steps: [
      {
        title: "Connect your product event stream",
        description: "Link Segment or your product analytics tool. AirOps monitors signup events and key activation milestones to trigger the right sequence at the right time.",
      },
      {
        title: "Define your use case segments",
        description: "Map job titles, signup survey responses, and early product behavior to the use cases you serve. AirOps uses these to route users into the right onboarding track.",
      },
      {
        title: "Build your onboarding tracks",
        description: "Define a sequence for each major use case: the key milestones, the messages at each step, and the timing. AirOps generates the copy for each message.",
      },
      {
        title: "Configure stall detection",
        description: "Set the inactivity threshold that triggers a CSM alert or a re-engagement workflow. Define what 'stalled' looks like for each stage of onboarding.",
      },
      {
        title: "Monitor and optimize",
        description: "Review activation rates by track weekly. AirOps surfaces which steps have the highest drop-off so you can iterate on messaging or sequence timing.",
      },
    ],
    keyBenefits: [
      "Onboarding personalized to role and use case from day one",
      "Adaptive sequences that respond to real product behavior",
      "CSM alerts for accounts that need human intervention",
      "40% improvement in trial-to-paid conversion reported by customers",
    ],
    connectedTools: [
      { name: "Intercom", icon: "message-circle" },
      { name: "HubSpot", icon: "users" },
      { name: "Segment", icon: "layers" },
      { name: "Salesforce", icon: "cloud" },
      { name: "Slack", icon: "message-square" },
    ],
    relatedUseCaseIds: ["analytics-cohort-analysis", "sales-lead-enrichment", "support-ticket-routing"],
  },
  {
    id: "workflow-automation-ops",
    title: "Connect your entire ops stack with AI-powered automation",
    description:
      "Replace manual handoffs and copy-paste workflows across your tools with intelligent automations that understand context.",
    category: "Workflow Automation",
    videoUrl: "https://www.youtube.com/embed/placeholder-workflow-automation-ops",
    complexityScore: 5,
    popularity: 412,
    detailDescription:
      "AirOps MCP acts as an intelligent middleware layer between your tools. Instead of rigid if-then Zapier rules, you define workflows in plain language and the MCP server handles routing, enrichment, summarization, and action across your entire stack. Common automations include: meeting notes → CRM update → follow-up email drafted; support ticket → Jira bug filed → customer notified; deal closed → onboarding triggered → CSM assigned.",
    steps: [
      {
        title: "Map your current manual handoffs",
        description: "Identify the 3–5 copy-paste or manual handoff tasks your team does most often. These are your first automation candidates.",
      },
      {
        title: "Describe the workflow in plain language",
        description: "Write out what should happen in plain English: 'When X happens in tool A, do Y in tool B and notify Z in Slack.' AirOps turns this into a working workflow.",
      },
      {
        title: "Connect your tools",
        description: "Authorize the tools involved in each workflow — Salesforce, Jira, Slack, Notion, Linear. AirOps handles authentication and API calls.",
      },
      {
        title: "Test with real data",
        description: "Run the workflow on a live trigger event and review the output. Adjust the plain-language description to refine behavior before activating.",
      },
      {
        title: "Activate and monitor",
        description: "Enable the workflow and monitor the run log for the first week. Expand to additional handoffs once the first automation is running smoothly.",
      },
    ],
    keyBenefits: [
      "Context-aware automation — not brittle if/then rules",
      "Connects any tool in your stack via MCP",
      "Natural language workflow definition — no code needed",
      "Handles edge cases that rule-based tools break on",
    ],
    connectedTools: [
      { name: "Salesforce", icon: "cloud" },
      { name: "Jira", icon: "clipboard" },
      { name: "Slack", icon: "message-square" },
      { name: "Linear", icon: "clipboard" },
      { name: "Notion", icon: "file-text" },
    ],
    relatedUseCaseIds: ["engineering-incident-response", "support-ticket-routing", "workflow-automation-onboarding"],
  },
];
