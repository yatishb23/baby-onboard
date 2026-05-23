"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "bob_visitor";

export function VisitTracker() {
  const pathname = usePathname();
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    fetch("/api/track/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname }),
    })
      .then(() => {
        localStorage.setItem(STORAGE_KEY, "1");
        tracked.current = true;
      })
      .catch(() => {});
  }, [pathname]);

  return null;
}
