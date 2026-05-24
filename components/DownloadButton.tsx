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
    <button onClick={handleClick} className="btn btn-primary">
      <Download size={18} />
      Install BOB Now
    </button>
  );
}
