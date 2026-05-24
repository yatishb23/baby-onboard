import Link from "next/link";
import { Download, ArrowRight, Keyboard, Monitor, Mic, MessageSquare, Brain, FileText, Settings, MousePointer2, Lightbulb, ChevronRight, PanelRight, Image, SquarePen, List, ArrowUpDown, Check } from "lucide-react";

const toc = [
  { num: "01", label: "First-Time Setup" },
  { num: "02", label: "Overlay Window" },
  { num: "03", label: "Keyboard Shortcuts" },
  { num: "04", label: "Features" },
  { num: "05", label: "Configuration" },
  { num: "06", label: "Click-Through Mode" },
  { num: "07", label: "Quick Tips" },
];

const overlayItems = [
  { icon: List, label: "Header bar", desc: "App name, current AI model, notes count, click-through status, live indicator" },
  { icon: Image, label: "Left panel (Live Analysis)", desc: "Screenshot results, AI responses, chat history" },
  { icon: PanelRight, label: "Right panel (Notes)", desc: "Manual notes and AI-generated interview Q&A" },
];

const shortcuts = [
  { group: "Window & Display", icon: Monitor, keys: [
    { k: "Ctrl+Shift+X", a: "Toggle overlay visibility" },
    { k: "Ctrl+Shift+L", a: "Toggle click-through lock" },
    { k: "Ctrl+Shift+Q", a: "Quit the application" },
    { k: "Ctrl+Shift+Arrow Keys", a: "Move window 50px" },
    { k: "Ctrl+= / Ctrl+-", a: "Resize window larger / smaller" },
  ]},
  { group: "AI & Analysis", icon: Brain, keys: [
    { k: "Ctrl+Shift+H", a: "Screenshot + AI analysis" },
    { k: "Ctrl+Shift+R", a: "Start / stop voice recording" },
    { k: "Ctrl+Shift+M", a: "Cycle to next AI model" },
    { k: "Ctrl+Shift+E", a: "Erase conversation history" },
  ]},
  { group: "Navigation", icon: ArrowUpDown, keys: [
    { k: "Ctrl+Shift+U", a: "Scroll response / notes up" },
    { k: "Ctrl+Shift+D", a: "Scroll response / notes down" },
    { k: "Ctrl+Shift+B", a: "Toggle Notes panel visibility" },
  ]},
];

const settings = [
  { setting: "DSA/CP Language", options: "Java, C++, Python, or custom" },
  { setting: "Frontend Framework", options: "React, Next.js, or custom" },
  { setting: "Backend Framework", options: "Node.js, Spring Boot, or custom" },
  { setting: "Database", options: "MySQL, MongoDB, PostgreSQL, or custom" },
  { setting: "Answer Style", options: "Short & Concise, Balanced, Detailed" },
  { setting: "Model Selection", options: "Gemini Flash, Pro, Advanced" },
  { setting: "Problem Mode", options: "Competitive Programming, Interview Prep, Learning Mode" },
  { setting: "Code Naming", options: "Short or Readable" },
  { setting: "Comments Level", options: "Minimal, Moderate, Detailed" },
  { setting: "Output Format", options: "Code Only, Code + Explanation, Explanation First" },
  { setting: "Extra Features", options: "Test Cases, Edge Cases, Debugging, Optimization, Multiple Approaches" },
  { setting: "Difficulty", options: "Easy, Medium, Hard" },
  { setting: "Learning Boost", options: "Visuals, Analogies, Tips, Follow-up" },
];

const tips = [
  "Screenshot analysis respects your configured preferences — the AI knows your preferred language and stack.",
  "Voice works best with a good microphone; English (US) speech recognition is configured by default.",
  "Click-through lock is useful when you want to interact with the response without clicking through to the window below.",
  "Move the overlay with arrow shortcuts (Ctrl+Shift+Arrow Keys) if it obscures something important.",
  "Screenshots capture the entire primary display — position relevant content before using the shortcut.",
  "Your session is restored automatically on subsequent launches for up to 30 days.",
];

