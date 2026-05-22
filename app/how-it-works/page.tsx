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
  color,
}: {
  num: string;
  title: string;
  desc: string;
  details: string[];
  icon: typeof Monitor;
  color: string;
}) {
  return (
    <div className="group border-4 border-black bg-white p-6 shadow-hard transition-all hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#000]">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-black">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div
          className="border-4 border-black px-3 py-1 font-mono text-xl font-black"
          style={{ backgroundColor: color }}
        >
          {num}
        </div>
      </div>
      <h3 className="text-xl font-black uppercase tracking-tight">
        {title}
      </h3>
      <div className="my-4 h-[3px] w-full bg-black" />
      <p className="mb-6 font-medium leading-relaxed text-black/70">{desc}</p>
      <ul className="space-y-2 border-t-4 border-black pt-4">
        {details.map((detail) => (
          <li key={detail} className="flex items-start gap-3 text-sm font-bold">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-black/60" />
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
    <div className="flex items-baseline justify-between gap-4 border-b-4 border-black py-3">
      <span className="text-xs font-bold uppercase tracking-wider text-black/50">
        {label}
      </span>
      <span className="text-right font-bold">{value}</span>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="bg-dot-grid min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b-4 border-black bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="text-2xl font-black tracking-tighter text-white">
              BOB
            </span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 sm:block">
              Stealth Pilot
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/how-it-works"
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/features"
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
            >
              Features
            </Link>
            <Link
              href="/#download"
              className="border-4 border-white bg-white px-5 py-2 text-[11px] font-black uppercase tracking-[0.1em] text-black transition-all hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#000]"
            >
              Download
            </Link>
          </nav>
          <Link
            href="/#download"
            className="border-4 border-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.1em] text-white md:hidden"
          >
            Download
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-block border-4 border-black bg-green-accent px-6 py-3 shadow-hard text-xs font-black uppercase tracking-widest">
              Three Simple Steps
            </div>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl">
              <span className="block">How it</span>
              <span className="font-serif italic font-normal text-6xl sm:text-7xl lg:text-8xl">
                works
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg font-medium leading-relaxed text-black/70">
              From download to live in under 60 seconds. No accounts, no
              configuration, no headaches.
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="border-b-4 border-black">
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
              color="#C7F36B"
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
              color="#FFE600"
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
              color="#C7F36B"
            />
          </div>
        </div>
      </section>

      {/* VISUAL FLOW */}
      <section className="border-b-4 border-black bg-yellow-bright">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-12 w-12 border-4 border-black bg-green-accent" />
              <h2 className="relative text-3xl font-black tracking-tighter sm:text-4xl">
                <span className="block">What happens</span>
                <span className="font-serif italic font-normal text-4xl sm:text-5xl lg:text-6xl">
                  under the hood
                </span>
              </h2>
              <p className="mt-8 text-lg font-medium leading-relaxed text-black/70">
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
                    className="flex items-center gap-4 border-4 border-black bg-white px-6 py-4 shadow-hard"
                  >
                    <div className="flex h-10 w-10 items-center justify-center border-4 border-black bg-black">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="border-8 border-black bg-white p-4 shadow-hard-xl -rotate-1 transition-all hover:rotate-0">
                <div className="border-4 border-black bg-black px-8 py-10 text-center">
                  <div
                    className="font-serif italic text-4xl font-bold text-white sm:text-5xl"
                    style={{ lineHeight: 0.9 }}
                  >
                    Q &amp; A
                  </div>
                  <div className="mx-auto mt-4 h-[2px] w-24 bg-white/20" />
                  <div className="mt-4 space-y-3 text-left">
                    {[
                      { q: "Question", s: "analyzing..." },
                      { q: "Answer", s: "ready" },
                    ].map(({ q, s }) => (
                      <div
                        key={q}
                        className="flex items-center justify-between border-2 border-white/20 px-4 py-2"
                      >
                        <span className="text-xs font-bold uppercase tracking-wider text-white/50">
                          {q}
                        </span>
                        <span className="text-xs font-bold text-green-accent">
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
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 inline-block border-4 border-black bg-white px-6 py-3 shadow-hard">
              <h2 className="text-2xl font-black uppercase tracking-tighter">
                System <span className="font-serif italic font-normal">requirements</span>
              </h2>
            </div>
            <div className="border-4 border-black bg-white p-8 shadow-hard">
              <SpecRow label="OS" value="Windows 10+ / macOS 12+ / Linux" />
              <SpecRow label="RAM" value="4GB minimum" />
              <SpecRow label="Storage" value="200MB available" />
              <SpecRow label="Microphone" value="Required for audio input" />
              <SpecRow label="Internet" value="Required for AI processing" />
              <SpecRow label="Download Size" value="25MB" />
            </div>
            <p className="mt-6 text-sm font-bold text-black/50 text-center">
              Most modern laptops and desktops meet these requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b-4 border-black bg-green-accent">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-black tracking-tighter sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg font-medium text-black/70">
            Takes 30 seconds to install. No credit card. No catch.
          </p>
          <div className="mt-10">
            <Link
              href="/#download"
              className="group inline-flex items-center gap-3 border-8 border-black bg-white px-12 py-5 text-xl font-black uppercase tracking-tight text-black shadow-hard-xl transition-all hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_#000]"
            >
              <Download className="h-7 w-7" />
              Install BOB Now
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-black bg-black py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="text-xl font-black tracking-tighter text-white">
              BOB
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              Stealth Pilot
            </span>
          </Link>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">
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
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
            &copy; 2026 Baby Onboard
          </p>
        </div>
      </footer>
    </div>
  );
}
