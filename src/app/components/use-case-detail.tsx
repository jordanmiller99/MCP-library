import { useParams, Link } from "react-router";
import { useCases } from "../data/use-cases";
import { useVotes } from "../hooks/useVotes";
import {
  Search, BarChart, FileText, File, Bug, Layout, Users, Database,
  Linkedin, Cloud, Send, GitBranch, Clipboard, Book, MessageSquare,
  Activity, Bell, Megaphone, Mail, PenTool, Share2, Headphones,
  MessageCircle, TrendingUp, PieChart, ArrowLeft, CheckCircle,
  Layers, Zap,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  search:           <Search size={15} />,
  "bar-chart":      <BarChart size={15} />,
  "file-text":      <FileText size={15} />,
  file:             <File size={15} />,
  bug:              <Bug size={15} />,
  layout:           <Layout size={15} />,
  users:            <Users size={15} />,
  database:         <Database size={15} />,
  linkedin:         <Linkedin size={15} />,
  cloud:            <Cloud size={15} />,
  send:             <Send size={15} />,
  "git-branch":     <GitBranch size={15} />,
  clipboard:        <Clipboard size={15} />,
  book:             <Book size={15} />,
  "message-square": <MessageSquare size={15} />,
  activity:         <Activity size={15} />,
  bell:             <Bell size={15} />,
  megaphone:        <Megaphone size={15} />,
  mail:             <Mail size={15} />,
  "pen-tool":       <PenTool size={15} />,
  "share-2":        <Share2 size={15} />,
  headphones:       <Headphones size={15} />,
  "message-circle": <MessageCircle size={15} />,
  "trending-up":    <TrendingUp size={15} />,
  "pie-chart":      <PieChart size={15} />,
  layers:           <Layers size={15} />,
  zap:              <Zap size={15} />,
};

const categoryStyles: Record<string, { bg: string; text: string; border: string }> = {
  "SEO & Content":            { bg: "#FEE7FD", text: "#852952", border: "#D48ED3" },
  "Sales & CRM":              { bg: "#EEF9F3", text: "#002910", border: "#057A28" },
  Engineering:                { bg: "#F0FF96", text: "#3D4700", border: "#8A9A00" },
  Marketing:                  { bg: "#FEE7FD", text: "#852952", border: "#D48ED3" },
  Support:                    { bg: "#CCFFE0", text: "#002910", border: "#057A28" },
  "Data & Analytics":         { bg: "#EEF9F3", text: "#002910", border: "#057A28" },
  "Analytics & Reporting":    { bg: "#E8F0FF", text: "#1A2A7A", border: "#4A6CC4" },
  "Content Optimization":     { bg: "#FFF3E8", text: "#7A3D00", border: "#D4783A" },
  "Competitive Intelligence": { bg: "#F2EEFF", text: "#4A1A8A", border: "#8B5CE0" },
  "Content Creation":         { bg: "#FFFAE8", text: "#5A5000", border: "#A89A00" },
  "Brand Monitoring":         { bg: "#E8FFF8", text: "#005A48", border: "#28A890" },
  "Workflow Automation":      { bg: "#EEF4FF", text: "#1A2A7A", border: "#4A5CC4" },
};

// ─── Complexity stars ─────────────────────────────────────────────────────────
function ComplexityStars({ score }: { score: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "rgba(0,41,16,0.45)",
        }}
      >
        Complexity
      </span>
      <div style={{ display: "flex", gap: 3 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              backgroundColor: i <= score ? "#057A28" : "rgba(0,41,16,0.1)",
              transition: "background-color 0.15s ease",
            }}
          />
        ))}
      </div>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: "rgba(0,41,16,0.35)",
          letterSpacing: "0.04em",
        }}
      >
        {["", "Beginner", "Easy", "Moderate", "Advanced", "Expert"][score]}
      </span>
    </div>
  );
}

// ─── Upvote button (detail page) ──────────────────────────────────────────────
function DetailUpvote({ useCaseId, popularity }: { useCaseId: string; popularity: number }) {
  const { count, hasVoted, vote } = useVotes(useCaseId, popularity);

  return (
    <button
      onClick={vote}
      disabled={hasVoted}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 20px",
        borderRadius: 99,
        border: hasVoted ? "1.5px solid #057A28" : "1.5px solid rgba(0,41,16,0.18)",
        backgroundColor: hasVoted ? "#CCFFE0" : "white",
        color: hasVoted ? "#057A28" : "#002910",
        cursor: hasVoted ? "default" : "pointer",
        fontFamily: "'Inter', sans-serif",
        fontSize: 14,
        fontWeight: 600,
        transition: "all 0.2s ease",
        boxShadow: hasVoted ? "none" : "0 2px 8px rgba(0,41,16,0.07)",
      }}
    >
      <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
        <path d="M5 1L9.33 8.5H0.67L5 1Z" fill={hasVoted ? "#057A28" : "#002910"} />
      </svg>
      {hasVoted ? "Upvoted" : "Upvote"}
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          fontWeight: 700,
          opacity: 0.7,
        }}
      >
        {count.toLocaleString()}
      </span>
    </button>
  );
}