export default function Manual() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">User Manual</h1>
          <p className="page-subtitle">
            A transparent desktop overlay assistant powered by Google Gemini AI.
            Float above all windows — take screenshots, use voice commands, and
            get AI responses without leaving your workflow.
          </p>
        </div>

        <hr className="divider" />

        <div className="content-section">
          <div className="section-header">
            <h2>Table of Contents</h2>
          </div>
          <div style={{ display: "grid", gap: 8, gridTemplateColumns: "1fr 1fr" }}>
            {toc.map(({ num, label }) => (
              <div key={num} className="card" style={{ display: "flex", alignItems: "center", gap: 12, padding: 12 }}>
                <span className="tag-badge">{num}</span>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2>01. First-Time Setup</h2>
          </div>
          <div className="step-grid">
            <div className="card">
              <h3>Enter Your Token</h3>
              <p>Launch the app — the <strong>Auth Window</strong> appears asking for your Access Token. If you don&apos;t have one, click the link to obtain it from the portal.</p>
            </div>
            <div className="card">
              <h3>Sign In with Google</h3>
              <p>After token validation, your browser opens for Google OAuth 2.0 sign-in. Grant the requested permissions to proceed.</p>
            </div>
            <div className="card">
              <h3>Configure & Launch</h3>
              <p>The <strong>Setup Window</strong> opens with configuration sections (language, frameworks, answer style, etc.). Adjust as needed and click <strong>&quot;Launch Bob&quot;</strong>.</p>
            </div>
          </div>
          <div className="card" style={{ marginTop: 12, textAlign: "center" }}>
            <p style={{ fontSize: 13, color: "var(--text-tertiary)" }}><strong>Heads up:</strong> On subsequent launches, your session is restored automatically (valid for 30 days).</p>
          </div>
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2>02. Overlay Window</h2>
          </div>
          <p className="page-subtitle" style={{ marginBottom: 16 }}>
            The main window is a <strong>transparent, always-on-top overlay</strong> that covers your screen (with a small gap at the bottom for the taskbar). It starts in <strong>click-through mode</strong> — mouse events pass through to windows beneath it.
          </p>
          <div style={{ display: "grid", gap: 8 }}>
            {overlayItems.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="card" style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Icon size={18} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{label}</div>
                  <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2>03. Keyboard Shortcuts</h2>
          </div>
          <p className="page-subtitle" style={{ marginBottom: 16, fontSize: 14 }}>
            All shortcuts are <strong>global</strong> — they work even when Bob.io doesn&apos;t have focus.
          </p>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
            {shortcuts.map((section) => (
              <div key={section.group} className="card" style={section.group === "Navigation" ? { gridColumn: "1 / -1" } : {}}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <section.icon size={16} />
                  <h3 style={{ margin: 0, fontSize: 14 }}>{section.group}</h3>
                </div>
                {section.keys.map(({ k, a }) => (
                  <div key={k} className="shortcut-row" style={{ padding: "8px 0" }}>
                    <span className="shortcut-keys">{k}</span>
                    <span className="shortcut-action">{a}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2>04. Features</h2>
          </div>
          <div className="feature-grid">
            <div className="card">
              <h3>Screenshot Analysis</h3>
              <p style={{ marginBottom: 12 }}>Press <span className="tag-badge">Ctrl+Shift+H</span> to capture your primary display. Results stream in real-time with markdown rendering.</p>
              <div className="card" style={{ padding: 12 }}>
                <p style={{ fontSize: 12, color: "var(--text-tertiary)" }}><strong>Pro tip:</strong> The AI considers your configured preferences when generating responses.</p>
              </div>
            </div>
            <div className="card">
              <h3>Voice Recording</h3>
              <p style={{ marginBottom: 12 }}>Press <span className="tag-badge">Ctrl+Shift+R</span> to start a voice session. Connects to Gemini Live Audio API with speaker diarization.</p>
              <div className="card" style={{ padding: 12 }}>
                <p style={{ fontSize: 12, color: "var(--text-tertiary)" }}>A pulsing <strong>LIVE</strong> indicator shows when recording is active.</p>
              </div>
            </div>
            <div className="card">
              <h3>Text Chat</h3>
              <p>Send text messages to the AI for general Q&A. Press <span className="tag-badge">Ctrl+Shift+E</span> to clear history.</p>
            </div>
            <div className="card">
              <h3>Interview Q&A Generator</h3>
              <p>Enter topics in the Notes tab and click <strong>Generate Interview Q&A</strong>. The AI produces a structured Q&A sheet.</p>
            </div>
            <div className="card">
              <h3>Notes Panel</h3>
              <p>Press <span className="tag-badge">Ctrl+Shift+B</span> to toggle. Paste notes or use AI-generated Q&A content.</p>
            </div>
            <div className="card">
              <h3>Model Selection</h3>
              <p>Press <span className="tag-badge">Ctrl+Shift+M</span> to cycle through available AI models.</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2>05. Configuration</h2>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 16 }}>
            All preferences are saved to <span className="tag-badge">user-preferences.json</span> and take effect on launch.
          </p>
          <div className="card">
            {settings.map((s) => (
              <div key={s.setting} className="shortcut-row">
                <span style={{ fontSize: 14, fontWeight: 500 }}>{s.setting}</span>
                <span className="shortcut-action">{s.options}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2>06. Click-Through Mode</h2>
          </div>
          <p className="page-subtitle" style={{ marginBottom: 16 }}>
            By default, the overlay lets all clicks pass through to the windows underneath.
          </p>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: 12 }}>
            {[
              "Automatically disables click-through when your mouse hovers over an interactive area",
              "Hard lock (Ctrl+Shift+L) overrides this — toggles all input on/off",
            ].map((text) => (
              <li key={text} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--text-secondary)", marginBottom: 8 }}>
                <Check size={16} style={{ flexShrink: 0, marginTop: 2 }} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <div className="card" style={{ textAlign: "center" }}>
            <p style={{ fontSize: 13, color: "var(--text-tertiary)" }}>A <strong>Click-through</strong> badge in the header shows the current state.</p>
          </div>
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2>07. Quick Tips</h2>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            {tips.map((text) => (
              <div key={text} className="card" style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <Lightbulb size={16} style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0 }}>{text}</p>
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
            Download Bob.io and start your first session in under 30 seconds.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/download" className="btn btn-primary">
              <Download size={18} />
              Download Now
              <ArrowRight size={18} />
            </Link>
            <Link href="/features" className="btn btn-ghost">
              View Features
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
