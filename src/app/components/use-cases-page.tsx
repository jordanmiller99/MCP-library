import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { useCases, categories, type UseCase } from "../data/use-cases";
import { UseCaseCard } from "./use-case-card";
import { useVotes } from "../hooks/useVotes";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── Category palette ─────────────────────────────────────────────────────────
const palette: Record<string, { bg: string; accent: string; text: string; border: string }> = {
  "SEO & Content":           { bg: "#FEE7FD", accent: "#E8A8E6", text: "#852952",  border: "#D48ED3" },
  "Sales & CRM":             { bg: "#CCFFE0", accent: "#6FE0A0", text: "#002910",  border: "#057A28" },
  "Engineering":             { bg: "#F0FF96", accent: "#C8D640", text: "#3D4700",  border: "#8A9A00" },
  "Marketing":               { bg: "#FEE7FD", accent: "#E8A8E6", text: "#852952",  border: "#D48ED3" },
  "Support":                 { bg: "#CCFFE0", accent: "#6FE0A0", text: "#002910",  border: "#057A28" },
  "Data & Analytics":        { bg: "#EEF9F3", accent: "#A8D9B8", text: "#002910",  border: "#057A28" },
  "Analytics & Reporting":   { bg: "#E8F0FF", accent: "#8AAEE8", text: "#1A2A7A",  border: "#4A6CC4" },
  "Content Optimization":    { bg: "#FFF3E8", accent: "#F0A868", text: "#7A3D00",  border: "#D4783A" },
  "Competitive Intelligence":{ bg: "#F2EEFF", accent: "#B898E8", text: "#4A1A8A",  border: "#8B5CE0" },
  "Content Creation":        { bg: "#FFFAE8", accent: "#E8D840", text: "#5A5000",  border: "#A89A00" },
  "Brand Monitoring":        { bg: "#E8FFF8", accent: "#68D8C0", text: "#005A48",  border: "#28A890" },
  "Workflow Automation":     { bg: "#EEF4FF", accent: "#8898E8", text: "#1A2A7A",  border: "#4A5CC4" },
};

