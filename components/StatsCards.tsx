"use client";

import { useEffect, useState } from "react";

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export function StatsCards() {
  const [stats, setStats] = useState({ visits: 0, downloads: 0, rating: 4.9 });

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((data) => setStats((s) => ({ ...s, ...data })))
      .catch(() => {});
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => setStats((s) => ({ ...s, rating: data.averageRating })))
      .catch(() => {});
  }, []);

  return (
    <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr 1fr" }}>
      <StatCard number={stats.visits.toLocaleString() + "+"} label="Site Visits" />
      <StatCard number={stats.rating.toFixed(1)} label="Avg. Rating" />
      <StatCard number={stats.downloads.toLocaleString()} label="Downloads" />
    </div>
  );
}
