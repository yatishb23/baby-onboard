import Link from "next/link";
import { GenerateKeyButton } from "@/components/GenerateKeyButton";
import { DownloadButton } from "@/components/DownloadButton";
import { Download, Check } from "lucide-react";

export default function DownloadPage() {
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
          </nav>
        </div>
      </header>

      {/* DOWNLOAD SECTION */}
      <section className="border-b border-gray-200 bg-gray-100 min-h-[calc(100vh-80px)] flex flex-col justify-center">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:py-20">
          <div className="inline-block rounded-lg bg-gray-200 px-5 py-2 shadow-sm text-xs font-semibold uppercase tracking-widest mb-6">
            v2.0.1 Now Available
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-none sm:text-6xl md:text-7xl">
            Get Ready to Crush
            <br />
            Your Interview
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg font-medium text-gray-700 leading-relaxed">
            Download BOB and generate your unique access key. Walk into every
            interview with an unfair advantage.
          </p>

          {/* Compatibility row */}
          <div className="mx-auto mt-10 inline-flex flex-wrap items-center justify-center gap-3 rounded-xl border border-gray-200 bg-gray-200 px-8 py-4 shadow-sm font-medium text-xs uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-gray-700">
              <Check className="h-3.5 w-3.5 text-green-500" /> Windows
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1.5 text-gray-700">
              <Check className="h-3.5 w-3.5 text-green-500" /> macOS
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1.5 text-gray-700">
              <Check className="h-3.5 w-3.5 text-green-500" /> Linux
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-700">Size: 25MB</span>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <DownloadButton />
            <p className="text-sm font-medium text-gray-400">
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
