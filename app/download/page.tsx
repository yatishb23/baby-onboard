import { GenerateKeyButton } from "@/components/GenerateKeyButton";
import { DownloadButton } from "@/components/DownloadButton";
import { Check, Clock } from "lucide-react";

export default function DownloadPage() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Download</h1>
          <p className="page-subtitle">
            Get the latest version for your platform. Generate your unique access key to get started.
          </p>
        </div>

        <hr className="divider" />

        <div className="content-section">
          <div className="section-header">
            <h2>Latest Release</h2>
          </div>

          <div className="download-buttons">
            <DownloadButton />
          </div>

          <div className="download-note" style={{ marginBottom: 24 }}>
            <span className="platform-badge active">
              <Check size={14} /> Windows
            </span>
            <span className="platform-divider" style={{ margin: "0 8px" }}>|</span>
            <span className="platform-badge">
              <Clock size={14} /> macOS
            </span>
            <span className="platform-divider" style={{ margin: "0 8px" }}>|</span>
            <span className="platform-badge">
              <Clock size={14} /> Linux
            </span>
            <span className="platform-divider" style={{ margin: "0 8px" }}>|</span>
            <span className="platform-badge">Size: 25MB</span>
          </div>

          <p className="download-note">
            Older releases available on{" "}
            <a href="https://github.com/yatishb23/baby-onboard/releases" target="_blank">GitHub Releases</a>
          </p>
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2>Access Key</h2>
          </div>
          <GenerateKeyButton />
        </div>

        <div className="content-section">
          <p className="download-note">
            Free download &middot; No credit card &middot; Lifetime updates
          </p>
        </div>
      </div>
    </div>
  );
}
