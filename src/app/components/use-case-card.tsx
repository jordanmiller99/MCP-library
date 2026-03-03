import { Link } from "react-router";
import type { UseCase } from "../data/use-cases";
import { useVotes } from "../hooks/useVotes";

interface UseCaseCardProps {
  useCase: UseCase;
}

const categoryStyles: Record<
  string,
  { bg: string; text: string; border: string; illus: string }
> = {
  "SEO & Content":    { bg: "#FEE7FD", text: "#852952", border: "#D48ED3", illus: "#E8A8E6" },
  "Sales & CRM":      { bg: "#EEF9F3", text: "#002910", border: "#057A28", illus: "#A8D9B8" },
  "Engineering":      { bg: "#F0FF96", text: "#3D4700", border: "#8A9A00", illus: "#C8D640" },
  "Marketing":        { bg: "#FEE7FD", text: "#852952", border: "#D48ED3", illus: "#E8A8E6" },
  "Support":          { bg: "#CCFFE0", text: "#002910", border: "#057A28", illus: "#6FE0A0" },
  "Data & Analytics": { bg: "#EEF9F3", text: "#002910", border: "#057A28", illus: "#A8D9B8" },
  "Analytics & Reporting":    { bg: "#E8F0FF", text: "#1A2A7A", border: "#4A6CC4", illus: "#8AAEE8" },
  "Content Optimization":     { bg: "#FFF3E8", text: "#7A3D00", border: "#D4783A", illus: "#F0A868" },
  "Competitive Intelligence": { bg: "#F2EEFF", text: "#4A1A8A", border: "#8B5CE0", illus: "#B898E8" },
  "Content Creation":         { bg: "#FFFAE8", text: "#5A5000", border: "#A89A00", illus: "#E8D840" },
  "Brand Monitoring":         { bg: "#E8FFF8", text: "#005A48", border: "#28A890", illus: "#68D8C0" },
  "Workflow Automation":      { bg: "#EEF4FF", text: "#1A2A7A", border: "#4A5CC4", illus: "#8898E8" },
};

/* ─── Category-specific SVG illustrations ─── */
function SEOIllustration({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect x="40" y="90" width="18" height="50" rx="3" fill={accent} opacity="0.7" />
      <rect x="68" y="70" width="18" height="70" rx="3" fill={accent} opacity="0.85" />
      <rect x="96" y="50" width="18" height="90" rx="3" fill={accent} />
      <rect x="124" y="75" width="18" height="65" rx="3" fill={accent} opacity="0.75" />
      <rect x="152" y="95" width="18" height="45" rx="3" fill={accent} opacity="0.55" />
      <polyline points="49,90 77,70 105,50 133,55 161,70" stroke="#002910" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="4 3" fill="none" />
      <circle cx="240" cy="72" r="28" stroke="#002910" strokeWidth="2" strokeOpacity="0.18" fill="white" fillOpacity="0.4" />
      <circle cx="240" cy="72" r="18" stroke="#002910" strokeWidth="1.5" strokeOpacity="0.18" fill="none" />
      <line x1="253" y1="86" x2="265" y2="98" stroke="#002910" strokeWidth="2.5" strokeOpacity="0.2" strokeLinecap="round" />
      <rect x="212" y="112" width="56" height="4" rx="2" fill="#002910" fillOpacity="0.1" />
      <rect x="218" y="120" width="44" height="3" rx="1.5" fill="#002910" fillOpacity="0.07" />
    </svg>
  );
}

