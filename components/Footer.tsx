import Link from "next/link";

export default function Footer() {
  return (
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
  );
}
