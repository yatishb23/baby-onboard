"use client";

import { useState, useEffect } from "react";
import { Key, Copy, Check, Eye, EyeOff } from "lucide-react";

export function GenerateKeyButton() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showKey, setShowKey] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("bob_access_key");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const generateToken = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
      });
      if (!res.ok) {
        throw new Error("Failed to generate token");
      }
      const data = await res.json();
      setToken(data.accessToken);
      localStorage.setItem("bob_access_key", data.accessToken);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (token) {
      await navigator.clipboard.writeText(token);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-gray-100 p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800">
          <Key className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">
          Access Key
        </h3>
      </div>

      {!token ? (
        <button
          onClick={generateToken}
          disabled={loading}
          className="rounded-lg bg-zinc-200 px-6 py-3 font-semibold uppercase tracking-widest text-zinc-900 transition-all hover:bg-zinc-300 active:translate-y-px disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Access Key"}
        </button>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex-1 rounded-lg bg-gray-200 p-4 border border-gray-200 font-mono text-sm break-all flex items-center justify-between">
              <span>{showKey ? token : token.replace(/./g, "•")}</span>
            </div>
            <button
              onClick={() => setShowKey(!showKey)}
              className="rounded-lg p-4 border border-gray-200 bg-gray-100 hover:bg-gray-200 transition-colors"
              title={showKey ? "Hide Key" : "Show Key"}
            >
              {showKey ? (
                <EyeOff className="h-5 w-5 text-gray-600" />
              ) : (
                <Eye className="h-5 w-5 text-gray-600" />
              )}
            </button>
            <button
              onClick={copyToClipboard}
              className="rounded-lg p-4 bg-zinc-200 text-zinc-900 hover:bg-zinc-300 transition-colors"
              title="Copy Key"
            >
              {copied ? (
                <Check className="h-5 w-5 text-zinc-900" />
              ) : (
                <Copy className="h-5 w-5 text-zinc-900" />
              )}
            </button>
          </div>
          <p className="text-sm font-medium text-gray-500">
            Your key is safely stored in your browser.
          </p>
        </div>
      )}

      {error && <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>}
    </div>
  );
}
