import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { StatsCards } from "@/components/StatsCards";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function Home() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="page-header" style={{ textAlign: "center" }}>
          <svg viewBox="0 0 200 60" style={{ width: 160, height: 48, marginBottom: 24, display: "inline-block" }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="jetGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--text-tertiary)" />
                <stop offset="50%" stopColor="var(--text)" />
                <stop offset="100%" stopColor="var(--text-tertiary)" />
              </linearGradient>
            </defs>
            <g fill="none" stroke="url(#jetGlow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 30 L40 26 L70 22 L100 20 L130 22 L160 26 L192 30" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
              </path>
              <path d="M10 30 L35 28 L65 24 L100 22 L135 24 L165 28 L190 30" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" repeatCount="indefinite" />
              </path>
              <path d="M30 30 Q60 18 100 14 Q140 18 170 30" fill="var(--bg)" stroke="var(--text)" strokeWidth="1.2">
                <animate attributeName="d" values="M30 30 Q60 18 100 14 Q140 18 170 30;M30 30 Q60 16 100 12 Q140 16 170 30;M30 30 Q60 18 100 14 Q140 18 170 30" dur="2s" repeatCount="indefinite" />
              </path>
              <path d="M100 14 L98 10 L102 10 Z" fill="var(--text)" stroke="none" opacity="0.8" />
              <path d="M55 22 L50 18 L52 22" fill="var(--text)" stroke="none" opacity="0.6" />
              <path d="M145 22 L150 18 L148 22" fill="var(--text)" stroke="none" opacity="0.6" />
              <circle cx="100" cy="20" r="2.5" fill="var(--bg)" stroke="var(--text)" strokeWidth="1" />
              <path d="M30 30 L10 34 L8 30 L10 26 Z" fill="var(--text)" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="1.5s" repeatCount="indefinite" />
              </path>
              <path d="M170 30 L190 34 L192 30 L190 26 Z" fill="var(--text)" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="1.5s" repeatCount="indefinite" />
              </path>
            </g>
          </svg>
          <h1 className="page-title">
            Your interview co-pilot
          </h1>
          <p className="page-subtitle">
            Real-time answers. Zero detection. BOB keeps you in the zone
            while feeding you the perfect responses.
          </p>
        </div>

        <div className="content-section" style={{ textAlign: "center" }}>
          <Link href="/download" className="btn btn-primary">
            <Download size={18} />
            Download BOB Now
            <ArrowRight size={18} />
          </Link>
          <p style={{ fontSize: 13, color: "var(--text-tertiary)", marginTop: 12 }}>
            Free &middot; No sign-up &middot; Lifetime updates
          </p>
        </div>

        <hr className="divider" />

        <div className="content-section">
          <div className="section-header">
            <h2>How It Works</h2>
          </div>
          <div className="step-grid">
            <div className="card">
              <span className="tag-badge">01</span>
              <h3 style={{ marginTop: 12 }}>Install</h3>
              <p>Download the installer. Run it once. BOB is ready in under 30 seconds — no accounts, no paywalls.</p>
            </div>
            <div className="card">
              <span className="tag-badge">02</span>
              <h3 style={{ marginTop: 12 }}>Launch</h3>
              <p>BOB runs silently in the background. Discreet overlay, hotkey-activated. Nobody knows it&apos;s there.</p>
            </div>
            <div className="card">
              <span className="tag-badge">03</span>
              <h3 style={{ marginTop: 12 }}>Ace It</h3>
              <p>Real-time suggestions during your interview. Context-aware responses. You walk in confident.</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <StatsCards />
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2>Why BOB?</h2>
          </div>
          <div className="step-grid">
            <div className="card">
              <h3>AI-Powered Answers</h3>
              <p>Advanced LLM analyzes the question in real-time and surfaces the best response. No lag, no fluff.</p>
            </div>
            <div className="card">
              <h3>True Stealth Mode</h3>
              <p>Zero footprint. No suspicious windows, no keyboard noise, no traces. It&apos;s like it was never there.</p>
            </div>
            <div className="card">
              <h3>One-Click Install</h3>
              <p>No sign-ups, no credit cards, no config. Download, run, and you&apos;re live in under 30 seconds.</p>
            </div>
          </div>
        </div>

        <ReviewsSection />

        <hr className="divider" />

        <div className="content-section" style={{ textAlign: "center" }}>
          <p className="page-subtitle" style={{ marginBottom: 24, fontSize: 15 }}>
            v2.0.1 Now Available
          </p>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>
            Ready to crush your interview?
          </h2>
          <p className="page-subtitle" style={{ marginBottom: 24 }}>
            Join thousands who already leveled the playing field.
          </p>
          <Link href="/download" className="btn btn-primary">
            <Download size={18} />
            Get BOB Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