// ─── Inline SVG illustrations ─────────────────────────────────────────────────
function SEOIllusSVG({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect x="40" y="90" width="18" height="50" rx="3" fill={accent} opacity="0.7"/>
      <rect x="68" y="70" width="18" height="70" rx="3" fill={accent} opacity="0.85"/>
      <rect x="96" y="50" width="18" height="90" rx="3" fill={accent}/>
      <rect x="124" y="75" width="18" height="65" rx="3" fill={accent} opacity="0.75"/>
      <rect x="152" y="95" width="18" height="45" rx="3" fill={accent} opacity="0.55"/>
      <polyline points="49,90 77,70 105,50 133,55 161,70" stroke="#002910" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="4 3" fill="none"/>
      <circle cx="240" cy="72" r="28" stroke="#002910" strokeWidth="2" strokeOpacity="0.18" fill="white" fillOpacity="0.4"/>
      <circle cx="240" cy="72" r="18" stroke="#002910" strokeWidth="1.5" strokeOpacity="0.18" fill="none"/>
      <line x1="253" y1="86" x2="265" y2="98" stroke="#002910" strokeWidth="2.5" strokeOpacity="0.2" strokeLinecap="round"/>
    </svg>
  );
}
function SalesIllusSVG({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect x="30" y="50" width="56" height="60" rx="6" fill={accent} opacity="0.9"/>
      <rect x="104" y="62" width="44" height="48" rx="6" fill={accent} opacity="0.75"/>
      <rect x="166" y="72" width="34" height="38" rx="6" fill={accent} opacity="0.6"/>
      <rect x="218" y="80" width="26" height="30" rx="6" fill={accent} opacity="0.45"/>
      <circle cx="58" cy="68" r="8" fill="white" fillOpacity="0.5"/>
      <circle cx="126" cy="74" r="6" fill="white" fillOpacity="0.5"/>
      <circle cx="183" cy="80" r="5" fill="white" fillOpacity="0.5"/>
      <circle cx="270" cy="55" r="10" fill={accent} opacity="0.5"/>
      <circle cx="290" cy="75" r="6" fill={accent} opacity="0.35"/>
    </svg>
  );
}
function EngineeringIllusSVG({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect x="30" y="35" width="160" height="100" rx="8" fill="white" fillOpacity="0.45" stroke="#002910" strokeWidth="1.2" strokeOpacity="0.12"/>
      <circle cx="48" cy="52" r="5" fill="#FF6B6B" fillOpacity="0.5"/>
      <circle cx="63" cy="52" r="5" fill="#FFD93D" fillOpacity="0.5"/>
      <circle cx="78" cy="52" r="5" fill="#6BCB77" fillOpacity="0.5"/>
      <rect x="44" y="68" width="20" height="3.5" rx="1.5" fill={accent} opacity="0.8"/>
      <rect x="70" y="68" width="50" height="3.5" rx="1.5" fill="#002910" fillOpacity="0.15"/>
      <rect x="44" y="78" width="12" height="3.5" rx="1.5" fill="#002910" fillOpacity="0.1"/>
      <rect x="62" y="78" width="64" height="3.5" rx="1.5" fill={accent} opacity="0.6"/>
      <rect x="44" y="88" width="36" height="3.5" rx="1.5" fill="#002910" fillOpacity="0.12"/>
      <rect x="86" y="88" width="40" height="3.5" rx="1.5" fill={accent} opacity="0.45"/>
      <circle cx="240" cy="50" r="7" fill={accent} opacity="0.85"/>
      <circle cx="240" cy="90" r="7" fill={accent} opacity="0.7"/>
      <circle cx="275" cy="70" r="7" fill={accent} opacity="0.55"/>
      <line x1="240" y1="57" x2="240" y2="83" stroke="#3D4700" strokeWidth="1.5" strokeOpacity="0.2"/>
      <path d="M 240 65 Q 258 65 275 70" stroke="#3D4700" strokeWidth="1.5" strokeOpacity="0.2" fill="none"/>
      <path d="M 240 75 Q 258 75 275 70" stroke="#3D4700" strokeWidth="1.5" strokeOpacity="0.2" fill="none"/>
    </svg>
  );
}
function MarketingIllusSVG({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <path d="M 100 60 L 145 45 L 145 115 L 100 100 Z" fill={accent} opacity="0.9"/>
      <rect x="70" y="68" width="32" height="28" rx="4" fill={accent} opacity="0.6"/>
      <path d="M 80 96 L 74 118 L 92 118 L 98 96" fill={accent} opacity="0.5"/>
      <path d="M 152 65 Q 165 80 152 95" stroke="#002910" strokeWidth="2" strokeOpacity="0.18" fill="none" strokeLinecap="round"/>
      <path d="M 160 58 Q 180 80 160 102" stroke="#002910" strokeWidth="1.5" strokeOpacity="0.12" fill="none" strokeLinecap="round"/>
      <rect x="200" y="44" width="80" height="18" rx="9" fill={accent} opacity="0.5"/>
      <rect x="200" y="71" width="68" height="18" rx="9" fill={accent} opacity="0.4"/>
      <rect x="200" y="98" width="76" height="18" rx="9" fill={accent} opacity="0.5"/>
    </svg>
  );
}
function SupportIllusSVG({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect x="30" y="40" width="130" height="48" rx="12" fill={accent} opacity="0.85"/>
      <path d="M 50 88 L 44 104 L 70 88 Z" fill={accent} opacity="0.85"/>
      <rect x="160" y="75" width="110" height="42" rx="12" fill={accent} opacity="0.6"/>
      <path d="M 255 117 L 262 130 L 240 117 Z" fill={accent} opacity="0.6"/>
      <rect x="46" y="54" width="60" height="4" rx="2" fill="#002910" fillOpacity="0.2"/>
      <rect x="46" y="64" width="88" height="3" rx="1.5" fill="#002910" fillOpacity="0.13"/>
      <rect x="172" y="88" width="72" height="4" rx="2" fill="#002910" fillOpacity="0.18"/>
      <circle cx="270" cy="44" r="12" fill={accent} opacity="0.7"/>
      <path d="M 264 44 L 269 49 L 277 39" stroke="#002910" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" fill="none"/>
    </svg>
  );
}
function DataIllusSVG({ accent }: { accent: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <path d="M 30 120 L 60 100 L 90 108 L 120 72 L 150 60 L 180 68 L 210 44 L 240 50 L 270 38 L 290 42 L 290 130 L 30 130 Z" fill={accent} opacity="0.35"/>
      <path d="M 30 120 L 60 100 L 90 108 L 120 72 L 150 60 L 180 68 L 210 44 L 240 50 L 270 38 L 290 42" stroke="#002910" strokeWidth="2" strokeOpacity="0.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {[[60,100],[120,72],[150,60],[210,44],[270,38]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="white" stroke="#002910" strokeWidth="1.5" strokeOpacity="0.3"/>
      ))}
      <rect x="190" y="24" width="68" height="28" rx="6" fill="white" fillOpacity="0.7" stroke="#002910" strokeWidth="1" strokeOpacity="0.12"/>
      <rect x="198" y="32" width="32" height="3.5" rx="1.5" fill={accent} opacity="0.8"/>
    </svg>
  );
}
function Illus({ category, accent }: { category: string; accent: string }) {
  switch (category) {
    case "SEO & Content":    return <SEOIllusSVG accent={accent}/>;
    case "Sales & CRM":      return <SalesIllusSVG accent={accent}/>;
    case "Engineering":      return <EngineeringIllusSVG accent={accent}/>;
    case "Marketing":        return <MarketingIllusSVG accent={accent}/>;
    case "Support":          return <SupportIllusSVG accent={accent}/>;
    case "Data & Analytics": return <DataIllusSVG accent={accent}/>;
    default:                 return <DataIllusSVG accent={accent}/>;
  }
}