function SalesIllustration({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect x="30" y="50" width="56" height="60" rx="6" fill={accent} opacity="0.9" />
      <rect x="104" y="62" width="44" height="48" rx="6" fill={accent} opacity="0.75" />
      <rect x="166" y="72" width="34" height="38" rx="6" fill={accent} opacity="0.6" />
      <rect x="218" y="80" width="26" height="30" rx="6" fill={accent} opacity="0.45" />
      <path d="M 86 80 L 104 80" stroke="#002910" strokeWidth="1.5" strokeOpacity="0.2" />
      <path d="M 148 86 L 166 86" stroke="#002910" strokeWidth="1.5" strokeOpacity="0.2" />
      <path d="M 200 90 L 218 90" stroke="#002910" strokeWidth="1.5" strokeOpacity="0.2" />
      <rect x="38" y="104" width="40" height="3" rx="1.5" fill="#002910" fillOpacity="0.15" />
      <rect x="110" y="104" width="30" height="3" rx="1.5" fill="#002910" fillOpacity="0.12" />
      <rect x="170" y="104" width="22" height="3" rx="1.5" fill="#002910" fillOpacity="0.10" />
      <circle cx="58" cy="68" r="8" fill="white" fillOpacity="0.5" />
      <circle cx="126" cy="74" r="6" fill="white" fillOpacity="0.5" />
      <circle cx="183" cy="80" r="5" fill="white" fillOpacity="0.5" />
      <circle cx="270" cy="55" r="10" fill={accent} opacity="0.5" />
      <circle cx="290" cy="75" r="6" fill={accent} opacity="0.35" />
      <circle cx="270" cy="92" r="8" fill={accent} opacity="0.4" />
    </svg>
  );
}

function EngineeringIllustration({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect x="30" y="35" width="160" height="100" rx="8" fill="white" fillOpacity="0.45" stroke="#002910" strokeWidth="1.2" strokeOpacity="0.12" />
      <circle cx="48" cy="52" r="5" fill="#FF6B6B" fillOpacity="0.5" />
      <circle cx="63" cy="52" r="5" fill="#FFD93D" fillOpacity="0.5" />
      <circle cx="78" cy="52" r="5" fill="#6BCB77" fillOpacity="0.5" />
      <rect x="44" y="68" width="20" height="3.5" rx="1.5" fill={accent} opacity="0.8" />
      <rect x="70" y="68" width="50" height="3.5" rx="1.5" fill="#002910" fillOpacity="0.15" />
      <rect x="44" y="78" width="12" height="3.5" rx="1.5" fill="#002910" fillOpacity="0.1" />
      <rect x="62" y="78" width="64" height="3.5" rx="1.5" fill={accent} opacity="0.6" />
      <rect x="44" y="88" width="36" height="3.5" rx="1.5" fill="#002910" fillOpacity="0.12" />
      <rect x="86" y="88" width="40" height="3.5" rx="1.5" fill={accent} opacity="0.45" />
      <rect x="44" y="98" width="80" height="3.5" rx="1.5" fill="#002910" fillOpacity="0.08" />
      <rect x="44" y="108" width="24" height="3.5" rx="1.5" fill={accent} opacity="0.7" />
      <circle cx="240" cy="50" r="7" fill={accent} opacity="0.85" stroke="#3D4700" strokeWidth="1.2" strokeOpacity="0.2" />
      <circle cx="240" cy="90" r="7" fill={accent} opacity="0.7" stroke="#3D4700" strokeWidth="1.2" strokeOpacity="0.2" />
      <circle cx="275" cy="70" r="7" fill={accent} opacity="0.55" stroke="#3D4700" strokeWidth="1.2" strokeOpacity="0.2" />
      <line x1="240" y1="57" x2="240" y2="83" stroke="#3D4700" strokeWidth="1.5" strokeOpacity="0.2" />
      <path d="M 240 65 Q 258 65 275 70" stroke="#3D4700" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
      <path d="M 240 75 Q 258 75 275 70" stroke="#3D4700" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
    </svg>
  );
}

