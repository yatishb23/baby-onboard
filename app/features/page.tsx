import {
  Download,
  ArrowRight,
  Keyboard,
  Monitor,
  Mic,
  MessageSquare,
  Brain,
  FileText,
  Settings,
  MousePointer2,
  Lightbulb,
  ChevronRight,
  Check,
  PanelRight,
  Image,
  SquarePen,
  List,
  ArrowUpDown,
} from "lucide-react";
import Link from "next/link";

function SectionCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Keyboard;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-100 p-6">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function ShortcutRow({ keys, action }: { keys: string; action: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-gray-200 py-3 last:border-0">
      <span className="font-mono text-sm font-bold text-gray-900">{keys}</span>
      <span className="text-right text-sm text-gray-600">{action}</span>
    </div>
  );
}

function SettingRow({ setting, options }: { setting: string; options: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-gray-200 py-3 last:border-0">
      <span className="text-sm font-semibold text-gray-900">{setting}</span>
      <span className="text-right text-xs text-gray-500">{options}</span>
    </div>
  );
}

function TipCard({ icon: Icon, text }: { icon: typeof Lightbulb; text: string }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-100 p-5">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-800">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <p className="text-sm font-medium text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}

export default function Manual() {
  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <section className="overflow-hidden border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-block rounded-xl bg-gray-100 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-gray-700">
              Bob.io User Manual
            </div>
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span className="block">How to use</span>
              <span className="font-serif italic font-normal text-6xl sm:text-7xl lg:text-8xl">
                Bob
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg text-gray-600 leading-relaxed">
              A transparent desktop overlay assistant powered by Google Gemini AI.
              Float above all windows — take screenshots, use voice commands, and
              get AI responses without leaving your workflow.
            </p>
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900 sm:text-3xl">
              Table of Contents
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "01", label: "First-Time Setup" },
              { num: "02", label: "Overlay Window" },
              { num: "03", label: "Keyboard Shortcuts" },
              { num: "04", label: "Features" },
              { num: "05", label: "Configuration" },
              { num: "06", label: "Click-Through Mode" },
              { num: "07", label: "Quick Tips" },
            ].map(({ num, label }) => (
              <div
                key={num}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-100 px-5 py-4"
              >
                <div className="rounded-lg bg-gray-200 px-3 py-1 font-mono text-sm font-bold text-gray-700">
                  {num}
                </div>
                <span className="font-semibold text-sm text-gray-900">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 — FIRST-TIME SETUP */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900">
              01. First-Time <span className="font-serif italic font-normal">Setup</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <SectionCard icon={SquarePen} title="Enter Your Token">
              <p className="text-gray-600 leading-relaxed">
                Launch the app — the <strong>Auth Window</strong> appears asking
                for your Access Token. If you don&apos;t have one, click the link
                to obtain it from the portal.
              </p>
            </SectionCard>
            <SectionCard icon={Monitor} title="Sign in with Google">
              <p className="text-gray-600 leading-relaxed">
                After token validation, your browser opens for Google OAuth
                2.0 sign-in. Grant the requested permissions to proceed.
              </p>
            </SectionCard>
            <SectionCard icon={Settings} title="Configure &amp; Launch">
              <p className="text-gray-600 leading-relaxed">
                The <strong>Setup Window</strong> opens with configuration
                sections (language, frameworks, answer style, etc.). Adjust as
                needed and click <strong>&quot;Launch Bob&quot;</strong>.
              </p>
            </SectionCard>
          </div>
          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-200 px-6 py-4 text-center">
            <p className="text-sm font-medium text-gray-600">
              <strong>Heads up:</strong> On subsequent launches, your session is
              restored automatically (valid for 30 days).
            </p>
          </div>
        </div>
      </section>

      {/* 02 — OVERLAY WINDOW */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900">
                  02. Overlay <span className="font-serif italic font-normal">Window</span>
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                The main window is a <strong>transparent, always-on-top overlay</strong>{" "}
                that covers your screen (with a small gap at the bottom for the
                taskbar). It starts in <strong>click-through mode</strong> — mouse
                events pass through to windows beneath it.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: List, label: "Header bar", desc: "App name, current AI model, notes count, click-through status, live indicator" },
                  { icon: Image, label: "Left panel (Live Analysis)", desc: "Screenshot results, AI responses, chat history" },
                  { icon: PanelRight, label: "Right panel (Notes)", desc: "Manual notes and AI-generated interview Q&A" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-200 px-6 py-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{label}</div>
                      <div className="text-sm text-gray-500">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-2xl border border-gray-200 bg-gray-100 p-4">
                <div className="rounded-xl bg-zinc-950 px-8 py-10 text-center">
                  <div
                    className="font-serif italic text-4xl font-bold text-white sm:text-5xl"
                    style={{ lineHeight: 0.9 }}
                  >
                    Bob.io
                  </div>
                  <div className="mx-auto mt-4 h-px w-24 bg-gray-100/20" />
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">
                      Gemini Flash
                    </span>
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">
                      Click-through
                    </span>
                  </div>
                  <div className="mt-4 space-y-3 text-left">
                    <div className="rounded border border-white/20 px-4 py-2">
                      <span className="text-xs font-medium text-white/50">
                        &gt; Connected. Ready for your input.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — KEYBOARD SHORTCUTS */}
      <section className="border-b border-gray-200 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900">
              03. Keyboard <span className="font-serif italic font-normal">Shortcuts</span>
            </h2>
          </div>
          <p className="mb-8 text-sm font-medium text-gray-500">
            All shortcuts are <strong>global</strong> — they work even when Bob.io
            doesn&apos;t have focus.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                  <Monitor className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">Window &amp; Display</h3>
              </div>
              <div>
                <ShortcutRow keys="Ctrl+Shift+X" action="Toggle overlay visibility" />
                <ShortcutRow keys="Ctrl+Shift+L" action="Toggle click-through lock" />
                <ShortcutRow keys="Ctrl+Shift+Q" action="Quit the application" />
                <ShortcutRow keys="Ctrl+Shift+Arrow Keys" action="Move window 50px" />
                <ShortcutRow keys="Ctrl+= / Ctrl+-" action="Resize window larger / smaller" />
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">AI &amp; Analysis</h3>
              </div>
              <div>
                <ShortcutRow keys="Ctrl+Shift+H" action="Screenshot + AI analysis" />
                <ShortcutRow keys="Ctrl+Shift+R" action="Start / stop voice recording" />
                <ShortcutRow keys="Ctrl+Shift+M" action="Cycle to next AI model" />
                <ShortcutRow keys="Ctrl+Shift+E" action="Erase conversation history" />
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 lg:col-span-2">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                  <ArrowUpDown className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">Navigation</h3>
              </div>
              <div className="grid gap-x-8 sm:grid-cols-2">
                <ShortcutRow keys="Ctrl+Shift+U" action="Scroll response / notes up" />
                <ShortcutRow keys="Ctrl+Shift+D" action="Scroll response / notes down" />
                <ShortcutRow keys="Ctrl+Shift+B" action="Toggle Notes panel visibility" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — FEATURES */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900 sm:text-3xl">
              04. Features
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <SectionCard icon={Image} title="Screenshot Analysis">
              <p className="mb-4 text-gray-600 leading-relaxed">
                Press <kbd className="rounded bg-gray-200 px-2 py-0.5 font-mono text-xs font-bold">Ctrl+Shift+H</kbd>{" "}
                to capture your primary display. The image is compressed and sent
                to Gemini AI for analysis. Results stream in real-time with
                markdown rendering and syntax-highlighted code blocks.
              </p>
              <div className="rounded-lg border border-gray-200 bg-gray-200 px-4 py-3">
                <p className="text-xs font-medium text-gray-500">
                  <strong>Pro tip:</strong> The AI considers your configured
                  preferences (language, frameworks, answer style) when generating
                  responses.
                </p>
              </div>
            </SectionCard>
            <SectionCard icon={Mic} title="Voice Recording">
              <p className="mb-4 text-gray-600 leading-relaxed">
                Press <kbd className="rounded bg-gray-200 px-2 py-0.5 font-mono text-xs font-bold">Ctrl+Shift+R</kbd>{" "}
                to start a voice session. The app connects to Gemini Live Audio
                API, streams your mic input in real-time, transcribes speech (with
                speaker diarization), and the AI responds with audio and text.
              </p>
              <div className="rounded-lg border border-gray-200 bg-gray-200 px-4 py-3">
                <p className="text-xs font-medium text-gray-500">
                  A pulsing <strong>&quot;LIVE&quot;</strong> indicator in the
                  header shows when recording is active. Press the same shortcut
                  to stop.
                </p>
              </div>
            </SectionCard>
            <SectionCard icon={MessageSquare} title="Text Chat">
              <p className="text-gray-600 leading-relaxed">
                Send text messages to the AI for general Q&amp;A, coding help, or
                problem-solving. Conversation history is maintained for context.
                Press{" "}
                <kbd className="rounded bg-gray-200 px-2 py-0.5 font-mono text-xs font-bold">Ctrl+Shift+E</kbd>{" "}
                to clear history.
              </p>
            </SectionCard>
            <SectionCard icon={FileText} title="Interview Q&A Generator">
              <p className="text-gray-600 leading-relaxed">
                In the Setup Window&apos;s Notes tab, enter topics (e.g., &quot;React
                Hooks, Node.js Event Loop, System Design&quot;) and click{" "}
                <strong>Generate Interview Q&amp;A</strong>. The AI produces a
                structured Q&amp;A sheet streamed in real-time, saved to the Notes
                panel.
              </p>
            </SectionCard>
            <SectionCard icon={PanelRight} title="Notes Panel">
              <p className="text-gray-600 leading-relaxed">
                Press{" "}
                <kbd className="rounded bg-gray-200 px-2 py-0.5 font-mono text-xs font-bold">Ctrl+Shift+B</kbd>{" "}
                to toggle the Notes panel. Paste or type your own notes, or use
                AI-generated Interview Q&amp;A content that is auto-split into
                sections.
              </p>
            </SectionCard>
            <SectionCard icon={List} title="Model Selection">
              <p className="text-gray-600 leading-relaxed">
                Press{" "}
                <kbd className="rounded bg-gray-200 px-2 py-0.5 font-mono text-xs font-bold">Ctrl+Shift+M</kbd>{" "}
                to cycle through available AI models. Models are fetched from the
                server (with a local fallback list). The current model is shown
                in the header bar.
              </p>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* 05 — CONFIGURATION */}
      <section className="border-b border-gray-200 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900">
              05. <span className="font-serif italic font-normal">Configuration</span>
            </h2>
          </div>
          <p className="mb-8 text-sm font-medium text-gray-500">
            All preferences are saved to <code className="rounded bg-gray-200 px-2 py-0.5 font-mono text-xs">user-preferences.json</code>{" "}
            and take effect on launch. Configured in the Setup Window.
          </p>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-8">
              <SettingRow setting="DSA/CP Language" options="Java, C++, Python, or custom" />
              <SettingRow setting="Frontend Framework" options="React, Next.js, or custom" />
              <SettingRow setting="Backend Framework" options="Node.js, Spring Boot, or custom" />
              <SettingRow setting="Database" options="MySQL, MongoDB, PostgreSQL, or custom" />
              <SettingRow setting="Answer Style" options="Short &amp; Concise, Balanced, Detailed" />
              <SettingRow setting="Model Selection" options="Gemini Flash, Pro, Advanced" />
              <SettingRow setting="Problem Mode" options="Competitive Programming, Interview Prep, Learning Mode" />
              <SettingRow setting="Code Naming" options="Short or Readable" />
              <SettingRow setting="Comments Level" options="Minimal, Moderate, Detailed" />
              <SettingRow setting="Output Format" options="Code Only, Code + Explanation, Explanation First" />
              <SettingRow setting="Extra Features" options="Test Cases, Edge Cases, Debugging, Optimization, Multiple Approaches" />
              <SettingRow setting="Difficulty" options="Easy, Medium, Hard" />
              <SettingRow setting="Learning Boost" options="Visuals, Analogies, Tips, Follow-up" />
            </div>
          </div>
        </div>
      </section>

      {/* 06 — CLICK-THROUGH MODE */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900">
                  06. Click-Through <span className="font-serif italic font-normal">Mode</span>
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                By default, the overlay lets all clicks pass through to the
                windows underneath. The smart click-through system:
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Automatically disables click-through when your mouse hovers over an interactive area (chat, scrollable response, notes panel)",
                  'Hard lock (Ctrl+Shift+L) overrides this — toggles all input on/off',
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3 text-sm font-medium text-gray-600">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-gray-200 bg-gray-200 px-6 py-4">
                <p className="text-sm font-medium text-gray-600">
                  A <strong>&quot;Click-through&quot;</strong> badge in the header
                  shows the current state.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-2xl border border-gray-200 bg-gray-100 p-4">
                <div className="rounded-xl bg-zinc-950 px-8 py-10 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <MousePointer2 className="h-8 w-8 text-white/50" />
                    <span className="font-mono text-xs font-medium uppercase tracking-wider text-white/40">
                      Click-through: ON
                    </span>
                  </div>
                  <div className="mx-auto mt-6 h-px w-24 bg-gray-100/20" />
                  <div className="mt-4 space-y-2 text-left">
                    <div className="rounded border border-white/20 px-4 py-2">
                      <span className="text-xs font-medium text-green-400">
                        hover = interactive
                      </span>
                    </div>
                    <div className="rounded border border-white/10 px-4 py-2">
                      <span className="text-xs font-medium text-white/30">
                        elsewhere = passthrough
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — TIPS */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900">
              07. Quick <span className="font-serif italic font-normal">Tips</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <TipCard
              icon={Lightbulb}
              text="Screenshot analysis respects your configured preferences — the AI knows your preferred language and stack."
            />
            <TipCard
              icon={Lightbulb}
              text="Voice works best with a good microphone; English (US) speech recognition is configured by default."
            />
            <TipCard
              icon={Lightbulb}
              text="Click-through lock is useful when you want to interact with the response without clicking through to the window below."
            />
            <TipCard
              icon={Lightbulb}
              text="Move the overlay with arrow shortcuts (Ctrl+Shift+Arrow Keys) if it obscures something important."
            />
            <TipCard
              icon={Lightbulb}
              text="Screenshots capture the entire primary display — position relevant content before using the shortcut."
            />
            <TipCard
              icon={Lightbulb}
              text="Your session is restored automatically on subsequent launches for up to 30 days."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-gray-200 bg-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-gray-600">
            Download Bob.io and start your first session in under 30 seconds.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/download"
              className="group inline-flex items-center gap-4 rounded-2xl border border-gray-300 bg-gray-200 px-12 py-5 text-xl font-bold tracking-tight text-gray-900 transition-all hover:shadow-lg"
            >
              <Download className="h-7 w-7" />
              Download Now
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-200 px-8 py-4 font-medium uppercase tracking-wide text-gray-700 transition-all hover:bg-gray-200"
            >
              View Features
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
