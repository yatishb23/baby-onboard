import Link from "next/link";
import { Download, ArrowRight, Monitor, Zap, Terminal, Eye, Cpu, Shield, Check } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Install",
    icon: Download,
    desc: "Download the installer for your OS and run it. BOB is ready in under 30 seconds.",
    details: [
      "25MB download — takes seconds",
      "No accounts or sign-ups required",
      "Works on Windows, macOS, Linux",
      "No admin rights needed",
    ],
  },
  {
    num: "02",
    title: "Launch",
    icon: Terminal,
    desc: "Start BOB and it runs silently in the background. Access it anytime with a hotkey.",
    details: [
      "Hotkey-activated overlay (Ctrl+Space)",
      "Fully discreet — no visible windows",
      "Customizable shortcut keys",
      "Auto-starts with your system",
    ],
  },
  {
    num: "03",
    title: "Ace It",
    icon: Zap,
    desc: "BOB listens, analyzes, and feeds you answers in real-time during interviews.",
    details: [
      "Real-time speech-to-text analysis",
      "Context-aware response suggestions",
      "Zero delay processing",
      "Invisible to screen-sharing software",
    ],
  },
];

const specs = [
  { label: "OS", value: "Windows 10+ / macOS 12+ / Linux" },
  { label: "RAM", value: "4GB minimum" },
  { label: "Storage", value: "200MB available" },
  { label: "Microphone", value: "Required for audio input" },
  { label: "Internet", value: "Required for AI processing" },
  { label: "Download Size", value: "25MB" },
];

export default function HowItWorks() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">How it works</h1>
          <p className="page-subtitle">
            From download to live in under 60 seconds. No accounts, no configuration, no headaches.
          </p>
        </div>

        <hr className="divider" />

        <div className="content-section">
          <div className="section-header">
            <h2>Three Simple Steps</h2>
          </div>
          <div className="step-grid">
            {steps.map((step) => (
              <div key={step.num} className="card">
                <span className="tag-badge">{step.num}</span>
                <h3 style={{ marginTop: 12 }}>{step.title}</h3>
                <p style={{ marginBottom: 16 }}>{step.desc}</p>
                <hr className="divider" style={{ margin: "0 0 12px" }} />
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {step.details.map((d) => (
                    <li key={d} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "var(--text-secondary)", marginBottom: 6 }}>
                      <Check size={14} style={{ flexShrink: 0, marginTop: 1 }} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2>Under the Hood</h2>
          </div>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
            {[
              { icon: Eye, text: "Undetectable by screen-sharing software" },
              { icon: Shield, text: "All processing happens locally" },
              { icon: Cpu, text: "Optimized for low CPU usage" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="card" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Icon size={18} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2>System Requirements</h2>
          </div>
          <div className="card">
            {specs.map((s) => (
              <div key={s.label} className="shortcut-row">
                <span className="shortcut-keys" style={{ textTransform: "uppercase", fontSize: 12, letterSpacing: "0.05em", color: "var(--text-tertiary)" }}>{s.label}</span>
                <span className="shortcut-action">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="divider" />

        <div className="content-section" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>
            Ready to get started?
          </h2>
          <p className="page-subtitle" style={{ marginBottom: 24 }}>
            Takes 30 seconds to install. No credit card. No catch.
          </p>
          <Link href="/download" className="btn btn-primary">
            <Download size={18} />
            Install BOB Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
