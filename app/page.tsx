import Link from "next/link";
import {
  Download,
  ArrowRight,
  Brain,
  Eye,
  Zap,
  ShieldCheck,
  Users,
  DownloadCloud,
} from "lucide-react";
import { StatsCards } from "@/components/StatsCards";
import { ReviewsSection } from "@/components/ReviewsSection";

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
    <div className="rounded-xl border border-gray-200 bg-gray-100 p-6">
      <div className="mb-3 inline-block rounded-lg bg-zinc-800 px-3 py-1 font-mono text-sm font-bold text-zinc-200">
        {num}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600 leading-relaxed">{desc}</p>
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
    <div className="rounded-xl border border-gray-200 bg-gray-100 p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <section className="overflow-hidden border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                <span className="block">Your interview</span>
                <span className="block font-serif italic font-normal text-6xl sm:text-7xl lg:text-8xl">
                  stealth
                </span>
                <span className="mt-1 block">co-pilot</span>
              </h1>

              <p className="my-8 max-w-md text-base font-medium text-gray-700 leading-snug">
                Real-time answers. Zero detection. BOB keeps you in the zone
                while feeding you the perfect responses.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/download"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-zinc-200 px-10 py-4 text-lg font-bold uppercase tracking-wide text-zinc-900 transition-all hover:bg-zinc-300"
                >
                  <Download className="h-5 w-5" />
                  Download Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-gray-100 px-8 py-4 font-medium uppercase tracking-wide text-gray-700 transition-all hover:bg-gray-200"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center lg:col-span-2">
              <div className="rounded-2xl border border-gray-200 bg-gray-100 p-4">
                <div className="rounded-xl bg-zinc-950 px-6 py-8 text-center">
                  <div
                    className="font-serif italic text-5xl font-bold text-white"
                    style={{ lineHeight: 0.9 }}
                  >
                    BOB
                  </div>
                  <div className="mx-auto mt-2 h-px w-16 bg-gray-100/20" />
                  <div className="mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                    Stealth Pilot
                  </div>
                  <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-xs font-semibold uppercase text-gray-700">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                    Ready
                  </div>
                </div>
              </div>
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
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900 sm:text-3xl">
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

      {/* REVIEWS */}
      <ReviewsSection />

      {/* FEATURES */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-12">
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

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "100% Private" },
              { icon: Users, label: "10K+ Trust BOB" },
              { icon: DownloadCloud, label: "Free Lifetime Updates" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-100 px-6 py-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
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

      {/* CTA */}
      <section className="border-b border-gray-200 bg-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:py-20">
          <div className="mb-6 inline-block rounded-lg bg-gray-200 px-5 py-2 text-xs font-semibold uppercase tracking-widest">
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
              className="group inline-flex items-center gap-3 rounded-2xl border border-gray-300 bg-gray-200 px-14 py-5 text-xl font-bold tracking-tight text-gray-900 transition-all hover:shadow-lg"
            >
              <Download className="h-7 w-7" />
              Get BOB Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
