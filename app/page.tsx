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

function StatCard({
  number,
  label,
  rotate = "0deg",
}: {
  number: string;
  label: string;
  rotate?: string;
}) {
  return (
    <div
      className="border-4 border-black bg-white px-8 py-6 shadow-hard transition-all hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#000]"
      style={{ transform: `rotate(${rotate})` }}
    >
      <div className="text-4xl font-black tracking-tighter sm:text-5xl">
        {number}
      </div>
      <div className="my-2 h-1 w-10 bg-black" />
      <div className="text-sm font-bold uppercase tracking-wider text-black/60">
        {label}
      </div>
    </div>
  );
}

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
    <div className="group border-4 border-black bg-white p-6 shadow-hard transition-all hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#000]">
      <div className="mb-3 inline-block border-4 border-black bg-black px-3 py-1 font-mono text-xl font-black text-white">
        {num}
      </div>
      <h3 className="text-xl font-black uppercase tracking-tight">{title}</h3>
      <div className="my-4 h-[3px] w-full bg-black" />
      <p className="font-medium leading-relaxed text-black/70">{desc}</p>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
  highlight,
}: {
  icon: typeof Brain;
  title: string;
  desc: string;
  highlight: string;
}) {
  return (
    <div className="group border-4 border-black bg-white p-6 shadow-hard transition-all hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#000]">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-black">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div
          className="border-4 border-black px-2 py-1 text-[10px] font-black uppercase tracking-wider"
          style={{ backgroundColor: highlight }}
        >
          New
        </div>
      </div>
      <h3 className="text-lg font-black uppercase tracking-tight">{title}</h3>
      <div className="my-4 h-[3px] w-full bg-black" />
      <p className="font-medium leading-relaxed text-black/70">{desc}</p>
    </div>
  );
}

