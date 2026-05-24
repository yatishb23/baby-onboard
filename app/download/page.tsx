import { GenerateKeyButton } from "@/components/GenerateKeyButton";
import { DownloadButton } from "@/components/DownloadButton";
import { Download, Check, Clock } from "lucide-react";

export default function DownloadPage() {
  return (
    <div className="bg-gray-50">
      <section className="border-b border-gray-200 bg-gray-100 min-h-[calc(100vh-120px)] flex flex-col justify-center">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:py-20">
          <div className="mb-6 inline-block rounded-lg bg-gray-200 px-5 py-2 text-xs font-semibold uppercase tracking-widest">
            v2.0.1 Now Available
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-none sm:text-6xl md:text-7xl">
            Get Ready to Crush
            <br />
            Your Interview
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg font-medium text-gray-700 leading-relaxed">
            Download BOB and generate your unique access key. Walk into every
            interview with an unfair advantage.
          </p>

          <div className="mx-auto mt-10 inline-flex flex-wrap items-center justify-center gap-3 rounded-xl border border-gray-200 bg-gray-200 px-8 py-4 text-xs font-medium uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-gray-700">
              <Check className="h-3.5 w-3.5 text-green-500" /> Windows
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1.5 text-gray-500">
              <Clock className="h-3.5 w-3.5" /> macOS
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1.5 text-gray-500">
              <Clock className="h-3.5 w-3.5" /> Linux
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-700">Size: 25MB</span>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <DownloadButton />
            <p className="text-sm font-medium text-gray-400">
              Free download &middot; No credit card &middot; Lifetime updates
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-md w-full text-left">
            <GenerateKeyButton />
          </div>
        </div>
      </section>
    </div>
  );
}