// ─── Carousel upvote button ───────────────────────────────────────────────────
function CarouselUpvote({ useCaseId, popularity }: { useCaseId: string; popularity: number }) {
  const { count, hasVoted, vote } = useVotes(useCaseId, popularity);
  return (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); vote(); }}
      title={hasVoted ? "Already upvoted" : "Upvote"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "5px 10px",
        borderRadius: 99,
        border: hasVoted ? "1.5px solid #057A28" : "1.5px solid rgba(0,41,16,0.18)",
        backgroundColor: hasVoted ? "#CCFFE0" : "rgba(255,255,255,0.9)",
        color: hasVoted ? "#057A28" : "rgba(0,41,16,0.5)",
        cursor: hasVoted ? "default" : "pointer",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.02em",
        transition: "all 0.2s ease",
        backdropFilter: "blur(4px)",
      }}
    >
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <path d="M5 1L9.33 8.5H0.67L5 1Z" fill={hasVoted ? "#057A28" : "rgba(0,41,16,0.4)"} />
      </svg>
      {count.toLocaleString()}
    </button>
  );
}

// ─── Coverflow carousel card ──────────────────────────────────────────────────
function CarouselCard({
  useCase,
  isActive,
  onClick,
  onVideoEnd,
}: {
  useCase: UseCase;
  isActive: boolean;
  onClick?: () => void;
  onVideoEnd?: () => void;
}) {
  const pal = palette[useCase.category] || palette["Sales & CRM"];
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const CARD_W = 380;
  const CARD_H = useCase.attribution ? 580 : 540;

  // Auto-advance: listen for YouTube postMessage when video ends
  useEffect(() => {
    if (!isActive || !onVideoEnd) return;

    function handleMessage(e: MessageEvent) {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        // YouTube iframe API fires event with info.playerState === 0 when ended
        if (data?.event === "infoDelivery" && data?.info?.playerState === 0) {
          onVideoEnd();
        }
      } catch {
        // ignore non-JSON messages
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [isActive, onVideoEnd]);

  // Build YouTube embed URL — enable JS API for ended-event detection
  const videoId = useCase.videoUrl.split("/embed/")[1]?.split("?")[0] ?? "";
  const embedSrc = isActive
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1&rel=0&modestbranding=1`
    : `https://www.youtube.com/embed/${videoId}?autoplay=0&enablejsapi=1&rel=0&modestbranding=1`;

  const inner = (
    <div
      style={{
        width: CARD_W,
        height: CARD_H,
        borderRadius: 24,
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        boxShadow: isActive
          ? "0 40px 100px rgba(0,41,16,0.18), 0 6px 24px rgba(0,41,16,0.09)"
          : "0 8px 32px rgba(0,41,16,0.08)",
        transition: "box-shadow 0.45s ease",
        userSelect: "none",
      }}
      onClick={!isActive ? onClick : undefined}
    >
      {/* Video / illustration — top ~62% */}
      <div
        style={{
          flex: "0 0 340px",
          backgroundColor: pal.bg,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {isActive ? (
          /* Active card: show video */
          <iframe
            ref={iframeRef}
            src={embedSrc}
            title={useCase.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        ) : (
          /* Inactive cards: show illustration */
          <>
            <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "60%", paddingBottom: "60%", borderRadius: "50%", backgroundColor: pal.accent, opacity: 0.35, filter: "blur(36px)" }} />
            <div style={{ position: "absolute", bottom: "-15%", left: "-5%", width: "44%", paddingBottom: "44%", borderRadius: "50%", backgroundColor: pal.accent, opacity: 0.2, filter: "blur(28px)" }} />
            <div style={{ position: "absolute", inset: 0 }}>
              <Illus category={useCase.category} accent={pal.accent} />
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: `linear-gradient(to bottom, transparent, ${pal.bg})` }} />
          </>
        )}

        {/* Category badge */}
        <span
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            fontSize: 10,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            backgroundColor: pal.bg,
            color: pal.text,
            border: `1px solid ${pal.border}`,
            borderRadius: 6,
            padding: "4px 10px",
            opacity: 0.95,
            zIndex: 2,
          }}
        >
          {useCase.category}
        </span>

        {/* Upvote pill — top right */}
        <div style={{ position: "absolute", top: 16, right: 16, zIndex: 2 }}>
          <CarouselUpvote useCaseId={useCase.id} popularity={useCase.popularity} />
        </div>
      </div>

      {/* Content — bottom */}
      <div
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTop: "1.5px solid rgba(0,41,16,0.08)",
          padding: "18px 22px 22px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h3
          style={{
            fontFamily: "'Saans', 'DM Serif Display', serif",
            fontWeight: 400,
            fontSize: 19,
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            color: "#002910",
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {useCase.title}
        </h3>
        {isActive && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              color: "#057A28",
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              marginTop: 10,
            }}
          >
            Explore use case
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#057A28"/>
            </svg>
          </div>
        )}

        {/* Customer attribution strip */}
        {useCase.attribution && (
          <div
            style={{
              marginTop: "auto",
              paddingTop: 14,
              borderTop: "1px solid rgba(0,41,16,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
              {useCase.attribution.headshot ? (
                <img
                  src={useCase.attribution.headshot}
                  alt={useCase.attribution.name}
                  style={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", objectFit: "cover", border: `1.5px solid ${pal.border}` }}
                />
              ) : (
                <div
                  style={{
                    flexShrink: 0, width: 32, height: 32, borderRadius: "50%",
                    backgroundColor: pal.bg, border: `1.5px solid ${pal.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 10,
                    color: pal.text, letterSpacing: "0.02em",
                  }}
                >
                  {useCase.attribution.initials}
                </div>
              )}
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 12, color: "#002910", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {useCase.attribution.name}
                </p>
                <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 11, color: "rgba(0,41,16,0.48)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {useCase.attribution.title}
                </p>
              </div>
            </div>
            <div style={{ flexShrink: 0, height: 28, display: "flex", alignItems: "center", backgroundColor: "#F8FFFB", borderRadius: 8, padding: "4px 8px", border: "1px solid rgba(0,41,16,0.07)" }}>
              <img
                src={`https://cdn.brandfetch.io/${useCase.attribution.domain}/w/160/h/40/logo`}
                alt={useCase.attribution.company}
                style={{ height: 18, width: "auto", objectFit: "contain", maxWidth: 90 }}
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = "none";
                  const span = document.createElement("span");
                  span.textContent = useCase.attribution!.company;
                  span.style.cssText = "font-family:'Inter',sans-serif;font-size:11px;font-weight:700;color:#002910;letter-spacing:-0.01em;";
                  el.parentNode?.appendChild(span);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (isActive) {
    return (
      <Link to={`/use-case/${useCase.id}`} style={{ textDecoration: "none", display: "block" }}>
        {inner}
      </Link>
    );
  }
  return inner;
}

// ─── Coverflow carousel ───────────────────────────────────────────────────────
const CARD_SPACING = 360;
const ANGLE        = 32;
const VISIBLE_RANGE = 2.6;

function CoverflowCarousel({ items }: { items: UseCase[] }) {
  const [current, setCurrent] = useState(0);

  const goPrev = useCallback(() => setCurrent((i) => Math.max(0, i - 1)), []);
  const goNext = useCallback(() => setCurrent((i) => Math.min(items.length - 1, i + 1)), [items.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goPrev, goNext]);

  // Touch/swipe
  const touchStart = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd   = (e: React.TouchEvent) => {
    const delta = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? goNext() : goPrev();
  };

  return (
    <div style={{ userSelect: "none" }}>
      {/* Stage */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ position: "relative", height: 620, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {items.map((item, i) => {
          const offset = i - current;
          const abs    = Math.abs(offset);
          if (abs > VISIBLE_RANGE) return null;

          const translateX = offset * CARD_SPACING;
          const rotateY    = -offset * ANGLE;
          const scale      = abs === 0 ? 1 : abs <= 1 ? 0.87 : 0.75;
          const opacity    = abs === 0 ? 1 : abs <= 1 ? 0.78 : 0.52;
          const zIndex     = 30 - abs * 8;

          return (
            <div
              key={item.id}
              style={{
                position: "absolute",
                transform: `perspective(1400px) translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                transition: "all 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                willChange: "transform, opacity",
              }}
            >
              <CarouselCard
                useCase={item}
                isActive={i === current}
                onClick={() => setCurrent(i)}
                onVideoEnd={i === current ? goNext : undefined}
              />
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 8 }}>
        <button
          onClick={goPrev}
          disabled={current === 0}
          style={{
            width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
            border: "1.5px solid rgba(0,41,16,0.18)",
            backgroundColor: current === 0 ? "transparent" : "white",
            color: current === 0 ? "rgba(0,41,16,0.2)" : "#002910",
            cursor: current === 0 ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
            boxShadow: current === 0 ? "none" : "0 2px 8px rgba(0,41,16,0.07)",
          }}
        >
          <ChevronLeft size={17} />
        </button>

        {/* Dot strip */}
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          {items.map((_, i) => {
            const isActive = i === current;
            const dist = Math.abs(i - current);
            if (dist > 4) return null;
            return (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width:  isActive ? 20 : dist <= 1 ? 6 : 5,
                  height: 5,
                  borderRadius: 99,
                  backgroundColor: isActive ? "#002910" : "rgba(0,41,16,0.18)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease",
                  flexShrink: 0,
                }}
              />
            );
          })}
        </div>

        <button
          onClick={goNext}
          disabled={current === items.length - 1}
          style={{
            width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
            border: "1.5px solid rgba(0,41,16,0.18)",
            backgroundColor: current === items.length - 1 ? "transparent" : "white",
            color: current === items.length - 1 ? "rgba(0,41,16,0.2)" : "#002910",
            cursor: current === items.length - 1 ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
            boxShadow: current === items.length - 1 ? "none" : "0 2px 8px rgba(0,41,16,0.07)",
          }}
        >
          <ChevronRight size={17} />
        </button>
      </div>

      {/* Counter */}
      <p style={{ textAlign: "center", marginTop: 12, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(0,41,16,0.35)", letterSpacing: "0.07em" }}>
        {String(current + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
      </p>
    </div>
  );
}

// ─── Category count helper ────────────────────────────────────────────────────
const categoryCount: Record<string, number> = {};
useCases.forEach((uc) => {
  categoryCount[uc.category] = (categoryCount[uc.category] || 0) + 1;
});

// ─── Page ─────────────────────────────────────────────────────────────────────
export function UseCasesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Default sort: most popular (by popularity seed, which reflects votes)
  const filteredUseCases = (
    activeCategory === "All"
      ? [...useCases]
      : useCases.filter((uc) => uc.category === activeCategory)
  ).sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="pb-32" style={{ backgroundColor: "#F8FFFB" }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden px-6 pt-40 pb-10" style={{ backgroundColor: "#F8FFFB" }}>
        {/* Grid texture */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#002910" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>

        <div className="relative mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "#002910",
              backgroundColor: "#CCFFE0",
              border: "1.5px solid #057A28",
            }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#057A28]" style={{ animation: "pulse 2s ease-in-out infinite" }}/>
            AirOps MCP Library
          </div>

          {/* H1 */}
          <h1
            className="text-[#002910]"
            style={{
              fontFamily: "'Serrif VF', 'DM Serif Display', serif",
              fontWeight: 400,
              fontSize: "clamp(38px, 6vw, 76px)",
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
            }}
          >
            See what the best
            <br />
            marketers are <span style={{ color: "#057A28" }}>building</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl text-[#002910]/55"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.75 }}
          >
            The bleeding edge of AI-powered marketing workflows — built by real teams, ready to deploy in minutes.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <a
              href="https://app.airops.com/sign-up"
              className="rounded-full bg-[#002910] px-6 py-3 text-[#00FF64] no-underline transition-all duration-200 hover:brightness-110"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700 }}
            >
              Start building free →
            </a>
            <a
              href="https://docs.airops.com"
              className="rounded-full border px-6 py-3 text-[#002910] no-underline transition-all duration-200 hover:bg-[#002910]/5"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                borderColor: "rgba(0,41,16,0.2)",
              }}
            >
              Read the docs
            </a>
          </div>
        </div>
      </div>

      {/* ── Coverflow Carousel (the feed) ─────────────────────── */}
      <div className="relative" style={{ backgroundColor: "#F8FFFB", paddingTop: 32, paddingBottom: 48 }}>
        <CoverflowCarousel items={useCases} />
      </div>

      {/* ── Divider ──────────────────────────────────────────── */}
      <div className="mx-auto mb-12" style={{ maxWidth: 1152, height: 1, backgroundColor: "rgba(0,41,16,0.08)", margin: "0 auto 48px", padding: "0 24px" }} />

      {/* ── All workflows grid ─────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <div className="mb-8 flex items-center gap-3">
          <h2
            className="text-[#002910]"
            style={{
              fontFamily: "'Serrif VF', 'DM Serif Display', serif",
              fontWeight: 400,
              fontSize: "clamp(22px, 3vw, 32px)",
              letterSpacing: "-0.02em",
            }}
          >
            All workflows
          </h2>
          <div style={{ flex: 1, height: 1, backgroundColor: "rgba(0,41,16,0.08)" }}/>
          {/* Sort label */}
          <div
            className="flex items-center gap-1.5"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "rgba(0,41,16,0.45)",
              letterSpacing: "0.05em",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1L9.33 8.5H0.67L5 1Z" fill="rgba(0,41,16,0.35)" />
            </svg>
            Most popular
          </div>
        </div>

        {/* Category pills */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count = cat === "All" ? useCases.length : categoryCount[cat] || 0;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="cursor-pointer rounded-full px-4 py-2 transition-all duration-200"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: 13.5,
                  backgroundColor: isActive ? "#002910" : "white",
                  color: isActive ? "#00FF64" : "#002910",
                  border: isActive ? "1.5px solid #002910" : "1.5px solid rgba(0,41,16,0.15)",
                }}
              >
                {cat}
                <span
                  className="ml-1.5 rounded-full px-1.5 py-0.5 text-[10px]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    backgroundColor: isActive ? "rgba(0,255,100,0.15)" : "rgba(0,41,16,0.06)",
                    color: isActive ? "#00FF64" : "#002910",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredUseCases.map((uc) => (
              <motion.div
                key={uc.id}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <UseCaseCard useCase={uc} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Banner */}
        <div
          className="mt-20 flex flex-col items-center justify-between gap-6 rounded-2xl px-10 py-10 md:flex-row"
          style={{ backgroundColor: "#002910" }}
        >
          <div>
            <p
              className="text-[#CCFFE0]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Don't see your workflow?
            </p>
            <h3
              className="mt-1 text-white"
              style={{
                fontFamily: "'Serrif VF', 'DM Serif Display', serif",
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Build a custom MCP workflow in minutes.
            </h3>
          </div>
          <a
            href="https://app.airops.com/sign-up"
            className="shrink-0 rounded-full bg-[#00FF64] px-7 py-3.5 text-[#002910] no-underline transition-all duration-200 hover:brightness-95"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700 }}
          >
            Get started free →
          </a>
        </div>
      </div>
    </div>
  );
}
