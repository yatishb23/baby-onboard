import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { StatsCards } from "@/components/StatsCards";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function Home() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">
            Your interview co-pilot
          </h1>
          <p className="page-subtitle">
            Real-time answers. Zero detection. BOB keeps you in the zone
            while feeding you the perfect responses.
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
