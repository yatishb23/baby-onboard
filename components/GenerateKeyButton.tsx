"use client";

import { useState, useEffect } from "react";
import { Key, Copy, Check, Eye, EyeOff, RefreshCw } from "lucide-react";

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
      const res = await fetch("/api/generate", { method: "POST" });
      if (!res.ok) throw new Error("Failed to generate token");
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
    <div className="card">
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <Key size={20} />
        <h3 style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>Access Key</h3>
      </div>

      {!token ? (
        <button
          onClick={generateToken}
          disabled={loading}
          className="btn btn-primary"
        >
          {loading ? "Generating..." : "Generate Access Key"}
        </button>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <div className="form-input" style={{ display: "flex", alignItems: "center", fontFamily: "monospace", fontSize: 13, wordBreak: "break-all" }}>
              <span>{showKey ? token : token.replace(/./g, "•")}</span>
            </div>
            <button
              onClick={() => setShowKey(!showKey)}
              className="btn btn-ghost"
              title={showKey ? "Hide Key" : "Show Key"}
              style={{ padding: "10px" }}
            >
              {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
            <button
              onClick={copyToClipboard}
              className="btn btn-primary"
              title="Copy Key"
              style={{ padding: "10px" }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 13, color: "var(--text-tertiary)", margin: 0 }}>
              Your key is safely stored in your browser.
            </p>
            <button
              onClick={generateToken}
              disabled={loading}
              className="btn btn-ghost"
              style={{ fontSize: 13, padding: "6px 12px", display: "flex", alignItems: "center", gap: 6 }}
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              {loading ? "Generating..." : "Generate New Key"}
            </button>
          </div>
        </div>
      )}

      {error && (
        <p style={{ fontSize: 13, color: "var(--text-tertiary)", marginTop: 8 }}>
          {error}
        </p>
      )}
    </div>
  );
}
