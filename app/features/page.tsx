import {
  Download,
  ArrowRight,
  Brain,
  Eye,
  Zap,
  Shield,
  Cpu,
  Monitor,
  Headphones,
  ChevronRight,
  Lock,
  RefreshCw,
  Gauge,
} from "lucide-react";
import Link from "next/link";

function DetailFeature({
  icon: Icon,
  title,
  desc,
  why,
}: {
  icon: typeof Brain;
  title: string;
  desc: string;
  why: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
          Feature
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <div className="my-4 h-px w-full bg-gray-200" />
      <p className="text-gray-600 leading-relaxed">{desc}</p>
      <div className="mt-4 border-t border-gray-200 pt-3">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
          Why it matters
        </span>
        <p className="mt-1 text-sm font-medium text-gray-700">{why}</p>
      </div>
    </div>
  );
}

function MiniSpec({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Cpu;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-700 bg-gray-800 px-6 py-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
          {label}
        </div>
        <div className="font-bold tracking-tight text-white">{value}</div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
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
              className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-500 transition-colors hover:text-gray-900"
            >
              How It Works
            </Link>
            <Link
              href="/features"
              className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-900 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#download"
              className="rounded-lg bg-gray-900 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-all hover:bg-gray-800"
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
              Everything You Need
            </div>
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span className="block">Built for</span>
              <span className="font-serif italic font-normal text-6xl sm:text-7xl lg:text-8xl">
                stealth
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg text-gray-600 leading-relaxed">
              Every feature designed around one thing: giving you the confidence
              to ace any interview without leaving a trace.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <DetailFeature
              icon={Brain}
              title="AI-Powered Answers"
              desc="Advanced LLM analyzes every question in real-time and surfaces the most relevant, contextual responses. No generic answers — BOB adapts to the conversation."
              why="Walk into any interview knowing you'll have the perfect response, every time."
            />
            <DetailFeature
              icon={Eye}
              title="True Stealth Mode"
              desc="BOB leaves zero footprint. No suspicious windows, no keyboard activity patterns, no residual processes. Designed from the ground up to be undetectable."
              why="Interviewers will never know. BOB runs invisibly, even during screen sharing."
            />
            <DetailFeature
              icon={Zap}
              title="Real-Time Processing"
              desc="Sub-500ms response time. BOB processes speech-to-text, analyzes context, and surfaces answers faster than you can blink. No lag, no waiting."
              why="Natural conversation flow. You'll never awkwardly pause waiting for a response."
            />
            <DetailFeature
              icon={Shield}
              title="100% Private"
              desc="All audio processing happens locally on your machine. No recordings are stored. No data leaves your computer without your explicit consent."
              why="Your privacy is non-negotiable. BOB never shares or stores your interview data."
            />
            <DetailFeature
              icon={Monitor}
              title="Cross-Platform"
              desc="Native apps for Windows, macOS, and Linux. Same experience, same performance, same stealth across every operating system."
              why="Use whatever machine you're comfortable with. BOB works everywhere."
            />
            <DetailFeature
              icon={Headphones}
              title="Audio Optimized"
              desc="Advanced noise cancellation and speech recognition tuned for interview environments. Works with built-in mics, headsets, and external microphones."
              why="Clear transcription even in noisy environments or with low-quality microphones."
            />
          </div>
        </div>
      </section>

      {/* SPECS STRIP */}
      <section className="border-b border-gray-200 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-lg border border-gray-700 px-6 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-sm">
              Technical Specifications
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MiniSpec
              icon={Gauge}
              label="Response Time"
              value="&lt; 500ms"
            />
            <MiniSpec
              icon={Cpu}
              label="CPU Usage"
              value="2-5% avg"
            />
            <MiniSpec
              icon={Lock}
              label="Encryption"
              value="AES-256"
            />
            <MiniSpec
              icon={RefreshCw}
              label="Updates"
              value="Lifetime Free"
            />
          </div>
        </div>
      </section>

      {/* WHAT USERS SAY */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-10 inline-block rounded-xl border border-gray-200 bg-white px-6 py-3 shadow-sm">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900">
              Trusted by <span className="font-serif italic font-normal">thousands</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "BOB completely changed how I prepare. Landed my dream job at Microsoft.",
                author: "Priya R.",
                role: "Software Engineer",
              },
              {
                quote:
                  "The stealth mode is insane. I tested it with screen sharing on — completely invisible.",
                author: "Alex M.",
                role: "Product Manager",
              },
              {
                quote:
                  "Worth every penny. Actually, it's free. That's just unfair for everyone else.",
                author: "Jason T.",
                role: "Data Scientist",
              },
            ].map(({ quote, author, role }) => (
              <div
                key={author}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg text-yellow-500">★</span>
                  ))}
                </div>
                <p className="font-medium text-gray-700 leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="mt-6 h-px w-full bg-gray-200" />
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-xs font-bold text-white">
                    {author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{author}</div>
                    <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-gray-200 bg-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to level up?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-gray-600">
            25MB download. 30-second install. Zero risk.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#download"
              className="group inline-flex items-center gap-4 rounded-2xl border border-gray-300 bg-white px-12 py-5 text-xl font-bold tracking-tight text-gray-900 shadow-md transition-all hover:shadow-lg"
            >
              <Download className="h-7 w-7" />
              Download Free
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 font-medium uppercase tracking-wide text-gray-700 shadow-sm transition-all hover:bg-gray-50"
            >
              How It Works
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-gray-900 py-10">
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
