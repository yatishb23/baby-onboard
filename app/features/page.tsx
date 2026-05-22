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
  color,
}: {
  icon: typeof Brain;
  title: string;
  desc: string;
  why: string;
  color: string;
}) {
  return (
    <div className="group border-4 border-black bg-white p-6 shadow-hard transition-all hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#000]">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-black">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div
          className="border-4 border-black px-2 py-1 text-[10px] font-black uppercase tracking-widest"
          style={{ backgroundColor: color }}
        >
          Feature
        </div>
      </div>
      <h3 className="text-xl font-black uppercase tracking-tight">{title}</h3>
      <div className="my-4 h-[3px] w-full bg-black" />
      <p className="font-medium leading-relaxed text-black/70">{desc}</p>
      <div className="mt-4 border-t-4 border-black pt-3">
        <span className="text-[10px] font-black uppercase tracking-widest text-black/40">
          Why it matters
        </span>
        <p className="mt-1 text-sm font-bold">{why}</p>
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
    <div className="flex items-center gap-4 border-4 border-black bg-white px-6 py-5 shadow-hard">
      <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-black">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <div className="text-[10px] font-black uppercase tracking-widest text-black/40">
          {label}
        </div>
        <div className="font-black tracking-tight">{value}</div>
      </div>
    </div>
  );
}

export default function Features() {
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
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
            >
              How It Works
            </Link>
            <Link
              href="/features"
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors"
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
            <div className="mb-8 inline-block border-4 border-black bg-yellow-bright px-6 py-3 shadow-hard text-xs font-black uppercase tracking-widest">
              Everything You Need
            </div>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl">
              <span className="block">Built for</span>
              <span className="font-serif italic font-normal text-6xl sm:text-7xl lg:text-8xl">
                stealth
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg font-medium leading-relaxed text-black/70">
              Every feature designed around one thing: giving you the confidence
              to ace any interview without leaving a trace.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <DetailFeature
              icon={Brain}
              title="AI-Powered Answers"
              desc="Advanced LLM analyzes every question in real-time and surfaces the most relevant, contextual responses. No generic answers — BOB adapts to the conversation."
              why="Walk into any interview knowing you'll have the perfect response, every time."
              color="#C7F36B"
            />
            <DetailFeature
              icon={Eye}
              title="True Stealth Mode"
              desc="BOB leaves zero footprint. No suspicious windows, no keyboard activity patterns, no residual processes. Designed from the ground up to be undetectable."
              why="Interviewers will never know. BOB runs invisibly, even during screen sharing."
              color="#FFE600"
            />
            <DetailFeature
              icon={Zap}
              title="Real-Time Processing"
              desc="Sub-500ms response time. BOB processes speech-to-text, analyzes context, and surfaces answers faster than you can blink. No lag, no waiting."
              why="Natural conversation flow. You'll never awkwardly pause waiting for a response."
              color="#C7F36B"
            />
            <DetailFeature
              icon={Shield}
              title="100% Private"
              desc="All audio processing happens locally on your machine. No recordings are stored. No data leaves your computer without your explicit consent."
              why="Your privacy is non-negotiable. BOB never shares or stores your interview data."
              color="#FFE600"
            />
            <DetailFeature
              icon={Monitor}
              title="Cross-Platform"
              desc="Native apps for Windows, macOS, and Linux. Same experience, same performance, same stealth across every operating system."
              why="Use whatever machine you're comfortable with. BOB works everywhere."
              color="#C7F36B"
            />
            <DetailFeature
              icon={Headphones}
              title="Audio Optimized"
              desc="Advanced noise cancellation and speech recognition tuned for interview environments. Works with built-in mics, headsets, and external microphones."
              why="Clear transcription even in noisy environments or with low-quality microphones."
              color="#FFE600"
            />
          </div>
        </div>
      </section>

      {/* SPECS STRIP */}
      <section className="border-b-4 border-black bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 text-center">
            <span className="inline-block border-4 border-white px-6 py-2 text-xs font-black uppercase tracking-widest text-white shadow-hard">
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
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-10 inline-block border-4 border-black bg-white px-6 py-3 shadow-hard">
            <h2 className="text-2xl font-black uppercase tracking-tighter">
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
                className="border-4 border-black bg-white p-6 shadow-hard hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#000] transition-all"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg font-black">★</span>
                  ))}
                </div>
                <p className="font-bold leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="mt-6 h-[2px] w-full bg-black" />
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border-4 border-black bg-black text-xs font-black text-white">
                    {author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-black">{author}</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-black/50">
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
      <section className="border-b-4 border-black bg-green-accent">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-black tracking-tighter sm:text-4xl">
            Ready to level up?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg font-medium text-black/70">
            25MB download. 30-second install. Zero risk.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#download"
              className="group inline-flex items-center gap-4 border-8 border-black bg-white px-12 py-5 text-xl font-black uppercase tracking-tight text-black shadow-hard-xl transition-all hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_#000]"
            >
              <Download className="h-7 w-7" />
              Download Free
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 border-4 border-black bg-white px-8 py-4 font-bold uppercase tracking-wide shadow-hard transition-all hover:translate-y-[-3px] hover:shadow-[10px_10px_0px_#000]"
            >
              How It Works
              <ChevronRight className="h-4 w-4" />
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
