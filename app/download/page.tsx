import Link from "next/link";
import { GenerateKeyButton } from "@/components/GenerateKeyButton";
import { Download, Check } from "lucide-react";

export default function DownloadPage() {
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
          </nav>
        </div>
      </header>

      {/* DOWNLOAD SECTION */}
      <section className="border-b-4 border-black bg-green-accent min-h-[calc(100vh-80px)] flex flex-col justify-center">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:py-20">
          <div className="inline-block border-4 border-black bg-white px-5 py-2 shadow-hard text-xs font-black uppercase tracking-widest mb-6">
            v2.0.1 Now Available
          </div>

          <h1 className="text-5xl font-black tracking-tighter leading-none sm:text-6xl md:text-7xl">
            Get Ready to Crude
            <br />
            Your Interview
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg font-bold leading-relaxed text-black/80">
            Download BOB and generate your unique access key. Walk into every
            interview with an unfair advantage.
          </p>

          {/* Compatibility row */}
          <div className="mx-auto mt-10 inline-flex flex-wrap items-center justify-center gap-3 border-4 border-black bg-white px-8 py-4 shadow-hard font-bold text-xs uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5" /> Windows
            </span>
            <span className="text-black/30">|</span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5" /> macOS
            </span>
            <span className="text-black/30">|</span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5" /> Linux
            </span>
            <span className="text-black/30">|</span>
            <span>Size: 25MB</span>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <a
              href="#"
              className="group inline-flex items-center gap-3 border-8 border-black bg-white px-14 py-5 text-xl font-black uppercase tracking-tight text-black shadow-hard-xl transition-all hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_#000]"
            >
              <Download className="h-7 w-7" />
              Install BOB Now
            </a>
            <p className="text-sm font-bold text-black/50">
              Free download &middot; No credit card &middot; Lifetime updates
            </p>
          </div>

          {/* Access Key Section */}
          <div className="mx-auto mt-16 max-w-md w-full text-left">
            <GenerateKeyButton />
          </div>
        </div>
      </section>
    </div>
  );
}
