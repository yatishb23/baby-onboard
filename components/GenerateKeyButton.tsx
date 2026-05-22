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
    <div className="mt-8 border-4 border-black bg-white p-6 shadow-hard transition-all hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#000]">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-black">
          <Key className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-black uppercase tracking-tight">
          Access Key
        </h3>
      </div>

      {!token ? (
        <button
          onClick={generateToken}
          disabled={loading}
          className="border-4 border-black bg-yellow-bright px-6 py-3 font-bold uppercase tracking-widest transition-all hover:bg-yellow-400 active:translate-y-1 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Access Key"}
        </button>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-gray-100 p-4 border-2 border-black font-mono text-sm break-all flex items-center justify-between">
              <span>{showKey ? token : token.replace(/./g, "•")}</span>
            </div>
            <button
              onClick={() => setShowKey(!showKey)}
              className="p-4 border-2 border-black bg-white hover:bg-gray-100 transition-colors"
              title={showKey ? "Hide Key" : "Show Key"}
            >
              {showKey ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={copyToClipboard}
              className="p-4 border-2 border-black bg-yellow-bright hover:bg-yellow-400 transition-colors"
              title="Copy Key"
            >
              {copied ? (
                <Check className="h-5 w-5" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </button>
          </div>
          <p className="text-sm font-bold text-black/60">
            Your key is safely stored in your browser.
          </p>
        </div>
      )}

      {error && <p className="mt-2 text-sm text-red-600 font-bold">{error}</p>}
    </div>
  );
}
