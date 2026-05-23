import {
  Download,
  ArrowRight,
  Monitor,
  Zap,
  Check,
  Terminal,
  Eye,
  Cpu,
  Shield,
} from "lucide-react";
import Link from "next/link";

function StepCard({
  num,
  title,
  desc,
  details,
  icon: Icon,
}: {
  num: string;
  title: string;
  desc: string;
  details: string[];
  icon: typeof Monitor;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="rounded-lg bg-gray-200 px-3 py-1 font-mono text-sm font-bold text-gray-700">
          {num}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <div className="my-4 h-px w-full bg-gray-200" />
      <p className="mb-6 text-gray-600 leading-relaxed">{desc}</p>
      <ul className="space-y-2 border-t border-gray-200 pt-4">
        {details.map((detail) => (
          <li key={detail} className="flex items-start gap-3 text-sm font-medium text-gray-600">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SpecRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-gray-200 py-3">
      <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
        {label}
      </span>
      <span className="text-right font-medium text-gray-900">{value}</span>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              BOB
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.25em] text-gray-400 sm:block">
              Stealth Pilot
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/how-it-works"
              className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-900 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/features"
              className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-500 transition-colors hover:text-gray-900"
            >
              User Manual
            </Link>
            <Link
              href="/#download"
              className="rounded-lg bg-zinc-200 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-900 transition-all hover:bg-zinc-300"
            >
              Download
            </Link>
          </nav>
          <Link
            href="/#download"
            className="rounded-lg border border-gray-300 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-700 md:hidden"
          >
            Download
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-block rounded-xl bg-gray-100 px-6 py-3 shadow-sm text-xs font-semibold uppercase tracking-widest text-gray-700">
              Three Simple Steps
            </div>
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span className="block">How it</span>
              <span className="font-serif italic font-normal text-6xl sm:text-7xl lg:text-8xl">
                works
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg text-gray-600 leading-relaxed">
              From download to live in under 60 seconds. No accounts, no
              configuration, no headaches.
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            <StepCard
              num="01"
              title="Install"
              desc="Download the installer for your OS and run it. BOB is ready in under 30 seconds."
              details={[
                "25MB download — takes seconds",
                "No accounts or sign-ups required",
                "Works on Windows, macOS, Linux",
                "No admin rights needed",
              ]}
              icon={Download}
            />
            <StepCard
              num="02"
              title="Launch"
              desc="Start BOB and it runs silently in the background. Access it anytime with a hotkey."
              details={[
                "Hotkey-activated overlay (Ctrl+Space)",
                "Fully discreet — no visible windows",
                "Customizable shortcut keys",
                "Auto-starts with your system",
              ]}
              icon={Terminal}
            />
            <StepCard
              num="03"
              title="Ace It"
              desc="BOB listens, analyzes, and feeds you answers in real-time during interviews."
              details={[
                "Real-time speech-to-text analysis",
                "Context-aware response suggestions",
                "Zero delay processing",
                "Invisible to screen-sharing software",
              ]}
              icon={Zap}
            />
          </div>
        </div>
      </section>

      {/* VISUAL FLOW */}
      <section className="border-b border-gray-200 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-12 w-12 rounded-lg bg-gray-200" />
              <h2 className="relative text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">What happens</span>
                <span className="font-serif italic font-normal text-4xl sm:text-5xl lg:text-6xl">
                  under the hood
                </span>
              </h2>
              <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                BOB uses advanced speech recognition and LLM processing to
                analyze interview questions in real-time. It surfaces the most
                relevant, tailored responses directly to your screen — all while
                leaving zero traces.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {[
                  { icon: Eye, text: "Undetectable by screen-sharing software" },
                  { icon: Shield, text: "All processing happens locally" },
                  { icon: Cpu, text: "Optimized for low CPU usage" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-200 px-6 py-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-sm text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="rounded-2xl border border-gray-200 bg-gray-100 p-4 shadow-md">
                <div className="rounded-xl bg-zinc-950 px-8 py-10 text-center">
                  <div
                    className="font-serif italic text-4xl font-bold text-white sm:text-5xl"
                    style={{ lineHeight: 0.9 }}
                  >
                    Q &amp; A
                  </div>
                  <div className="mx-auto mt-4 h-px w-24 bg-gray-100/20" />
                  <div className="mt-4 space-y-3 text-left">
                    {[
                      { q: "Question", s: "analyzing..." },
                      { q: "Answer", s: "ready" },
                    ].map(({ q, s }) => (
                      <div
                        key={q}
                        className="flex items-center justify-between rounded border border-white/20 px-4 py-2"
                      >
                        <span className="text-xs font-medium uppercase tracking-wider text-white/50">
                          {q}
                        </span>
                        <span className="text-xs font-medium text-green-400">
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM REQUIREMENTS */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 inline-block rounded-xl border border-gray-200 bg-gray-100 px-6 py-3 shadow-sm">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900">
                System <span className="font-serif italic font-normal">requirements</span>
              </h2>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-8 shadow-sm">
              <SpecRow label="OS" value="Windows 10+ / macOS 12+ / Linux" />
              <SpecRow label="RAM" value="4GB minimum" />
              <SpecRow label="Storage" value="200MB available" />
              <SpecRow label="Microphone" value="Required for audio input" />
              <SpecRow label="Internet" value="Required for AI processing" />
              <SpecRow label="Download Size" value="25MB" />
            </div>
            <p className="mt-6 text-sm font-medium text-gray-400 text-center">
              Most modern laptops and desktops meet these requirements.
            </p>
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
            Takes 30 seconds to install. No credit card. No catch.
          </p>
          <div className="mt-10">
            <Link
              href="/#download"
              className="group inline-flex items-center gap-3 rounded-2xl border border-gray-300 bg-gray-200 px-12 py-5 text-xl font-bold tracking-tight text-gray-900 shadow-md transition-all hover:shadow-lg"
            >
              <Download className="h-7 w-7" />
              Install BOB Now
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-zinc-950 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="text-xl font-bold tracking-tight text-white">
              BOB
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gray-400">
              Stealth Pilot
            </span>
          </Link>
          <div className="flex gap-8 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-400">
            <Link href="/how-it-works" className="transition-colors hover:text-white">
              How It Works
            </Link>
            <Link href="/features" className="transition-colors hover:text-white">
              Features
            </Link>
            <a href="#" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Twitter
            </a>
          </div>
          <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500">
            &copy; 2026 Baby Onboard
          </p>
        </div>
      </footer>
    </div>
  );
}
