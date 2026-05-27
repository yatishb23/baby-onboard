"use client";

import { Download } from "lucide-react";

export function DownloadButton() {
  const handleClick = async () => {
    await fetch("/api/track/download", { method: "POST" });
    try {
      const res = await fetch("/api/latest-release");
      const data = await res.json();
      if (data.url) window.open(data.url, "_blank");
    } catch {
      window.open(
        "https://github.com/yatishb23/baby-onboard/releases/latest",
        "_blank"
      );
    }
  };

  return (
    <button onClick={handleClick} className="btn btn-primary">
      <Download size={18} />
      Install BOB Now
    </button>
  );
}
