"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/features", label: "User Manual" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-gray-50/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="flex items-baseline gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="text-xl font-bold tracking-tight text-gray-900">
            BOB
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.25em] text-gray-400 sm:block">
            Stealth Pilot
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-[11px] font-medium uppercase tracking-[0.15em] transition-colors ${
                  active
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/download"
            className="rounded-lg bg-zinc-200 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-900 transition-all hover:bg-zinc-300"
          >
            Download
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center rounded-lg border border-gray-300 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-5 w-5 text-gray-700" />
          ) : (
            <Menu className="h-5 w-5 text-gray-700" />
          )}
        </button>
      </div>

      {open && (
        <div className="animate-in slide-in-from-top-2 border-t border-gray-200 bg-gray-50 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/download"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-zinc-200 px-4 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-300"
            >
              Download
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