function MarketingIllustration({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <path d="M 100 60 L 145 45 L 145 115 L 100 100 Z" fill={accent} opacity="0.9" />
      <rect x="70" y="68" width="32" height="28" rx="4" fill={accent} opacity="0.6" />
      <path d="M 80 96 L 74 118 L 92 118 L 98 96" fill={accent} opacity="0.5" />
      <path d="M 152 65 Q 165 80 152 95" stroke="#002910" strokeWidth="2" strokeOpacity="0.18" fill="none" strokeLinecap="round" />
      <path d="M 160 58 Q 180 80 160 102" stroke="#002910" strokeWidth="1.5" strokeOpacity="0.12" fill="none" strokeLinecap="round" />
      <path d="M 168 52 Q 194 80 168 108" stroke="#002910" strokeWidth="1.2" strokeOpacity="0.09" fill="none" strokeLinecap="round" />
      <rect x="200" y="44" width="80" height="18" rx="9" fill={accent} opacity="0.5" />
      <rect x="200" y="71" width="68" height="18" rx="9" fill={accent} opacity="0.4" />
      <rect x="200" y="98" width="76" height="18" rx="9" fill={accent} opacity="0.5" />
      <rect x="207" y="48" width="36" height="10" rx="4" fill="white" fillOpacity="0.4" />
      <rect x="207" y="75" width="28" height="10" rx="4" fill="white" fillOpacity="0.4" />
      <rect x="207" y="102" width="32" height="10" rx="4" fill="white" fillOpacity="0.4" />
    </svg>
  );
}

function SupportIllustration({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect x="30" y="40" width="130" height="48" rx="12" fill={accent} opacity="0.85" />
      <path d="M 50 88 L 44 104 L 70 88 Z" fill={accent} opacity="0.85" />
      <rect x="160" y="75" width="110" height="42" rx="12" fill={accent} opacity="0.6" />
      <path d="M 255 117 L 262 130 L 240 117 Z" fill={accent} opacity="0.6" />
      <rect x="46" y="54" width="60" height="4" rx="2" fill="#002910" fillOpacity="0.2" />
      <rect x="46" y="64" width="88" height="3" rx="1.5" fill="#002910" fillOpacity="0.13" />
      <rect x="46" y="72" width="44" height="3" rx="1.5" fill="#002910" fillOpacity="0.1" />
      <rect x="172" y="88" width="72" height="4" rx="2" fill="#002910" fillOpacity="0.18" />
      <rect x="172" y="97" width="56" height="3" rx="1.5" fill="#002910" fillOpacity="0.12" />
      <circle cx="270" cy="44" r="12" fill={accent} opacity="0.7" />
      <path d="M 264 44 L 269 49 L 277 39" stroke="#002910" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" fill="none" />
      <circle cx="40" cy="130" r="8" fill={accent} opacity="0.45" />
      <path d="M 36 130 L 39 133 L 45 127" stroke="#002910" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" fill="none" />
    </svg>
  );
}

function DataIllustration({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <path d="M 30 120 L 60 100 L 90 108 L 120 72 L 150 60 L 180 68 L 210 44 L 240 50 L 270 38 L 290 42 L 290 130 L 30 130 Z" fill={accent} opacity="0.35" />
      <path d="M 30 120 L 60 100 L 90 108 L 120 72 L 150 60 L 180 68 L 210 44 L 240 50 L 270 38 L 290 42" stroke="#002910" strokeWidth="2" strokeOpacity="0.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {[[60,100],[120,72],[150,60],[210,44],[270,38]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="white" stroke="#002910" strokeWidth="1.5" strokeOpacity="0.3" />
      ))}
      <rect x="190" y="24" width="68" height="28" rx="6" fill="white" fillOpacity="0.7" stroke="#002910" strokeWidth="1" strokeOpacity="0.12" />
      <rect x="198" y="32" width="32" height="3.5" rx="1.5" fill={accent} opacity="0.8" />
      <rect x="198" y="39" width="44" height="3" rx="1.5" fill="#002910" fillOpacity="0.12" />
      <line x1="30" y1="40" x2="295" y2="40" stroke="#002910" strokeWidth="0.8" strokeOpacity="0.07" strokeDasharray="4 4" />
      <line x1="30" y1="70" x2="295" y2="70" stroke="#002910" strokeWidth="0.8" strokeOpacity="0.07" strokeDasharray="4 4" />
      <line x1="30" y1="100" x2="295" y2="100" stroke="#002910" strokeWidth="0.8" strokeOpacity="0.07" strokeDasharray="4 4" />
    </svg>
  );
}

