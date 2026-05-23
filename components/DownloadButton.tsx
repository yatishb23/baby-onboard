"use client";

import { Download } from "lucide-react";

export function DownloadButton() {
  const handleClick = async () => {
    await fetch("/api/track/download", { method: "POST" });
    window.open(
      "https://github.com/yatishb23/baby-onboard/releases/download/Pre-release/Bob.io-1.3.0-Setup.msi",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="group inline-flex items-center gap-3 rounded-2xl border border-gray-300 bg-gray-200 px-14 py-5 text-xl font-bold tracking-tight text-gray-900 shadow-md transition-all hover:shadow-lg"
    >
      <Download className="h-7 w-7" />
      Install BOB Now
    </button>
  );
}
