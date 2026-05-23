import Link from "next/link";
import {
  Download,
  ArrowRight,
  Brain,
  Eye,
  Zap,
  ChevronRight,
  Check,
  Users,
  ShieldCheck,
  DownloadCloud,
  Quote,
} from "lucide-react";
import { StatsCards } from "@/components/StatsCards";

function StepCard({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 inline-block rounded-lg bg-gray-900 px-3 py-1 font-mono text-sm font-bold text-white">
        {num}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <div className="my-4 h-px w-full bg-gray-200" />
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Brain;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-600">
          New
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <div className="my-4 h-px w-full bg-gray-200" />
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Home() {
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
              className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-500 transition-colors hover:text-gray-900"
            >
              User Manual
            </Link>
            <Link
              href="/download"
              className="rounded-lg bg-gray-900 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-all hover:bg-gray-800"
            >
              Download
            </Link>
          </nav>
          <Link
            href="/download"
            className="rounded-lg border border-gray-300 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-700 md:hidden"
          >
            Download
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            {/* Left — Headline */}
            <div className="relative lg:col-span-3">
              <div className="absolute -left-3 -top-3 h-12 w-12 rounded-lg bg-gray-200" />
              <h1 className="relative text-5xl font-bold leading-[0.95] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                <span className="block">Your interview</span>
                <span className="block font-serif italic font-normal text-6xl sm:text-7xl lg:text-8xl">
                  stealth
                </span>
                <span className="mt-1 block">co-pilot</span>
              </h1>

              {/* Highlight block */}
              <div className="my-8 inline-block rounded-xl bg-gray-100 px-6 py-3 shadow-sm">
                <p className="max-w-md text-base font-medium text-gray-700 leading-snug">
                  Real-time answers. Zero detection. BOB keeps you in the zone
                  while feeding you the perfect responses.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/download"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gray-900 px-10 py-4 text-lg font-bold uppercase tracking-wide text-white shadow-sm transition-all hover:bg-gray-800"
                >
                  <Download className="h-5 w-5" />
                  Download Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 font-medium uppercase tracking-wide text-gray-700 shadow-sm transition-all hover:bg-gray-50"
                >
                  See How It Works
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right — Decorative */}
            <div className="relative flex items-center justify-center lg:col-span-2">
              <div className="absolute -right-4 top-0 h-24 w-24 rounded-lg bg-gray-200" />
              <div className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-md">
                <div className="rounded-xl bg-gray-900 px-6 py-8 text-center">
                  <div
                    className="font-serif italic text-5xl font-bold text-white"
                    style={{ lineHeight: 0.9 }}
                  >
                    BOB
                  </div>
                  <div className="mx-auto mt-2 h-px w-16 bg-white/20" />
                  <div className="mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                    Stealth Pilot
                  </div>
                  <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-xs font-semibold uppercase text-gray-700">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                    Ready
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-lg bg-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <StatsCards />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-12 inline-block rounded-xl bg-gray-900 px-6 py-3 shadow-sm">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
              How It Works
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <StepCard
              num="01"
              title="Install"
              desc="Download the installer. Run it once. BOB is ready in under 30 seconds — no accounts, no paywalls."
            />
            <StepCard
              num="02"
              title="Launch"
              desc="BOB runs silently in the background. Discreet overlay, hotkey-activated. Nobody knows it's there."
            />
            <StepCard
              num="03"
              title="Ace It"
              desc="Real-time suggestions during your interview. Context-aware responses. You walk in confident."
            />
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="border-b border-gray-200 bg-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:py-20">
          <div className="inline-block rounded-lg bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest shadow-sm mb-6">
            Trusted by Students
          </div>
          <blockquote className="relative">
            <Quote className="absolute -left-4 -top-8 h-12 w-12 text-gray-300" />
            <p className="font-serif text-2xl font-bold italic leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
              &ldquo;I got the offer. BOB is the reason. It&rsquo;s that
              simple.&rdquo;
            </p>
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-gray-300" />
            <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
              Sarah K., Software Engineering @ Google
            </span>
            <div className="h-px w-8 bg-gray-300" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-12 inline-block rounded-xl border border-gray-200 bg-white px-6 py-3 shadow-sm">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900 sm:text-3xl">
              Why BOB?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={Brain}
              title="AI-Powered Answers"
              desc="Advanced LLM analyzes the question in real-time and surfaces the best response. No lag, no fluff."
            />
            <FeatureCard
              icon={Eye}
              title="True Stealth Mode"
              desc="Zero footprint. No suspicious windows, no keyboard noise, no traces. It's like it was never there."
            />
            <FeatureCard
              icon={Zap}
              title="One-Click Install"
              desc="No sign-ups, no credit cards, no config. Download, run, and you're live in under 30 seconds."
            />
          </div>

          {/* Extra feature row */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "100% Private" },
              { icon: Users, label: "10K+ Trust BOB" },
              { icon: DownloadCloud, label: "Free Lifetime Updates" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-sm text-gray-900">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="border-b border-gray-200 bg-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:py-20">
          <div className="inline-block rounded-lg bg-white px-5 py-2 shadow-sm text-xs font-semibold uppercase tracking-widest mb-6">
            v2.0.1 Now Available
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 leading-none sm:text-5xl">
            Ready to crush
            <br />
            your interview?
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg text-gray-600 leading-relaxed">
            Join thousands who already leveled the playing field. Download BOB
            and walk into every interview with an edge.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/download"
              className="group inline-flex items-center gap-3 rounded-2xl border border-gray-300 bg-white px-14 py-5 text-xl font-bold tracking-tight text-gray-900 shadow-md transition-all hover:shadow-lg"
            >
              <Download className="h-7 w-7" />
              Get BOB Now
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
            <Link
              href="/how-it-works"
              className="transition-colors hover:text-white"
            >
              How It Works
            </Link>
            <Link
              href="/features"
              className="transition-colors hover:text-white"
            >
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