export default function Home() {
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
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
            >
              Features
            </Link>
            <Link
              href="/download"
              className="border-4 border-white bg-white px-5 py-2 text-[11px] font-black uppercase tracking-[0.1em] text-black transition-all hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#000]"
            >
              Download
            </Link>
          </nav>
          <Link
            href="/download"
            className="border-4 border-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.1em] text-white md:hidden"
          >
            Download
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            {/* Left — Headline */}
            <div className="relative lg:col-span-3">
              <div className="absolute -left-3 -top-3 h-12 w-12 border-4 border-black bg-green-accent" />
              <h1 className="relative text-5xl font-black leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl">
                <span className="block">Your interview</span>
                <span className="block font-serif italic font-normal text-6xl sm:text-7xl lg:text-8xl">
                  stealth
                </span>
                <span className="mt-1 block">co-pilot</span>
              </h1>

              {/* Yellow highlight block */}
              <div className="my-8 inline-block border-4 border-black bg-yellow-bright px-6 py-3 shadow-hard -rotate-1 hover:rotate-0 transition-all">
                <p className="max-w-md text-base font-bold leading-snug">
                  Real-time answers. Zero detection. BOB keeps you in the zone
                  while feeding you the perfect responses.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/download"
                  className="group inline-flex items-center justify-center gap-3 border-4 border-black bg-black px-10 py-4 text-lg font-black uppercase tracking-wide text-white shadow-hard transition-all hover:translate-y-[-3px] hover:shadow-[10px_10px_0px_#000]"
                >
                  <Download className="h-5 w-5" />
                  Download Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 border-4 border-black bg-white px-8 py-4 font-bold uppercase tracking-wide shadow-hard transition-all hover:translate-y-[-3px] hover:shadow-[10px_10px_0px_#000]"
                >
                  See How It Works
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right — Decorative */}
            <div className="relative flex items-center justify-center lg:col-span-2">
              <div className="absolute -right-4 top-0 h-24 w-24 border-4 border-black bg-green-accent animate-float" />
              <div className="relative border-8 border-black bg-white p-4 shadow-hard-xl rotate-2 transition-all hover:rotate-0">
                <div className="border-4 border-black bg-black px-6 py-8 text-center">
                  <div
                    className="font-serif italic text-5xl font-bold text-white"
                    style={{ lineHeight: 0.9 }}
                  >
                    BOB
                  </div>
                  <div className="mx-auto mt-2 h-[2px] w-16 bg-white/30" />
                  <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                    Stealth Pilot
                  </div>
                  <div className="mx-auto mt-6 inline-flex items-center gap-2 border-4 border-green-accent bg-green-accent px-4 py-2 font-black text-xs uppercase text-black">
                    <span className="inline-block h-2 w-2 rounded-full bg-black" />
                    Ready
                  </div>
                </div>
              </div>
              {/* Offset decorative */}
              <div className="absolute -bottom-4 -left-4 h-12 w-12 border-4 border-black bg-yellow-bright" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-3">
            <StatCard number="10K+" label="Active Users" />
            <StatCard number="4.9" label="Avg. Rating" rotate="1deg" />
            <StatCard number="Zero" label="Detections" rotate="-1deg" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-12 inline-block border-4 border-black bg-black px-6 py-3 shadow-hard -rotate-1">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white sm:text-3xl">
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
      <section className="border-b-4 border-black bg-yellow-bright">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:py-20">
          <div className="inline-block border-4 border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-widest shadow-hard mb-6">
            Trusted by Students
          </div>
          <blockquote className="relative">
            <Quote className="absolute -left-4 -top-8 h-12 w-12 text-black/20" />
            <p className="font-serif text-2xl font-bold italic leading-snug sm:text-3xl lg:text-4xl">
              &ldquo;I got the offer. BOB is the reason. It&rsquo;s that
              simple.&rdquo;
            </p>
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-[2px] w-8 bg-black" />
            <span className="text-sm font-bold uppercase tracking-wider">
              Sarah K., Software Engineering @ Google
            </span>
            <div className="h-[2px] w-8 bg-black" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-12 inline-block border-4 border-black bg-white px-6 py-3 shadow-hard rotate-1">
            <h2 className="text-2xl font-black uppercase tracking-tighter sm:text-3xl">
              Why BOB?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={Brain}
              title="AI-Powered Answers"
              desc="Advanced LLM analyzes the question in real-time and surfaces the best response. No lag, no fluff."
              highlight="#C7F36B"
            />
            <FeatureCard
              icon={Eye}
              title="True Stealth Mode"
              desc="Zero footprint. No suspicious windows, no keyboard noise, no traces. It's like it was never there."
              highlight="#FFE600"
            />
            <FeatureCard
              icon={Zap}
              title="One-Click Install"
              desc="No sign-ups, no credit cards, no config. Download, run, and you're live in under 30 seconds."
              highlight="#C7F36B"
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
                className="flex items-center gap-4 border-4 border-black bg-white px-6 py-4 shadow-hard"
              >
                <div className="flex h-10 w-10 items-center justify-center border-4 border-black bg-black">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="font-black uppercase text-sm tracking-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="border-b-4 border-black bg-green-accent">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:py-20">
          <div className="inline-block border-4 border-black bg-white px-5 py-2 shadow-hard text-xs font-black uppercase tracking-widest mb-6">
            v2.0.1 Now Available
          </div>

          <h2 className="text-4xl font-black tracking-tighter leading-none sm:text-5xl">
            Ready to crush
            <br />
            your interview?
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg font-medium leading-relaxed text-black/70">
            Join thousands who already leveled the playing field. Download BOB
            and walk into every interview with an edge.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/download"
              className="group inline-flex items-center gap-3 border-8 border-black bg-white px-14 py-5 text-xl font-black uppercase tracking-tight text-black shadow-hard-xl transition-all hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_#000]"
            >
              <Download className="h-7 w-7" />
              Get BOB Now
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
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
            &copy; 2026 Baby Onboard
          </p>
        </div>
      </footer>
    </div>
  );
}