export function UseCaseDetail() {
  const { id } = useParams();
  const useCase = useCases.find((uc) => uc.id === id);

  if (!useCase) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1
          className="mb-4 text-[#002910]"
          style={{ fontFamily: "'Saans', 'DM Serif Display', serif", fontSize: "32px" }}
        >
          Use case not found
        </h1>
        <Link
          to="/"
          className="text-[#057A28] no-underline transition-colors hover:text-[#002910]"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 500 }}
        >
          ← Back to library
        </Link>
      </div>
    );
  }

  const styles = categoryStyles[useCase.category] || categoryStyles["Engineering"];
  const relatedUseCases = useCases.filter((uc) => useCase.relatedUseCaseIds.includes(uc.id));
  const attr = useCase.attribution;

  return (
    <div className="px-6 pt-36 pb-32">
      <div className="mx-auto max-w-5xl">

        {/* Back */}
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-[#002910]/50 no-underline transition-colors hover:text-[#002910]"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
        >
          <ArrowLeft size={15} />
          Back to library
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className="inline-block rounded-[5px] px-3 py-1"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                backgroundColor: styles.bg,
                color: styles.text,
                border: `1px solid ${styles.border}`,
              }}
            >
              {useCase.category}
            </span>
            <ComplexityStars score={useCase.complexityScore} />
          </div>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1
              className="text-[#002910]"
              style={{
                fontFamily: "'Saans', 'DM Serif Display', serif",
                fontWeight: 400,
                fontSize: "clamp(30px, 4.5vw, 52px)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                maxWidth: "720px",
              }}
            >
              {useCase.title}
            </h1>
            <DetailUpvote useCaseId={useCase.id} popularity={useCase.popularity} />
          </div>
        </div>

        {/* Video embed */}
        <div
          className="mb-10 w-full overflow-hidden rounded-2xl"
          style={{ border: "1.5px solid rgba(0,41,16,0.1)" }}
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src={useCase.videoUrl + "?rel=0&modestbranding=1"}
              title={`${useCase.title} — walkthrough`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
            />
          </div>
        </div>

        {/* Customer attribution */}
        {attr && (
          <div
            className="mb-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl p-5"
            style={{ backgroundColor: "white", border: "1.5px solid rgba(0,41,16,0.1)" }}
          >
            <div className="flex items-center gap-4">
              {attr.headshot ? (
                <img
                  src={attr.headshot}
                  alt={attr.name}
                  style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: `2px solid ${styles.border}` }}
                />
              ) : (
                <div
                  style={{
                    width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
                    backgroundColor: styles.bg, border: `2px solid ${styles.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14,
                    color: styles.text,
                  }}
                >
                  {attr.initials}
                </div>
              )}
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 15, color: "#002910" }}>
                    {attr.name}
                  </p>
                  {attr.linkedInUrl && (
                    <a
                      href={attr.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View LinkedIn profile"
                      style={{ color: "#0077B5", display: "flex", alignItems: "center" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
                <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 13, color: "rgba(0,41,16,0.55)" }}>
                  {attr.title}
                  {attr.companyUrl ? (
                    <> at <a href={attr.companyUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#057A28", fontWeight: 600, textDecoration: "none" }}>{attr.company}</a></>
                  ) : (
                    <> at {attr.company}</>
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {/* Company logo */}
              <div style={{ height: 32, display: "flex", alignItems: "center", backgroundColor: "#F8FFFB", borderRadius: 8, padding: "4px 10px", border: "1px solid rgba(0,41,16,0.07)" }}>
                <img
                  src={`https://cdn.brandfetch.io/${attr.domain}/w/160/h/40/logo`}
                  alt={attr.company}
                  style={{ height: 20, width: "auto", objectFit: "contain", maxWidth: 100 }}
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const span = document.createElement("span");
                    span.textContent = attr.company;
                    span.style.cssText = "font-family:'Inter',sans-serif;font-size:12px;font-weight:700;color:#002910;";
                    el.parentNode?.appendChild(span);
                  }}
                />
              </div>

              {/* Read full story */}
              {attr.storyUrl && (
                <a
                  href={attr.storyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#057A28",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    borderBottom: "1.5px solid #CCFFE0",
                    paddingBottom: 1,
                  }}
                >
                  Read their full story
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#057A28"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          {/* ── Main content ───────────────────────────────── */}
          <div>
            {/* Description */}
            <p
              className="mb-10 text-[#002910]/75"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", lineHeight: 1.85 }}
            >
              {useCase.detailDescription}
            </p>

            {/* Step-by-step walkthrough */}
            <section className="mb-10">
              <h2
                className="mb-5 text-[#002910]"
                style={{
                  fontFamily: "'Saans', 'DM Serif Display', serif",
                  fontWeight: 400,
                  fontSize: "22px",
                  letterSpacing: "-0.015em",
                }}
              >
                How to set it up
              </h2>
              <div className="flex flex-col gap-3">
                {useCase.steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-xl p-5"
                    style={{ backgroundColor: "white", border: "1.5px solid rgba(0,41,16,0.08)" }}
                  >
                    {/* Step number */}
                    <div
                      style={{
                        flexShrink: 0,
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        backgroundColor: styles.bg,
                        border: `1.5px solid ${styles.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        fontWeight: 700,
                        color: styles.text,
                        marginTop: 1,
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p
                        className="text-[#002910]"
                        style={{ margin: "0 0 4px", fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 600, lineHeight: 1.4 }}
                      >
                        {step.title}
                      </p>
                      <p
                        className="text-[#002910]/60"
                        style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: "13.5px", lineHeight: 1.65 }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key benefits */}
            <section className="mb-10">
              <h2
                className="mb-5 text-[#002910]"
                style={{
                  fontFamily: "'Saans', 'DM Serif Display', serif",
                  fontWeight: 400,
                  fontSize: "22px",
                  letterSpacing: "-0.015em",
                }}
              >
                Key benefits
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {useCase.keyBenefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl p-4"
                    style={{ backgroundColor: "white", border: "1.5px solid rgba(0,41,16,0.08)" }}
                  >
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#057A28" }} />
                    <p
                      className="text-[#002910]"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.55 }}
                    >
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ── Sidebar ─────────────────────────────────────── */}
          <div>
            <div className="sticky top-28 flex flex-col gap-5">
              {/* Connected tools */}
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: "white", border: "1.5px solid rgba(0,41,16,0.1)" }}
              >
                <h3
                  className="mb-4 text-[#002910]"
                  style={{ fontFamily: "'Saans', 'DM Serif Display', serif", fontWeight: 400, fontSize: "17px" }}
                >
                  Connected tools
                </h3>
                <div className="flex flex-col gap-2">
                  {useCase.connectedTools.map((tool, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5"
                      style={{ backgroundColor: "#F8FFFB", border: "1px solid rgba(0,41,16,0.07)" }}
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                        style={{ backgroundColor: "#CCFFE0", color: "#057A28" }}
                      >
                        {iconMap[tool.icon] || <FileText size={15} />}
                      </span>
                      <span
                        className="text-[#002910]"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "13.5px", fontWeight: 500 }}
                      >
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary CTA */}
              <div className="rounded-xl p-5" style={{ backgroundColor: "#002910" }}>
                <p
                  className="mb-1 text-[#CCFFE0]"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.07em", textTransform: "uppercase", fontWeight: 500 }}
                >
                  Ready to build?
                </p>
                <p
                  className="mb-4 text-white"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.5 }}
                >
                  Start this workflow in AirOps — no code required.
                </p>
                <a
                  href="https://app.airops.com/sign-up"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#00FF64] py-3 text-[#002910] no-underline transition-all hover:brightness-95"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 700 }}
                >
                  Try this use case →
                </a>

                {/* Sub-CTA */}
                {attr?.storyUrl && (
                  <a
                    href={attr.storyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex w-full items-center justify-center"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    Read their full story →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Related use cases ───────────────────────────── */}
        {relatedUseCases.length > 0 && (
          <div className="mt-20">
            <div
              className="mb-8 flex items-center gap-3"
              style={{ borderBottom: "1px solid rgba(0,41,16,0.1)", paddingBottom: "16px" }}
            >
              <h2
                className="text-[#002910]"
                style={{ fontFamily: "'Saans', 'DM Serif Display', serif", fontWeight: 400, fontSize: "26px", letterSpacing: "-0.015em" }}
              >
                Related use cases
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {relatedUseCases.map((uc) => {
                const relStyles = categoryStyles[uc.category] || categoryStyles["Engineering"];
                return (
                  <Link
                    key={uc.id}
                    to={`/use-case/${uc.id}`}
                    className="group flex flex-col overflow-hidden bg-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,41,16,0.08)]"
                    style={{ border: "1.5px solid rgba(0,41,16,0.12)", borderRadius: "10px" }}
                  >
                    <div
                      className="aspect-[16/7] w-full transition-all duration-300 group-hover:brightness-95"
                      style={{ backgroundColor: relStyles.bg }}
                    />
                    <div className="p-4" style={{ borderTop: "1.5px solid rgba(0,41,16,0.1)" }}>
                      <span
                        className="mb-2 inline-block rounded-[4px] px-2.5 py-0.5"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontWeight: 500,
                          fontSize: "10px",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          backgroundColor: relStyles.bg,
                          color: relStyles.text,
                          border: `1px solid ${relStyles.border}`,
                        }}
                      >
                        {uc.category}
                      </span>
                      <h3
                        className="text-[#002910] transition-colors duration-200 group-hover:text-[#057A28]"
                        style={{ fontFamily: "'Saans', 'DM Serif Display', serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.3 }}
                      >
                        {uc.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