function CardIllustration({ category, accent }: { category: string; accent: string }) {
  switch (category) {
    case "SEO & Content":    return <SEOIllustration accent={accent} />;
    case "Sales & CRM":      return <SalesIllustration accent={accent} />;
    case "Engineering":      return <EngineeringIllustration accent={accent} />;
    case "Marketing":        return <MarketingIllustration accent={accent} />;
    case "Support":          return <SupportIllustration accent={accent} />;
    case "Data & Analytics": return <DataIllustration accent={accent} />;
    default:                 return <DataIllustration accent={accent} />;
  }
}

// ─── Upvote button ─────────────────────────────────────────────────────────────
function UpvoteButton({ useCaseId, popularity }: { useCaseId: string; popularity: number }) {
  const { count, hasVoted, vote } = useVotes(useCaseId, popularity);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        vote();
      }}
      title={hasVoted ? "You've already upvoted this" : "Upvote this workflow"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "5px 10px",
        borderRadius: 99,
        border: hasVoted ? "1.5px solid #057A28" : "1.5px solid rgba(0,41,16,0.15)",
        backgroundColor: hasVoted ? "#CCFFE0" : "white",
        color: hasVoted ? "#057A28" : "rgba(0,41,16,0.45)",
        cursor: hasVoted ? "default" : "pointer",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.02em",
        transition: "all 0.2s ease",
        flexShrink: 0,
      }}
    >
      {/* Triangle / upvote icon */}
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <path d="M5 1L9.33 8.5H0.67L5 1Z" fill={hasVoted ? "#057A28" : "rgba(0,41,16,0.4)"} />
      </svg>
      {count.toLocaleString()}
    </button>
  );
}

export function UseCaseCard({ useCase }: UseCaseCardProps) {
  const styles = categoryStyles[useCase.category] || categoryStyles["Engineering"];

  return (
    <Link
      to={`/use-case/${useCase.id}`}
      className="group flex flex-col overflow-hidden bg-white no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,41,16,0.1)]"
      style={{ border: "1.5px solid rgba(0,41,16,0.15)", borderRadius: "12px" }}
    >
      {/* Illustration area */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: styles.bg, height: "168px" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <CardIllustration category={useCase.category} accent={styles.illus} />
        </div>
      </div>

      {/* Card body */}
      <div
        className="flex flex-1 flex-col p-5"
        style={{ borderTop: "1.5px solid rgba(0,41,16,0.1)" }}
      >
        <div className="mb-3 flex items-center justify-between gap-2">
          <span
            className="inline-block rounded-[5px] px-2.5 py-1"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
              fontSize: "10px",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              backgroundColor: styles.bg,
              color: styles.text,
              border: `1px solid ${styles.border}`,
            }}
          >
            {useCase.category}
          </span>
          <UpvoteButton useCaseId={useCase.id} popularity={useCase.popularity} />
        </div>

        <h3
          className="text-[#002910] transition-colors duration-200 group-hover:text-[#057A28]"
          style={{
            fontFamily: "'Saans', 'DM Serif Display', serif",
            fontWeight: 400,
            fontSize: "19px",
            lineHeight: 1.25,
          }}
        >
          {useCase.title}
        </h3>

        <p
          className="mt-2 flex-1 text-[#002910]/65"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13.5px",
            lineHeight: 1.65,
          }}
        >
          {useCase.description}
        </p>

        <div
          className="mt-5 flex items-center gap-1.5 text-[#002910] transition-all duration-200 group-hover:gap-2.5"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "13px",
          }}
        >
          Explore use case
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#002910" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
