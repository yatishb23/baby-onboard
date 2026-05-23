"use client";

import { useEffect, useState } from "react";

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white px-8 py-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {number}
      </div>
      <div className="my-2 h-px w-10 bg-gray-200" />
      <div className="text-sm font-medium text-gray-500">{label}</div>
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
    <div className="grid gap-6 sm:grid-cols-3">
      <StatCard number={stats.visits.toLocaleString() + "+"} label="Site Visits" />
      <StatCard number={stats.rating.toFixed(1)} label="Avg. Rating" />
      <StatCard number={stats.downloads.toLocaleString()} label="Downloads" />
    </div>
  );
}
